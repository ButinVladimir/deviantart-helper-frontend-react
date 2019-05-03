export const ROUND_PERIOD_NO_ROUND = 1;
export const ROUND_PERIOD_1_HOUR = 60 * 60 * 1000;
export const ROUND_PERIOD_4_HOURS = 4 * ROUND_PERIOD_1_HOUR;
export const ROUND_PERIOD_12_HOURS = 12 * ROUND_PERIOD_1_HOUR;
export const ROUND_PERIOD_1_DAY = 24 * ROUND_PERIOD_1_HOUR;

export const roundPeriodOptions = [
  [ROUND_PERIOD_NO_ROUND, 'No rounding'],
  [ROUND_PERIOD_1_HOUR, '1 hour'],
  [ROUND_PERIOD_4_HOURS, '4 hours'],
  [ROUND_PERIOD_12_HOURS, '12 hours'],
  [ROUND_PERIOD_1_DAY, '1 day'],
];
