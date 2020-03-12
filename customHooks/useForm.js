import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({email: "test@gmail.com", username: "max", password: "123456"});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            setValues({})
        }
    }, [errors]);

    const handleSubmit = () => {
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = ({nativeEvent}, inputName) => {
        setValues( {...values, [inputName]: nativeEvent.text });
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;