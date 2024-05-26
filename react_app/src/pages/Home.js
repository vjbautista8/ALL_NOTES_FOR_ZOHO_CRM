import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ComponentsPage from './ComponentsPage';
import AllNotesHome from './AllNotesHome';

const Home = () => {
  const { PAGE } = useSelector((store) => store.user);
  if (PAGE == 'relatedList') {
    return <AllNotesHome />;
  }
  return <div>{PAGE}</div>;
};

export default Home;
