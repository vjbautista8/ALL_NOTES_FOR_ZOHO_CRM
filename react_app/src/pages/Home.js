import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ComponentsPage from './ComponentsPage';
import AllNotesHome from './AllNotesHome';
import HourGlassLoading from '../components/loading/HourGlassLoading';

const Home = () => {
  const { PAGE, LOADING, METADATA } = useSelector((store) => store.user);

  if (PAGE == 'all-notes-home') {
    return <AllNotesHome />;
  }
  return <div>{PAGE}</div>;
};

export default Home;
