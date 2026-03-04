export const formatNaira = (n) =>
  '₦' + Number(n).toLocaleString('en-NG', { maximumFractionDigits: 0 })
