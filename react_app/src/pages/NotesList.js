import React, { useEffect, useState } from 'react';
import { LuCalendarDays } from 'react-icons/lu';
import { TbFilterCog } from 'react-icons/tb';
import { IoIosMore } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import { TiThMenu } from 'react-icons/ti';
import Wrapper from '../wrappers/loading/ContentWrapper';
import NoteContent from './NoteContent';
import {
  filterByKeyAndValues,
  findObjectByKeyValue,
  sortByKey,
  sortByKeyAndValue,
  sortListByKeyDate,
} from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { handleStateChange } from '../redux/user/userSlice';
const NotesList = () => {
  const dispatch = useDispatch();
  const { CURRENT_TAB, TABS, OPTIONS_TABS, OPEN_SIDEBAR_MODULES } = useSelector(
    (store) => store.user
  );
  const noteList = [
    {
      title: 'CRM Data Integration',
      content:
        'Generate comprehensive reports to monitor and improve CRM performance..',
      module: 'Deals',
      date: 'Wed, 01 May 2024 03:01:00 AM',
    },
    {
      title: 'Targeted Marketing Campaigns',
      content:
        'Manage your contacts efficiently with our streamlined CRM tools..',
      module: 'Deals',
      date: 'Thu, 02 May 2024 11:13:00 PM',
    },
    {
      title: 'CRM Workflow Automation',
      content: 'Convert leads more effectively with targeted CRM strategies..',
      module: 'Leads',
      date: 'Fri, 03 May 2024 04:13:00 AM',
    },
    {
      title: 'Targeted Marketing Campaigns',
      content:
        'Create targeted marketing campaigns based on CRM data insights..',
      module: 'Leads',
      date: 'Sat, 04 May 2024 10:51:00 AM',
    },
    {
      title: 'Optimizing CRM Performance',
      content: 'Get the most out of your CRM with our detailed user guide..',
      module: 'Contacts',
      date: 'Sun, 05 May 2024 01:29:00 AM',
    },
    {
      title: 'Sales Pipeline Management',
      content:
        'Enhance your customer relationships with personalized CRM interactions..',
      module: 'Deals',
      date: 'Mon, 06 May 2024 12:52:00 PM',
    },
    {
      title: 'CRM User Guide',
      content:
        'Integrate data seamlessly across your CRM and other business tools..',
      module: 'Leads',
      date: 'Tue, 07 May 2024 08:48:00 AM',
    },
    {
      title: 'Effective Lead Conversion',
      content: 'Convert leads more effectively with targeted CRM strategies..',
      module: 'Leads',
      date: 'Wed, 08 May 2024 10:59:00 AM',
    },
    {
      title: 'Comprehensive CRM Reporting',
      content:
        'Generate comprehensive reports to monitor and improve CRM performance..',
      module: 'Contacts',
      date: 'Thu, 09 May 2024 03:16:00 AM',
    },
    {
      title: 'Advanced CRM Analytics',
      content:
        'Leverage advanced analytics to gain deeper insights into your CRM data..',
      module: 'Contacts',
      date: 'Fri, 10 May 2024 02:10:00 PM',
    },
    {
      title: 'CRM Task Automation',
      content:
        'Automate repetitive tasks to save time and increase productivity..',
      module: 'Deals',
      date: 'Sat, 11 May 2024 12:25:00 AM',
    },
    {
      title: 'Custom CRM Dashboards',
      content:
        'Create custom dashboards to visualize key CRM metrics and data..',
      module: 'Contacts',
      date: 'Sun, 12 May 2024 04:26:00 AM',
    },
    {
      title: 'CRM System Customization',
      content: 'Customize your CRM system to better suit your business needs..',
      module: 'Contacts',
      date: 'Mon, 13 May 2024 08:36:00 AM',
    },
    {
      title: 'Customer Segmentation Tools',
      content:
        'Segment your customers more effectively with advanced CRM tools..',
      module: 'Leads',
      date: 'Tue, 14 May 2024 08:54:00 AM',
    },
    {
      title: 'CRM Data Integration',
      content:
        'Integrate data seamlessly across your CRM and other business tools..',
      module: 'Deals',
      date: 'Wed, 15 May 2024 03:46:00 AM',
    },
    {
      title: 'Leads Tracking Optimization',
      content:
        'Optimize your leads tracking and conversion processes with these strategies..',
      module: 'Leads',
      date: 'Thu, 16 May 2024 04:33:00 AM',
    },
    {
      title: 'Efficient Contact Management',
      content:
        'Manage your contacts efficiently with our streamlined CRM tools..',
      module: 'Contacts',
      date: 'Fri, 17 May 2024 09:27:00 AM',
    },
    {
      title: 'Enhancing Customer Relationships',
      content:
        'Enhance your customer relationships with personalized CRM interactions..',
      module: 'Contacts',
      date: 'Sat, 18 May 2024 09:54:00 AM',
    },
    {
      title: 'Comprehensive CRM Reporting',
      content:
        'Generate comprehensive reports to monitor and improve CRM performance..',
      module: 'Deals',
      date: 'Sun, 19 May 2024 09:33:00 AM',
    },
    {
      title: 'Targeted Marketing Campaigns',
      content:
        'Create targeted marketing campaigns based on CRM data insights..',
      module: 'Deals',
      date: 'Mon, 20 May 2024 10:55:00 PM',
    },
  ];

  const [noteData, setNoteData] = useState(noteList);

  useEffect(() => {
    const key = 'module';
    const filteredList = filterByKeyAndValues(noteList, key, OPTIONS_TABS);
    const sortedList = sortListByKeyDate(filteredList, 'date', 'asc');
    setNoteData(sortedList);
  }, [OPTIONS_TABS]);

  return (
    <Wrapper>
      <div className='date-content'>
        <div className='date-name'>
          <TiThMenu
            className='date-icon'
            onClick={() => {
              dispatch(
                handleStateChange({
                  name: 'OPEN_SIDEBAR_MODULES',
                  value: !OPEN_SIDEBAR_MODULES,
                })
              );
            }}
          />
          <TbFilterCog className='date-icon' />
          Filter
        </div>
        <div className='num-notes'> {noteData.length} Notes</div>
        <div className='view-options'>
          <div className='date-name'>
            Grid View By Default
            <HiViewGrid className='date-icon view-icon' />
          </div>
        </div>
      </div>
      <div className='note-list-grid'>
        <div className='content-v'>
          {noteData.map((note, i) => {
            const moduleDetails = findObjectByKeyValue(
              TABS,
              'name',
              note?.module
            );
            // console.log('moduleDetails', moduleDetails);
            return (
              <>
                <NoteContent note={note} module={moduleDetails} />
              </>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default NotesList;
