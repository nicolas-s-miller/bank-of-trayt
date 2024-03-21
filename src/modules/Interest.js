import compound from 'interestjs';
import dayjs from 'dayjs';

const PROMOTION_DURATION = 36; // in months
const PROMOTIONAL_RATE = 5;
const REGULAR_RATE = 2;

const formatMoney = value => value.toLocaleString('en-US', {
  currency: 'USD',
  style: 'currency',
});

class Interest {
  static calculatePeriod(amount, frequency, startDate, endDate) {
    let deposits = 0;
    let interest = 0;
    let value = 0;

    if (!amount || amount === 0) {
      return Interest.formatResponse(deposits, interest, value);
    }

    const monthlyAmount = frequency === 'once' ? amount : amount * 2;

    // Normalize dates as start of day for consistent comparisons
    const startDay = dayjs(startDate).startOf('D');
    const endDay = dayjs(endDate).startOf('D');

    const months = endDay.diff(startDay, 'months');

    if (months === 0) {
      return Interest.formatResponse(monthlyAmount, 0, monthlyAmount);
    }

    const promotionMonths = Math.min(PROMOTION_DURATION, months);
    const promotionSchedule = compound(
      monthlyAmount,
      promotionMonths,
      PROMOTIONAL_RATE,
    );
    deposits += promotionSchedule.capitalSum;
    interest += promotionSchedule.interestSum;
    value += promotionSchedule.sum;

    if (months <= PROMOTION_DURATION) {
      return Interest.formatResponse(deposits, interest, value);
    }

    const remainingMonths = months - promotionMonths;
    const remainingSchedule = compound(
      monthlyAmount,
      remainingMonths,
      REGULAR_RATE,
      { startAmount: promotionSchedule.sum },
    );
    deposits += remainingSchedule.capitalSum;
    interest += remainingSchedule.interestSum;
    value = remainingSchedule.sum;

    return Interest.formatResponse(deposits, interest, value);
  }

  static describePeriod(label, endDate) {
    return `${label} (${endDate.format('MM/DD/YYYY')})`;
  }

  static formatResponse(deposits, interest, value) {
    return {
      deposits: formatMoney(deposits),
      interest: formatMoney(interest),
      value: formatMoney(value),
    };
  }
}

export default Interest;
