/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

import PhotoCarousel from '../components/PhotoCarousel';
import PhotoSlider from '../components/PhotoSlider';
import ClosestEvent from '../components/ClosestEvent';
import BecomeVolunteer from '../components/BecomeVolunteer';
import PostShortcut from '../components/PostShortcut';

import '../styles/HomePage.scss'

const HomePage = ({sponsors, sliders, posts}) => {
  const [postShortcuts, setPostShortcuts] = useState([]);
  const history = useHistory();

  const handlePostClick = (id) => {
    history.push(`/aktualnosci/post/${id}`);
  }

  const handleNewsLinkClick = () => {
    history.push('/aktualnosci/');
  }

  useEffect(() => {
    const postsArr = posts.map((post) => (
      <PostShortcut key={post.id} post={post} click={handlePostClick}/>
    ));

    setPostShortcuts(postsArr.filter(post => postsArr.indexOf(post) < 5))
  }, [posts])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {sliders && <PhotoSlider items={sliders}/>}
      <PhotoCarousel items={sponsors}/>
      <div className="homeBox">
        <BecomeVolunteer/>
        <div className="homePostWrapper">
          <h3 className="homePostWrapper__title">Aktualności</h3>
          {postShortcuts ? postShortcuts : null}
          <button className="button" onClick={handleNewsLinkClick}>Zobacz więcej</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;