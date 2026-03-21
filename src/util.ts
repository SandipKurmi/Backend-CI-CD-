export const calculateDiscount = (price: number, discount: number) => {
    return ((price - discount) / price) * 100;
};
