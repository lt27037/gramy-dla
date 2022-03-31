/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
// @ts-nocheck
import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import handleFindLink from '../links';

import BecomeVolunteer from '../components/BecomeVolunteer';
import ClosestEvent from '../components/ClosestEvent';

import '../styles/Post.scss';
import Loading from "../components/Loading";

import thumbnail from '../images/thumbnail-placeholder.png';

const Post = ({newsStore}) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const endPoint = 'https://gramy-dla.herokuapp.com';

  const {id} = useParams();

  const handleBackClick = () => history.push({
    pathname: '/aktualnosci',
    postid: id,
  });

  const getPosts = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    if (newsStore?.length !== 0) {
      setPost(newsStore.filter(post => Number(post.id) === Number(id)));
    } else {
      let url = `${endPoint}/posts/${id}`
      getPosts(url).then(data => setPost(data));
    }
  }, [])


  if (isLoading) {
    return <Loading marginTop={window.innerHeight / 2} />
  }

  return (
    <>
      <div className="post">
        <div className="post__date">{post?.published_at.slice(0, 10)}</div>
        <h2 className="post__title">{post?.title}</h2>
        <img src={post?.mainPhoto.url || thumbnail} alt="Zdjęcie z posta 1" className="post__photo photo--first"/>
        {post?.pierwszyParagraf && <p className="post__content content--first">{handleFindLink(post?.pierwszyParagraf)}</p>}
        {post?.photo2 && <img src={post.photo2.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/>}
        {post?.drugiParagraf && <p className="post__content content--second">{handleFindLink(post.drugiParagraf)}</p>}
        {post?.photo3 && <img src={post.photo3.url} alt="Zdjęcie z posta 1" className="post__photo photo--second"/>}
        {post?.trzeciParagraf && <p className="post__content content--second">{handleFindLink(post.trzeciParagraf)}</p> }
        <ClosestEvent/>
        <BecomeVolunteer/>
        <button className="button button--back" onClick={handleBackClick}>Wróć do aktualności</button>
      </div>
    </>
  );
};

export default Post;