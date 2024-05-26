import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleStateChange } from '../redux/user/userSlice';
import { toggleElementList } from '../helper';

const Header = () => {
  const dispatch = useDispatch();
  const { CURRENT_TAB, TABS, OPTIONS_TABS } = useSelector(
    (store) => store.user
  );
  const handleTabBtn = (tab) => {
    dispatch(handleStateChange({ name: 'CURRENT_TAB', value: tab }));
    const newOptionTabs = toggleElementList(OPTIONS_TABS, tab);
    dispatch(handleStateChange({ name: 'OPTIONS_TABS', value: newOptionTabs }));
  };

  return (
    <div className='darkMainHead '>
      <div className='buttons-tab'>
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
      </div>
    </div>
  );
};

export default Header;
