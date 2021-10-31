export const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(number);
}
export const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0) return 0;
  
    const total = arr.reduce((acc, val) => acc + val, 0);
  
    return total.toFixed(2);
  };