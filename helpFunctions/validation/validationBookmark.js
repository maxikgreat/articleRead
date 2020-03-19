export default function validationBookmark(values){

    let errors = {}
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

    return errors
}