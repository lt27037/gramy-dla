import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import About from '../pages/About';
import BecomSponsor from '../pages/BecomSponsor';
import Error404 from '../pages/Error404';
import Event from '../pages/Event';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import HomePage from '../pages/HomePage';
import News from '../pages/News';
import Post from '../pages/Post';
import ServerError from '../pages/ServerError';
import Sponsors from '../pages/Sponsors';
import Volunteer from '../pages/Volunteer';

import '../styles/ContentContainer.scss'

const ContentContainer = () => {

   const history = useHistory();
   const [sponsors, setSponsors] = useState([]);
   const [sliders, setSliders] = useState([]);
   const [gallery, setGallery] = useState([]);
   const [posts, setPosts] = useState([]);
   const [events, setEvents] = useState([]);
   const [sponsorsContent, setSponsorsContent] = useState([]);
   const [becomeSponsorContent, setBecomeSponsorContent] = useState([]);
   const [becomeVolunteerContent, setBecomeVolunteerContent] = useState([]);
   const [aboutContent, setAboutContent] = useState([]);
   const [volunteerWidget, setVolunteerWidget] = useState(null);

   const getApiData = async (url) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         return data;
      }catch(err){
         console.error('Błąd łączenia z serwerem! ' + err);
         history.push({
            pathname: '/server-error',
         });
      }
   }

   useEffect(
      () => {
         const endPoint = "https://gramydla.pl/admin/wp-json/acf/v3";

         const endPoint2 = "http://192.168.8.11:1337";
         const sponsorsUrl = `${endPoint2}/sponsors`;
         const slidersUrl = `${endPoint2}/sliders`;
         const postsUrl = `${endPoint2}/posts?_limit=5&_sort=published_at:DESC`;
         const eventsUrl = `${endPoint2}/events?_sort=data:DESC`;
         const galleryUrl = `${endPoint}/posts/?categories=3&per_page=100`;
         const aboutContentUrl = `${endPoint}/posts/?categories=4&per_page=100`;
         const sponsorsContentUrl = `${endPoint}/pages/246`;
         const becomeSponsorContentUrl = `${endPoint}/pages/293`;
         const becomeVolunteerContentUrl = `${endPoint}/pages/254`;

         getApiData(sponsorsUrl).then(data => setSponsors(data));
         getApiData(slidersUrl).then(data => setSliders(data));
         getApiData(postsUrl).then(data => setPosts(data));
         getApiData(eventsUrl).then(data => setEvents(data));
         getApiData(galleryUrl).then(data => setGallery(data));
         getApiData(aboutContentUrl).then(data => setAboutContent(data));
         getApiData(sponsorsContentUrl).then(data => setSponsorsContent(data));
         getApiData(becomeSponsorContentUrl).then(data => setBecomeSponsorContent(data));
         getApiData(becomeVolunteerContentUrl).then(data => setBecomeVolunteerContent(data));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []
   )

   useEffect(
      () => {

         // @ts-ignore
         let photo = becomeVolunteerContent ? becomeVolunteerContent?.acf?.photowidget : null;
         setVolunteerWidget(photo)
      },
      [becomeVolunteerContent]
   )

   return(
      <div className="container">
         <Switch>
            <Route path="/server-error" >
               <ServerError />
            </Route>

            <Route path="/" exact >
               <HomePage sponsors={sponsors} sliders={sliders} posts={posts} events={events} volunteer={volunteerWidget} gallery={gallery.length > 0 ? gallery[0] : null}/>
            </Route>

            <Route path="/aktualnosci" exact>
               <News sponsors={sponsors} posts={posts}/>
            </Route>

            <Route path="/aktualnosci/post/:id">
               <Post posts={posts} events={events} volunteer={volunteerWidget}/>
            </Route>

            <Route path="/galeria">
               <Gallery sponsors={sponsors} photos={gallery}/>
            </Route>

            <Route path="/onas">
               <About content={aboutContent}/>
            </Route>

            <Route path="/sponsorzy">
               <Sponsors sponsors={sponsors}/>
            </Route>

            <Route path="/wydarzenia" exact>
               <Events sponsors={sponsors} events={events}/>
            </Route>

            <Route path="/wydarzenia/:id">
               <Event events={events} volunteer={volunteerWidget}/>
            </Route>

            <Route path="/zostan-wolontariuszem">
               <Volunteer sponsors={sponsors} content={becomeVolunteerContent}/>
            </Route>

            <Route path="/zostan-sponsorem">
               <BecomSponsor sponsors={sponsors} content={becomeSponsorContent}/>
            </Route>
            <Route path="*" >
               <Error404 />
            </Route>
         </Switch>
      </div>
   );
};

export default ContentContainer;