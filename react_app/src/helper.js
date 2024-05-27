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

export const sortListByKeyDate = (list, key, sortOrder = 'asc') => {
  return list.sort((a, b) => {
    let valueA = a[key];
    let valueB = b[key];

    // Check if the value is a date string and convert to Date object
    if (Date.parse(valueA) && Date.parse(valueB)) {
      valueA = new Date(valueA);
      valueB = new Date(valueB);
    }

    // Compare values for sorting
    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
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

export const getProperWidgetName = (entity, data) => {
  switch (entity) {
    case 'Contacts':
      return `${data?.First_Name} ${data?.Last_Name}`;
    case 'Leads':
      return `${data?.First_Name} ${data?.Last_Name}`;
    case 'Accounts':
      return `${data?.Account_Name}`;
    case 'Deals':
      return `${data?.Deal_Name}`;
    default:
      return `${data?.Name}`;
  }
};

export const borderColors = [
  '#FF5733', // Vibrant Red-Orange
  '#33FF57', // Bright Green
  '#3357FF', // Strong Blue
  '#FF33A1', // Pink
  '#FFD700', // Gold
  '#8A2BE2', // Blue Violet
  '#00CED1', // Dark Turquoise
  '#FF4500', // Orange Red
  '#32CD32', // Lime Green
  '#800080', // Purple
  '#FF6347', // Tomato
  '#4682B4', // Steel Blue
  '#008080', // Teal
  '#DAA520', // Goldenrod
  '#DC143C', // Crimson
  '#7B68EE', // Medium Slate Blue
  '#FF1493', // Deep Pink
  '#1E90FF', // Dodger Blue
  '#B22222', // Firebrick
  '#20B2AA', // Light Sea Green
  '#5F9EA0', // Cadet Blue
  '#FF7F50', // Coral
  '#6495ED', // Cornflower Blue
  '#FF69B4', // Hot Pink
  '#CD5C5C', // Indian Red
  '#4B0082', // Indigo
  '#7FFF00', // Chartreuse
  '#8B0000', // Dark Red
  '#008B8B', // Dark Cyan
  '#FF8C00', // Dark Orange
  '#9932CC', // Dark Orchid
  '#8B4513', // Saddle Brown
  '#2E8B57', // Sea Green
  '#3CB371', // Medium Sea Green
  '#00FA9A', // Medium Spring Green
  '#87CEFA', // Light Sky Blue
  '#FFB6C1', // Light Pink
  '#FFA07A', // Light Salmon
  '#20B2AA', // Light Sea Green
  '#778899', // Light Slate Gray
  '#B0C4DE', // Light Steel Blue
  '#00FF7F', // Spring Green
  '#D2691E', // Chocolate
  '#9ACD32', // Yellow Green
  '#40E0D0', // Turquoise
  '#C71585', // Medium Violet Red
  '#DB7093', // Pale Violet Red
  '#FF6347', // Tomato
  '#4682B4', // Steel Blue
  '#00BFFF', // Deep Sky Blue
];

// Example usage in HTML
// <div style="border: 2px solid #FF5733;"></div>

// Example usage in HTML
// <div style="border: 2px solid #FF5733;"></div>
