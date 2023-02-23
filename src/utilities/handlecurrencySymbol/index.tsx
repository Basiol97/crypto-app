const handlecurrencySymbol = (symbol:string) => {
  const updatedCurrencySymbol =
      symbol === "usd" ? "$" : symbol === "gbp" ? "£" : symbol === "eur" ? "€" : "$";
    return updatedCurrencySymbol; 
};

export default handlecurrencySymbol;
