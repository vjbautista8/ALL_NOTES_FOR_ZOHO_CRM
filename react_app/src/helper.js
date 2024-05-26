export const toggleElementList = (arr, element) => {
  // Check if the element exists in the array
  if (arr.includes(element)) {
    // Remove the element if it exists
    return arr.filter((item) => item !== element);
  } else {
    // Add the element if it doesn't exist
    return [...arr, element];
  }
};

export const findObjectByKeyValue = (list, key, value) => {
  return list.find((item) => item[key] === value);
  // Example usage:
  // const items = [
  //   { name: 'John', age: 25 },
  //   { name: 'Jane', age: 22 },
  //   { name: 'Bob', age: 30 },
  //   { name: 'Alice', age: 28 },
  // ];

  // const result = findObjectByKeyValue(items, 'name', 'Jane');
  // console.log(result); // Output: { name: 'Jane', age: 22 }

  // const result2 = findObjectByKeyValue(items, 'age', 30);
  // console.log(result2); // Output: { name: 'Bob', age: 30 }
};

export const filterByKeyAndValues = (mainList, key, valueList) => {
  return valueList.flatMap((value) =>
    mainList.filter((item) => item[key] === value)
  );
  // Example usage
  //   const mainList = [
  //     {
  //       title: 'CRM Data Integration',
  //       content:
  //         'Generate comprehensive reports to monitor and improve CRM performance..',
  //       module: 'Deals',
  //     },
  //     {
  //       title: 'Targeted Marketing Campaigns',
  //       content:
  //         'Manage your contacts efficiently with our streamlined CRM tools..',
  //       module: 'Deals',
  //     },
  //     {
  //       title: 'CRM Workflow Automation',
  //       content: 'Convert leads more effectively with targeted CRM strategies..',
  //       module: 'Leads',
  //     },
  //     {
  //       title: 'Advanced CRM Analytics',
  //       content:
  //         'Leverage advanced analytics to gain deeper insights into your CRM data..',
  //       module: 'Contacts',
  //     },
  //     {
  //       title: 'Effective Lead Conversion',
  //       content: 'Convert leads more effectively with targeted CRM strategies..',
  //       module: 'Leads',
  //     },
  //     {
  //       title: 'Optimizing CRM Performance',
  //       content: 'Get the most out of your CRM with our detailed user guide..',
  //       module: 'Contacts',
  //     },
  //   ];

  //   const key = 'module';
  //   const valueList = ['Deals', 'Contacts'];

  //   const filteredList = filterByKeyAndValues(mainList, key, valueList);
  //   console.log(filteredList);
};

export const sortByKeyAndValue = (list, key, value) => {
  return list
    .sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    })
    .filter((item) => item[key] === value);
};

export const sortByKey = (list, key, order = 'asc') => {
  return list.sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
  // Sort by 'module' in ascending order
  //   const sortedDataAsc = sortByKey(crmData, 'module', 'asc');
  //   console.log('Sorted Ascending:', sortedDataAsc);

  //   // Sort by 'module' in descending order
  //   const sortedDataDesc = sortByKey(crmData, 'module', 'desc');
  //   console.log('Sorted Descending:', sortedDataDesc);
};
