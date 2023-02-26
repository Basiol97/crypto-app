import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { BiLayer } from "react-icons/bi";
import {
  DescriptionOuterContainer,
  DescriptionInnerContainer,
  DescriptionLabel,
  CoinDescription,
  DescriptionIcon,
} from "pages/CoinPage/CoinPage.styled";

const Description = () => {
  const { coinData } = useSelector((state: RootState) => state.coinPage);
  return (
    <DescriptionOuterContainer>
      <DescriptionLabel>Description</DescriptionLabel>
      <DescriptionInnerContainer>
        <DescriptionIcon>
          <BiLayer size={30} />
        </DescriptionIcon>
        <CoinDescription>
          {coinData.description?.en.length && (
            <div>{coinData.description?.en}</div>
          )}
        </CoinDescription>
      </DescriptionInnerContainer>
    </DescriptionOuterContainer>
  );
};

export default Description;
