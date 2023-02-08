export const handleSaleOffProducts = (
  originalPrice: any,
  saleOffPercentage: any = 20
) => {
  if (saleOffPercentage === 0) {
    return {
      price: originalPrice,
      saleOff: false,
    };
  }
  return {
    price: originalPrice - (originalPrice * saleOffPercentage) / 100,
    saleOff: true,
  };
};
