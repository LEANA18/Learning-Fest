function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if(username.value.trim() == "" || email.value.trim() == "" || password1.value.trim() == "" || password2.value.trim() == "")
    {
        alert("No blank values allowed")
        return false
    }
    else
    {   if(password1.value == password2.value)
        {
            return true;
        }
        else
        {
            alert("Password doesn't match")
            return false;
        }
    }
}
