function formatPrice(price: string, currency = 'UZS', decimals = 0) {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(price));
}
export default formatPrice;
