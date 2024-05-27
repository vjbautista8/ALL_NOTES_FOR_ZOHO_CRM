import styled from 'styled-components';
const Wrapper = styled.div`
  /* margin: 1.5rem; */
  .author-page-header {
    display: inline-flex;
    align-items: flex-start;

    flex-wrap: wrap;
    gap: 1rem;
  }
  .author-name-date-header {
    padding-top: 0.5rem;
  }
  .note-author-img-header {
    padding-top: 0.5rem;
  }
  .author-img-header {
    height: 39px;
    border-radius: 20%;
    /* border: 1px solid var(--oulinePrimaryColor); */
  }
  .note-content-text-header {
    font-size: medium;
  }
  .date-content {
    font-family: var(--crm-font-bold) !important;
    color: var(--headingColor) !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    margin-bottom: 0.5rem;
    /* border-bottom: 1px dotted; */
    border-bottom: 2px solid var(--tableHeadBorder);
    /* border-color: var(--oulinePrimaryColor); */
    padding: 1rem;
  }
  .date-name {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date-icon {
    margin-right: 8px; /* Adjust the spacing between the icon and the text */
    color: var(--oulinePrimaryColor);
    cursor: pointer;
  }

  .note-content-page {
    background: var(--white);
    /* border-radius: var(--borderRadius); */
    border-radius: 1rem;
    width: 360px;
    border: 1px solid var(--oulinePrimaryColor);
    /* cursor: pointer; */
  }
  .note-content-page-new {
    background: var(--white);
    /* border-radius: var(--borderRadius); */
    border-radius: 1rem;
    width: 322px;
    border: 1px solid var(--oulinePrimaryColor);
    /* cursor: pointer; */
  }

  .note-content-page:hover {
    background-color: var(--tabActiveHoverBg);
  }
  .note-content-page-new:hover {
    background-color: var(--tabActiveHoverBg);
  }
  .note-header {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid var(--grey-100);
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
  .note-author-img {
    width: 15%;
  }
  .note-title-content-page {
    /* width: 85%; */
    height: 8rem;
  }
  .note-content-tile {
    font-family: var(--crm-font-bold) !important;
    margin-bottom: 0.5rem;
  }
  .see-more {
    color: var(--oulinePrimaryColor);
    cursor: pointer;
  }
  .author-img {
    height: 30px;
    border-radius: 50%;
    border-color: var(--oulinePrimaryColor);
    /* padding: 1px; */
    border: 1px solid var(--oulinePrimaryColor);
  }
  .note-details {
    padding: 1rem;
  }
  .author-page {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .module-name {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--oulinePrimaryColor);
    cursor: pointer;
    font-family: var(--crm-font-bold) !important;
  }
  .module-icon {
    margin-right: 8px; /* Adjust the spacing between the icon and the text */
    /* color: var(--oulinePrimaryColor); */
  }
  .module-details {
    display: flex;
    justify-content: space-between;
  }
  .note-list-grid {
    margin-left: 1rem;
    /* margin-top: 1rem; */
    display: inline-flex;
    align-items: flex-start;

    flex-wrap: wrap;
    gap: 1rem;
    height: 320px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .note-content-text-date {
    font-size: smaller;
  }
  .view-icon {
    cursor: pointer;
    margin-left: 8px;
    /* border: 1px solid; */
    /* border-radius: 50%; */
    /* padding: 0.5px; */
  }
  .content-v {
    width: 100%;
    display: inline-flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .rounded-new {
    margin: 2px;
  }
  .rounded-new:hover {
    border-radius: 0%;
  }
  .buttons-tab-new {
    /* display: inline-flex; */
    align-items: flex-start;
    flex-wrap: wrap;
    /* gap: 1rem; */
    background: var(--bg_white);
    height: 81vh;
    overflow: scroll;
    border-radius: 0 0 1rem;
  }

  .module-name-select {
    display: flex;
    align-items: center;
  }
  .module-tab-btn {
    width: -webkit-fill-available;
    text-align: left;
    font-size: medium;
    text-wrap: wrap;
  }
  .mrg-bot-0 {
    margin-bottom: 0 !important;
  }
  .side-bar-module-btn {
  }
  @media (min-width: 1200px) {
    .note-content-page {
      /* width: 280px; */
      width: 344px;
    }
    .note-list-grid {
      /* height: 380px; */
      height: 81vh;
    }
  }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    .note-content-page {
      width: 300px;
    }
    .note-list-grid {
      height: 380px;
    }
  }
  @media (max-width: 767.98px) {
    .note-content-page {
      width: 340px;
    }
  }
`;

export default Wrapper;
