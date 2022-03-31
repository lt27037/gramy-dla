// @ts-nocheck
import React, {useState, useEffect, useContext} from 'react'

import PhotoCarousel from '../components/PhotoCarousel';
import GalleryFolder from '../components/GalleryFolder';
import Loading from '../components/Loading';
import {GalleryContext} from '../GalleryContext';

import '../styles/Gallery.scss'

const Galleries = ({sponsors}) => {
  const {galleryStore, setGalleryStore} = useContext(GalleryContext);
  const [galleries, setGalleries] = useState(galleryStore)
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let endPoint = 'https://gramy-dla.herokuapp.com';

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    () => {
      setGalleries(galleryStore)
    },
    [galleryStore]
  )

  useEffect(() => {
    window.scrollTo(0, 0);

    if (Object.keys(galleryStore).length === 0) {
      let url = `${endPoint}/galleries?_sort=published_at:DESC`
      getData(url).then(data => {
        setGalleryStore(data)
      })
    } else {
      setGalleries(galleryStore);
    }
  }, [])

  useEffect(() => {
    if (galleries?.length) {
      setFolders(galleries?.map(gallery => <GalleryFolder gallery={gallery} key={gallery.id}/>));
    }
  }, [galleries])

  return (
    <>
      <PhotoCarousel items={sponsors}/>
      {isLoading
        ? <Loading marginTop="30vh"/>
        : <div className="FoldersBox">{folders}</div>
      }
    </>
  );
};

export default Galleries;