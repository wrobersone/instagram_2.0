import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'wmrobersone',
    userImg:
      'https://lh3.googleusercontent.com/a-/AFdZucqbkszGcqedu92W0L6pLFwhkasal1L-CDoAgrIp=s288-p-rw-no',
    img: 'https://lh3.googleusercontent.com/a-/AFdZucqbkszGcqedu92W0L6pLFwhkasal1L-CDoAgrIp=s288-p-rw-no',
    caption: 'This is Dope!',
  },
  {
    id: '123',
    username: 'wmrobersone',
    userImg:
      'https://lh3.googleusercontent.com/a-/AFdZucqbkszGcqedu92W0L6pLFwhkasal1L-CDoAgrIp=s288-p-rw-no',
    img: 'https://lh3.googleusercontent.com/a-/AFdZucqbkszGcqedu92W0L6pLFwhkasal1L-CDoAgrIp=s288-p-rw-no',
    caption: 'This is Dope!',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
