const tableCoinPriceFormat = (price:number | undefined | string) => {
    if (Math.round(Math.abs(Number(price))) >= 1.0e+9) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+9).toFixed(3);
        const currencySymbols = "B";
        return formatedPrice + currencySymbols;
    } else if (Math.abs(Number(price)) >= 1.0e+6) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+6).toFixed(3);
        const currencySymbols = "M";
        return formatedPrice + currencySymbols;
    } else if (Math.abs(Number(price)) >= 1.0e+3) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+3).toFixed(3);
        const currencySymbols = "K";
        return formatedPrice + currencySymbols;
    } else {
        return Math.abs(Number(price));
    }
};

export default tableCoinPriceFormat; 