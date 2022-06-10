export const allowedInputKey = [
  8,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  190,
]; //only allow input numbers(including numberpad), backspace and period

export function removeCommaAndDollarSign(value: string): string {
  return value.replaceAll(',', '').replaceAll('$', '');
}

export function formatBalanceInput(value: string): string {
  const removeSigns = removeCommaAndDollarSign(value); //remove $ and commas
  if (removeSigns.includes('.')) {
    //if have decimals
    const digits = removeSigns.split('.');
    return `$${Number(digits[0]).toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    })}.${digits[1]}`;
  } else {
    return `$${Number(removeSigns).toLocaleString(undefined)}`;
  }
}
