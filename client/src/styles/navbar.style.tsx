import styled from "styled-components";

import { Container } from "@app/styles/common.style";

import { MEDIUM, XX_LARGE, X_LARGE, SMALL } from "@app/const";

const LOGO_HEIGHT = 55;
const SEARCH_BAR_HEIGHT = LOGO_HEIGHT * 0.8;

const SearchBarIcon = styled.i`
  height: auto;
  position: absolute;
  left: 63%;

  @media(max-width: ${MEDIUM}px) {
    left: 60%;
  }
  
  @media(min-width: ${X_LARGE}px) {
    left: 64%;
  }
  
  @media(min-width: ${XX_LARGE}px) {
    left: 65%;
  }
  
  @media(max-width: ${SMALL}px) {
    left: 64%;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #231F20;
  border-radius: 84.5252px;
  
  padding-left: 1.5rem;
  
  width: 35vw;
  height: ${SEARCH_BAR_HEIGHT}px;
  
  @media(max-width: ${SMALL}px) {
    width: 47vw;
  }
`;

const Logo = ({ className }: { className?: string }): JSX.Element => {
	return (
		<img src={"/logo.png"}
		     className={className}
		     alt="Logo"
		/>
	);
};

const CartItems = styled.span`
  position: absolute;
  right: 43px;
  top: 24px;
  font-size: 13px;
  line-height: 19px;
  height: 19px;
  font-weight: 600;
  color: white;
  width: 20px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
  
  @media(max-width: ${SMALL}px) {
    right: 10px;
    top: 15px;
  }
`;

export const NavCartIcon = ({ items }: { items: number }): JSX.Element => {
	return (
		<>
			<i className="fa fa-shopping-cart" style={{ fontSize: "2rem" }}/>
			{items > 0 ? <CartItems> { items } </CartItems> : null}
		</>
	);
};

export const NavBlogIcon = (): JSX.Element => {
	return (
		<i className="fa fa-square-rss" style={{ fontSize: "2rem" }} />
	);
};

export const NavIconsContainer = styled(Container)`
  width: 4.8rem;
  justify-content: space-between;
`;

export const NavSearchBar = ({ children }: { children?: JSX.Element[] }): JSX.Element => {
	return (
		<>
			<SearchBar type="text"
			           placeholder="Case, memory card..."
			/>
			<SearchBarIcon className='fa fa-search'/>
		</>
	);
};

export const NavContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 1rem;
  
  @media(max-width: ${SMALL}px) {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    padding-top: 0.5rem;
  }
`;

export const NavLogo = styled(Logo)`
  height: ${LOGO_HEIGHT}px;
`;
