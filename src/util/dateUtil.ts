import moment from 'moment';

/**
 * turns a string in the format (DD.MM.YYYY) into a date type
 * @param dateStr string
 * @returns date Date
 */
export function stringToDate(dateStr: string): Date {
  return moment(dateStr, 'DD.MM.YYYY').toDate();
}

/**
 * determines if the date in the param is today
 * @param dateValue Date
 * @returns boolean
 */
export function isToday(dateValue: Date): boolean {
  const today = new Date();
  return (
    dateValue.getDate() === today.getDate() &&
    dateValue.getMonth() === today.getMonth() &&
    dateValue.getFullYear() === today.getFullYear()
  );
}
