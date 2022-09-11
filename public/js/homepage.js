const logout = document.querySelector('.logout');
const userFullName = document.querySelector('.userFullName');
const addPostbtn = document.querySelector('.addpost');
const postText = document.querySelector('.posttext');
const postImg = document.querySelector('.postimg');

// console.log(localStorage.getItem('user'));
userFullName.textContent = localStorage.getItem('user');
const userId = localStorage.getItem('user-id');

logout.addEventListener('click', () => {
  localStorage.clear();
  fetch('/user/logout');
});

addPostbtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/post/addpost', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      text: postText.value,
      img: postImg.value,

    }),
  }).then((data) => data.json()).then((data) => {
    console.log({ data });
    // window.localStorage.setItem('user', `${data.firstname} ${data.lastname}`);
    // window.localStorage.setItem('user-id', data.id);
    // window.open('../html/homepage.html', '_self');
  })

    .catch((result) => console.log(result));
});
