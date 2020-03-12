export default function validationRules(values) {
    let errors = {};
    //mail
    if (!values.email) {
        errors.email = 'Field is required!';
    } else if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(values.email)) {
        errors.email = 'Incorrect email address!';
    }
    //password
    if (!values.password){
        errors.password = "Field is required!"
    } else if (values.password.length < 6){
        errors.password = "Must contain min. 6 characters!"
    }
    return errors;
};