import React from "react";
import { togglePopup } from "store/features/portfolioSlice/portfolioSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/index";
import {
  PopupContainer,
  CloseIcon,
  Box,
  SubmitButton,
  FormContainer,
  CloseIconContainer,
  FormItemsContainer,
  InputField,
} from "pages/Portfolio/Portfolio.styled";

interface Props {
  handleSubmitForm: (e: React.SyntheticEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    amount: number;
    id: string;
    last_updated: string;
  };
}

const Popup = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <PopupContainer>
      <Box>
        <CloseIconContainer>
          <CloseIcon onClick={() => dispatch(togglePopup())}>x</CloseIcon>
        </CloseIconContainer>
        <FormContainer>
          <form onSubmit={props.handleSubmitForm}>
            <FormItemsContainer>
              <label>
                Coin:
                <InputField
                  type="text"
                  name="id"
                  placeholder="Try ripple as input ^-^"
                  value={props.value.id}
                  onChange={props.handleInputChange}
                />
              </label>
              <label>
                date:
                <InputField
                  defaultValue={props.value.last_updated}
                  type="text"
                  name="last_updated"
                />
              </label>

              <label>
                Num:
                <InputField
                  value={props.value.amount}
                  type="text"
                  onChange={props.handleInputChange}
                  placeholder="amount"
                  name="amount"
                />
              </label>
              <SubmitButton
                type="submit"
                disabled={props.value.id && props.value.amount ? false : true}
              >
                Submit
              </SubmitButton>
            </FormItemsContainer>
          </form>
        </FormContainer>
      </Box>
    </PopupContainer>
  );
};

export default Popup;
