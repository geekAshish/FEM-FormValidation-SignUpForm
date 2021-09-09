let form = document.getElementById('form-content');
let name = document.getElementById('name');
let lastname = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    //get the values form the inputs
    const nameValue = name.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (nameValue === '') {
        //show error
        //add error class
        setErrorFor(name, `User Name Cannot Be Empty`);
    } else {
        //add success class
        setSuccessFor(name);
    }


    if (lastnameValue === '') {
        //show error
        //add error class
        setErrorFor(lastName, `Last Name Cannot Be Empty`);
    } else {
        //add success class
        setSuccessFor(lastName);
    }

    
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (regex.test(emailValue)) {
		setSuccessFor(email);
	} else if (emailValue !== regex) {
        //add success class
        setErrorFor(email, 'Email Not Valid');
    };

    if(passwordValue === '') {
        setErrorFor(password, `Password cannot be Empty`);
    } else {
        //add success class
        setSuccessFor(password);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


