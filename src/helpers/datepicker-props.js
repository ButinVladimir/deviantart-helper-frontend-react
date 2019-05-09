export const datePickerProps = {
  isClearable: true,
  className: 'input',
  autoComplete: 'off',
  withPortal: true,
  showYearDropdown: true,
  showMonthDropdown: true,
  dateFormat: 'dd.MM.yyyy',
};

export const datetimePickerProps = {
  ...datePickerProps,
  showTimeSelect: true,
  dateFormat: 'dd.MM.yyyy HH:mm',
  timeFormat: 'HH:mm',
};
