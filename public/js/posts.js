const posts = document.querySelector('.posts');

const createElement = (type, options, children) => {
  const element = document.createElement(type);
  element.className = options.class;
  element.src = options.src;

  if (Array.isArray(children) && children != null) {
    children.forEach((ele) => {
      element.appendChild(ele);
    });
  } else {
    element.textContent = children;
  }

  return element;
};

const createOnePost = (data) => {
  data.forEach((post) => {
    // console.log(ele.firstname);
    // const nameh3 = createElement('h3', { class: '' }, game.name);
    // const iconDown = createElement('i', { class: '' }, '-1');
    // const iconUp = createElement('i', { class: 'fa fa-arrow-up' }, '-1');
    const up = createElement('a', { class: '' }, '+');
    const down = createElement('a', { class: '' }, '-');
    const spanVotes = createElement('span', { class: '' }, '15');
    const postVotes = createElement('div', { class: 'post-votes' }, [down, spanVotes, up]);

    const userImg = createElement('img', { class: 'user-img' }, null);
    userImg.src = post.userimg;

    const firstnameS = createElement('span', { class: 'firstname' }, post.firstname);
    const lastNameS = createElement('span', { class: 'lastname' }, post.lastname);
    const userName = createElement('a', { class: 'user-name' }, [firstnameS, lastNameS]);

    const userDetails = createElement('div', { class: 'user-details' }, [userImg, userName]);

    const postText = createElement('p', { class: 'post-text' }, post._text);
    const postImg = createElement('img', { class: 'post-img' }, null);
    postImg.src = post.img;
    const postContent = createElement('div', { class: 'post-content' }, [postText, postImg]);

    const iconComment = createElement('i', { class: 'fa fa-commenting' }, null);
    const commentA = createElement('a', { class: '' }, iconComment);
    const postIcons = createElement('div', { class: 'post-icons' }, [commentA]);

    const postDetails = createElement('div', { class: 'post-details' }, [userDetails, postContent, postIcons]);

    const onePost = createElement('div', { class: 'post' }, [postVotes, postDetails]);
    posts.appendChild(onePost);
  });
};

fetch('/post/').then((response) => response.json())
  .then((data) => createOnePost(data));
