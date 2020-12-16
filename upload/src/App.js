import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('Titre du Poste');
  const [mainPicture, setMainPicture] = useState(null);
  const [content, setContent] = useState('Commentaire');

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((res) => res.data)
      .then((data) => setPosts(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    formData.append('title', title);
    formData.append('main_picture', mainPicture);
    axios
      .post('http://localhost:5000/posts', formData)
      .then((res) => res.data)
      .then((data) =>
        setPosts([
          ...posts,
          { content, title, main_picture_url: data.main_picture_url },
        ])
      );
  };

  return (
    <div className='App'>
      <h2>New Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <br />
        <input
          type='file'
          onChange={(e) => setMainPicture(e.target.files[0])}
        />
        <br />
        <input type='submit' value='create new post' />
      </form>

      <h2>Post List</h2>

      {posts.map((post) => {
        return (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            {post.main_picture_url && (
              <img src={'http://localhost:5000/' + post.main_picture_url} />
            )}
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
