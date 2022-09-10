const signupbtn = document.querySelector('.signupbtn');
const loginbtn = document.querySelector('.loginbtn');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirmPassword');
const img = document.querySelector('#img');
const email = document.querySelector('#email');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');

signupbtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/user/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirm.value,
      img: img.value,
    }),

  }).then((data) => data.json()).then((data) => window.open('../html/homepage.html'))
    .catch((result) => console.log(result));
});

loginbtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/user/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      email: emailLogin.value,
      password: passwordLogin.value,

    }),

  }).then((data) => data.json()).then((data) => window.open('../html/homepage.html'))
    .catch((result) => console.log(result));
});
