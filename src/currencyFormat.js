const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "VND",
  style: "currency",
});
const currencyFormat = (number) => {
  return CURRENCY_FORMAT.format(number);
};
export default currencyFormat;
