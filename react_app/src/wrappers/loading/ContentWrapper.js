import styled from 'styled-components';
const Wrapper = styled.div`
  margin: 1.5rem;
  .date-content {
    font-family: var(--crm-font-bold) !important;
    color: var(--headingColor) !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    /* border-bottom: 1px dotted; */
    border-bottom: 2px solid var(--tableHeadBorder);
    /* border-color: var(--oulinePrimaryColor); */
    padding-bottom: 1rem;
  }
  .date-name {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date-icon {
    margin-right: 8px; /* Adjust the spacing between the icon and the text */
    color: var(--oulinePrimaryColor);
  }

  .note-content-page {
    background: var(--white);
    /* border-radius: var(--borderRadius); */
    border-radius: 1rem;
    width: 360px;
    border: 1px solid var(--oulinePrimaryColor);
    cursor: pointer;
  }

  .note-content-page:hover {
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
    width: 85%;
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
  .module-tab-btn {
    min-width: 10rem;
  }
  @media (min-width: 1200px) {
    .note-content-page {
      width: 280px;
    }
    .note-list-grid {
      height: 380px;
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
