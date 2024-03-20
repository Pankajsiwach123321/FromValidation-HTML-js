const name = document.getElementById('name')
const errorname = document.getElementById('errorname')
const number = document.getElementById('number')
const errornumber = document.getElementById('errornumber')
const email = document.getElementById('email')
const erroremail = document.getElementById('erroremail')
const password = document.getElementById('password')
const errorpassword = document.getElementById('errorpassword')
const confirmpassword = document.getElementById('confirmpassword')
const errorconfirm = document.getElementById('errorconfirm')
const submit = document.getElementById('submit')
const regex = {
    Name: /^[a-zA-Z\s]+$/,
    Number: /^\d{10}$/,
    Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

submit.addEventListener(('click'), function (event) {
    event.preventDefault();
    if (!regex.Name.test(name.value)) {
        errorname.innerHTML = "invalid name"
    }
    else {
        errorname.innerHTML = ""
    }
    if (!regex.Number.test(number.value)) {
        errornumber.innerHTML = "invalid number"
    }
    else {
        errornumber.innerHTML = ""
    }
    if (!regex.Email.test(email.value)) {
        erroremail.innerHTML = "invalid email"
    }
    else {
        erroremail.innerHTML = ""
    }
    if (!regex.Password.test(password.value)) {
        errorpassword.innerHTML = "invalid password"
    }
    else {
        errorpassword.innerHTML = ""
    }
    if (password.value != confirmpassword.value) {
        errorconfirm.innerHTML = "password not same"
    }
    else { errorconfirm.innerHTML = "" }
    if (regex.Name.test(name.value) && regex.Number.test(number.value) && regex.Email.test(email.value) && regex.Password.test(password.value) && password.value == confirmpassword.value) {
        alert(" from submit successfully")
        name.value = ""
        number.value = ""
        email.value = ""
        password.value = ""
        confirmpassword.value = ""
    }
})