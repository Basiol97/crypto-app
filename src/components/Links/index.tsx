import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";
import { UrlContainer, LinkItem } from "pages/CoinPage/CoinPage.styled";
import { LinkContainer, CopyIcon } from "pages/CoinPage/CoinPage.styled";

interface Props {
  key: number;
  link: string;
  handleCopy(link: string): void;
}

const Links: React.FC<Props> = ({ link, handleCopy }) => {
  return (
    <LinkContainer>
      <LinkItem target="_/" href={link}>
        <BsLink45Deg size={15} />
      </LinkItem>
      <UrlContainer>{link}</UrlContainer>
      <CopyIcon onClick={() => handleCopy(link)}>
        <FaRegClone size={15} />
      </CopyIcon>
    </LinkContainer>
  );
};

export default Links;
