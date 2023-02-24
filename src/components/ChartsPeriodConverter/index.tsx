import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "store/features/dataDisplayPeriodSlice/dataDisplayPeriod";
import { RootState } from "store/index";
import {
  ChartsDisplayConverterContainer,
  Button,
} from "pages/CoinList/CoinList.styled";

const ChartsPeriodConverter = () => {
  const data = useSelector((state: RootState) => state.periodDisplay.buttonsLabels);
  const dispatch = useDispatch();
  return (
    <ChartsDisplayConverterContainer>
      {data?.map((item) => (
        <Button
          key={item.id}
          activeButton={item.status}
          onClick={() => dispatch(handleClick(item))}
        >
          {item.label}
        </Button>
      ))}
    </ChartsDisplayConverterContainer>
  );
};

export default ChartsPeriodConverter;
