const formatPrice = (price?:number | string | number[]) => {

    if (Math.round(Math.abs(Number(price))) >= 1.0e+9) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+9).toFixed(2);
        const currencySymbols = "bln";
        return formatedPrice + currencySymbols;
    } else if (Math.abs(Number(price)) >= 1.0e+6) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+6).toFixed(2);
        const currencySymbols = "mln";
        return formatedPrice + currencySymbols;
    } else if (Math.abs(Number(price)) >= 1.0e+3) {
        const formatedPrice = (Math.abs(Number(price)) / 1.0e+3).toFixed(2);
        const currencySymbols = "k";
        return formatedPrice + currencySymbols;
    } else {
        return Math.abs(Number(price)).toFixed(2);
    }
};

export default formatPrice; 