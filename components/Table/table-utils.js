export function isIsoTimestamp(input) {
  // Define regex for ISO 8601 format
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/;

  // Check if the input matches the ISO 8601 pattern
  if (typeof input !== 'string') {
    return false;
  }

  return isoRegex.test(input);
}

export function formatIsoDateWithTime(isoDate) {
  const date = new Date(isoDate);

  // Define month names
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Extract month, day, and year
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Extract hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

  return `${month} ${day}, ${year} ${hours}:${minutes} ${amPm}`;
}

export function orderColumns(columns, customOrder) {
  const orderedColumns = [];

  // Add columns that are in the customOrder array, in the specified order
  customOrder.forEach(column => {
    if (columns.includes(column)) {
      orderedColumns.push(column);
    }
  });

  // Add remaining columns that are not in the customOrder array
  const remainingColumns = columns.filter(
    column => !customOrder.includes(column)
  );
  return [...orderedColumns, ...remainingColumns];
}
