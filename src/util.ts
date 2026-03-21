export const calculateDiscount = (price: number, discount: number) => {
    return ((price - discount) / price) * 100;
};

// Calculate percentage
export const calculatePercentage = (price: number, discount: number) => {
    return ((price - discount) / price) * 100;
};
