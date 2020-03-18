export default function validationRules(values) {
    let errors = {};
    //----------------------MAIL-------------------------
    if (!values.email) {
        errors.email = 'Field is required!';
    } else if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(values.email)) {
        errors.email = 'Incorrect email address!';
    }
    //----------------------BOOKMARK-------------------------
    if(!values.bookName){
        errors.bookName = 'Field is required!';
    } else if (!/^[0-9a-zA-Z_.-]+$/g.test(values.bookName)) {
        errors.bookName = "Enter valid username!";
    }
    //----------------------URL-------------------------
    if(!values.url){
        errors.url = "Field is required!"
    } else if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(values.url)) {
        errors.url = "Enter valid URL address!"
    }
    //----------------------PASSWORD-------------------------
    if (!values.password){
        errors.password = "Field is required!"
    } else if (values.password.length < 6){
        errors.password = "Must contain min. 6 characters!"
    }
    return errors;
};