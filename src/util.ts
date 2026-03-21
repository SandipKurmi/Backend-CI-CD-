export const calculateDiscount = (price: number, discount: number) => {
    return ((price - discount) / price) * 100;
};

// Calculate percentage
export const calculatePercentage = (price: number, discount: number) => {
    return ((price - discount) / price) * 100;
};

// Calculate tax
export const calculateTax = (price: number, tax: number) => {
    const taxAmount = (price * tax) / 100;
    return price + taxAmount;
};

// Generate a random string
export const generateRandomString = (length: number) => {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length);
};
