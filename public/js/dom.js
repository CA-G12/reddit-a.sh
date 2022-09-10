const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

loginForm.style.display = 'none';
signupForm.style.display = 'none';

login.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

signup.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});
