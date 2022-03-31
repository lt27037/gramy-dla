import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';

import About from '../pages/About';
import BecomSponsor from '../pages/BecomSponsor';
import Error404 from '../pages/Error404';
import Event from '../pages/Event';
import Events from '../pages/Events';
import Galleries from '../pages/Galleries';
import Gallery from '../pages/Gallery';
import HomePage from '../pages/HomePage';
import News from '../pages/News';
import Post from '../pages/Post';
import ServerError from '../pages/ServerError';
import Sponsors from '../pages/Sponsors';
import Volunteer from '../pages/Volunteer';
import {GalleryContext} from '../GalleryContext';


import '../styles/ContentContainer.scss'
import Loading from "../components/Loading";

const ContentContainer = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [sponsors, setSponsors] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [galleryStore, setGalleryStore] = useState({});
  const [newsStore, setNewsStore] = useState([]);
  const [aboutContent, setAboutContent] = useState(null);
  const [sponsorsContent, setSponsorsContent] = useState(null)

  const getApiData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.error('Błąd łączenia z serwerem! ' + err);
      history.push('/server-error');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    () => {
      const endPoint = "https://gramy-dla.herokuapp.com";
      const sponsorsUrl = `${endPoint}/sponsors`;
      const slidersUrl = `${endPoint}/sliders`;
      const postsUrl = `${endPoint}/posts?_limit=5&_sort=published_at:DESC`;
      const eventsUrl = `${endPoint}/events?_sort=data:DESC`;

      getApiData(sponsorsUrl).then(data => setSponsors(data));
      getApiData(slidersUrl).then(data => setSliders(data));
      getApiData(postsUrl).then(data => setPosts(data));
      getApiData(eventsUrl).then(data => setEvents(data));
    }, []
  )

  if (isLoading) {
    return <Loading marginTop={window.innerHeight / 2} />
  }

  return (
    <div className="container">
      <GalleryContext.Provider value={{galleryStore, setGalleryStore}}>
        <Switch>
          <Route path="/server-error">
            <ServerError/>
          </Route>

          <Route path="/" exact>
            <HomePage sponsors={sponsors} sliders={sliders} posts={posts}/>
          </Route>

          <Route path="/aktualnosci" exact>
            <News
              sponsors={sponsors}
              newsStore={newsStore}
              setNewsStore={setNewsStore}
            />
          </Route>

          <Route path="/aktualnosci/post/:id">
            <Post newsStore={newsStore}/>
          </Route>

          <Route path="/galeria" exact>
            <Galleries sponsors={sponsors}/>
          </Route>

          <Route path="/galeria/:id">
            <Gallery/>
          </Route>

          <Route path="/onas">
            <About aboutContent={aboutContent} setAboutContent={setAboutContent}/>
          </Route>

          <Route path="/sponsorzy">
            <Sponsors sponsors={sponsors} sponsorsContent={sponsorsContent} setSponsorsContent={setSponsorsContent}/>
          </Route>

          <Route path="/wydarzenia" exact>
            <Events sponsors={sponsors} events={events}/>
          </Route>

          <Route path="/wydarzenia/:id">
            <Event/>
          </Route>

          <Route path="/zostan-wolontariuszem">
            <Volunteer sponsors={sponsors}/>
          </Route>

          <Route path="/zostan-sponsorem">
            <BecomSponsor sponsors={sponsors}/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>

        </Switch>
      </GalleryContext.Provider>
    </div>
  );
};

export default ContentContainer;