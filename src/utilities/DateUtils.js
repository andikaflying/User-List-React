function getMonthNumber(month) {
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  return months[month];
}

export default function getDisplayedDate(dateString) {
  const slice = dateString.slice(0, 10);
  const dateArray = slice.split('-');
  const year = dateArray[0];
  const month = getMonthNumber(dateArray[1]);
  const day = dateArray[2];

  const date = `${day} ${month} ${year}`;

  return date;
}
