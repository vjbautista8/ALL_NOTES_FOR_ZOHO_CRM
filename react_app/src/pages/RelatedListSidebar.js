import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../wrappers/loading/ContentWrapper';
import { VscFileSubmodule } from 'react-icons/vsc';
import { MdMenuOpen } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { FaCircle } from 'react-icons/fa6';
import { FaRegDotCircle, FaRegCircle } from 'react-icons/fa';
import { borderColors } from '../helper';
const RelatedListSidebar = () => {
  const {
    CURRENT_TAB,
    TABS,
    OPTIONS_TABS,
    METADATA,
    SERVICE_ORIGIN,
    CURRENT_RECORD_DATA,
    RELATED_LIST,
  } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div className='date-content mrg-bot-0'>
        <div className='date-name'>
          <VscFileSubmodule className='date-icon' />
          Notes of Related Records
        </div>

        {/* <div className='view-options'>
          <div className='date-name'>
            <TiThMenu className='date-icon view-icon' />
          </div>
        </div> */}
      </div>
      <div className='buttons-tab-new'>
        {RELATED_LIST.map((tab, i) => {
          const styleBorder = {
            borderColor: borderColors[i],
            color: borderColors[i],
          };
          if (tab?.visible || !tab?.visible)
            return (
              <>
                <button
                  className={`lyte-button outlineprimary  newbutton rounded-new module-tab-btn side-bar-module-btn ${
                    OPTIONS_TABS.includes(tab?.name)
                      ? 'active-rounded'
                      : 'in-active'
                  }`}
                  // style={styleBorder}
                  // onClick={() => {
                  //   handleTabBtn(tab?.name);
                  // }}
                >
                  <div className='module-name-select'>
                    <FaCircle className='date-icon' style={styleBorder} />
                    {tab?.name}
                  </div>
                </button>
              </>
            );
        })}
      </div>
    </Wrapper>
  );
};

export default RelatedListSidebar;
