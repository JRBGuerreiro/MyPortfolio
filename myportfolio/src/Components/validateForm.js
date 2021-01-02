export default function validateFormInfo(values) {
    let errors={}

    if(!values.name.trim()) {
        errors.name = "Name Required"
    }

    if(!values.lastName.trim()) {
        errors.lastName = "Last Name Required"
    }

    if(!values.email) {
        errors.email = "E-mail required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "E-mail in the wrong format"
    }


    if(!values.textArea.trim().length < 50) {
        errors.textArea = "Message needs to be at least 50 characters long"
    }

    return errors
}