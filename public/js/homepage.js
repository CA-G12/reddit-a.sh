const logout = document.querySelector('.logout');

logout.addEventListener('click', () => {
  fetch('/user/logout');
});
