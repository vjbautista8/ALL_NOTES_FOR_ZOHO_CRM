import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleStateChange } from '../redux/user/userSlice';
import {
  borderColors,
  getProperWidgetName,
  toggleElementList,
} from '../helper';
import Wrapper from '../wrappers/loading/ContentWrapper';

const Header = () => {
  const dispatch = useDispatch();
  const {
    CURRENT_TAB,
    TABS,
    OPTIONS_TABS,
    METADATA,
    SERVICE_ORIGIN,
    CURRENT_RECORD_DATA,
    RELATED_LIST,
  } = useSelector((store) => store.user);
  const handleTabBtn = (tab) => {
    dispatch(handleStateChange({ name: 'CURRENT_TAB', value: tab }));
    const newOptionTabs = toggleElementList(OPTIONS_TABS, tab);
    dispatch(handleStateChange({ name: 'OPTIONS_TABS', value: newOptionTabs }));
  };

  return (
    <Wrapper>
      <div className='darkMainHead '>
        <div className='record-content-header'>
          <div className='author-page-header'>
            <div className='note-author-img-header'>
              {(CURRENT_RECORD_DATA?.Record_Image && (
                <img
                  src={`${SERVICE_ORIGIN}/crm/EntityImageAttach.do?action_module=${METADATA?.Entity}&entityId=${METADATA?.EntityId[0]}&actionName=readImage&fileId=${CURRENT_RECORD_DATA?.Record_Image}`}
                  alt='author-name'
                  className='author-img-header'
                  // style={styleBorder}
                />
              )) || <></>}
            </div>
            <div className='author-name-date-header'>
              <div class='note-content-tile-header'>
                {getProperWidgetName(METADATA?.Entity, CURRENT_RECORD_DATA)}
              </div>
              <div class='note-content-text-header'>{METADATA?.Entity}</div>
            </div>
          </div>
        </div>
        {/* <div className='buttons-tab'>
          {TABS.map((tab, i) => {
            const styleBorder = {
              borderColor: tab?.color,
              color: tab?.color,
            };
            return (
              <>
                <button
                  className={`lyte-button outlineprimary  newbutton rounded module-tab-btn ${
                    OPTIONS_TABS.includes(tab?.name)
                      ? 'active-rounded'
                      : 'in-active'
                  }`}
                  style={styleBorder}
                  onClick={() => {
                    handleTabBtn(tab?.name);
                  }}
                >
                  {tab?.name}
                </button>
              </>
            );
          })}
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Header;
