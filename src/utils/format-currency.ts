export const formatCurrency = (
  value: number,
  currency = 'USD',
  locale = 'en-US',
) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)

export default formatCurrency
