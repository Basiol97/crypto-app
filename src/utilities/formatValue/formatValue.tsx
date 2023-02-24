import { PostivePriceChangePercentage, NegativePriceChangePercentage } from 'pages/CoinList/CoinList.styled';
const formatValue = (value:number) => {
    {
        const formattedValue =
            value >= 0 ? (
                <PostivePriceChangePercentage>
                    {value?.toFixed(2)}%
                </PostivePriceChangePercentage>
            ) : (
                <NegativePriceChangePercentage>
                    {value?.toFixed(2)}%
                </NegativePriceChangePercentage>
            );
        return formattedValue;
    }
};

export default formatValue;