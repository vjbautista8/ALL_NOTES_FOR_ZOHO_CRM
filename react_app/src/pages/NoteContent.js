import React from 'react';
import { VscFileSubmodule } from 'react-icons/vsc';
import { CgAttachment } from 'react-icons/cg';
import { useSelector } from 'react-redux';
const NoteContent = ({ note, module }) => {
  const { PAGE, LOADING, METADATA, OPEN_SIDEBAR_MODULES } = useSelector(
    (store) => store.user
  );
  //322px
  const styleBorder = {
    borderColor: module?.color,
    // color: module?.color,
  };
  const textColor = {
    color: module?.color,
  };
  // console.log('styleBorder', styleBorder, module);
  return (
    <div
      className={`${
        OPEN_SIDEBAR_MODULES ? 'note-content-page' : 'note-content-page-new'
      }`}
      style={styleBorder}
    >
      <div className='note-header'>
        {/* <div className='note-author-img'>
          <img
            src='https://contacts.zoho.com/file?ID=689966586&fs=thumb'
            alt='author-name'
            className='author-img'
          />
        </div> */}
        <div className='note-title-content-page'>
          <div class='note-content-tile'>{note?.title}</div>
          <div class='note-content-text'>
            {note?.content}
            <span className='see-more' style={textColor}>
              See More
            </span>
          </div>
        </div>
      </div>
      <div className='note-details'>
        <div className='author-page'>
          <div className='note-author-img'>
            <img
              src='https://contacts.zoho.com/file?ID=689966586&fs=thumb'
              alt='author-name'
              className='author-img'
              style={styleBorder}
            />
          </div>
          <div className='author-name-date'>
            <div class='note-content-tile'>Von John Bautista</div>
            <div class='note-content-text note-content-text-date'>
              {note?.date}
            </div>
          </div>
        </div>
        <div className='module-details'>
          <div className='module-name' style={textColor}>
            <VscFileSubmodule className='module-icon' />
            {note?.module}
          </div>
          <div className='module-name' style={textColor}>
            <CgAttachment className='module-icon' />2
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteContent;
