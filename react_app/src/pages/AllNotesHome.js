import React, { useEffect } from 'react';
import Header from './Header';
import NotesList from './NotesList';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedList, getSelectedRecordByID } from '../redux/user/zoho';
import RelatedListSidebar from './RelatedListSidebar';
const AllNotesHome = () => {
  const dispatch = useDispatch();
  const { PAGE, LOADING, METADATA, OPEN_SIDEBAR_MODULES } = useSelector(
    (store) => store.user
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          getSelectedRecordByID({
            Entity: METADATA.Entity,
            RecordID: METADATA.EntityId[0],
          })
        ).then((dispatchResult) => {
          if (dispatchResult.error)
            throw new Error(dispatchResult.error.message);
        });
        await dispatch(
          getRelatedList({
            Entity: METADATA.Entity,
          })
        ).then((dispatchResult) => {
          if (dispatchResult.error)
            throw new Error(dispatchResult.error.message);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <>
      <Header />
      <div
        className={`${
          OPEN_SIDEBAR_MODULES ? 'page-all-notes' : 'page-all-note-close'
        }`}
      >
        {OPEN_SIDEBAR_MODULES && <RelatedListSidebar />}

        <NotesList />
      </div>
    </>
  );
};

export default AllNotesHome;
