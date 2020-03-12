import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
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
        setValues(values => ({...values, ...values.password = ""}))
    };

    const handleChange = () => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;