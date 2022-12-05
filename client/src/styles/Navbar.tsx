import styled from "styled-components";

import { Container } from "@app/styles/common";

import { MEDIUM, XX_LARGE } from "@app/const";

const LOGO_HEIGHT = 65;
const SEARCH_BAR_HEIGHT = LOGO_HEIGHT * 0.8;

const SearchBarIcon = styled.i`
  height: auto;
  position: absolute;
  left: 63%;
  top: 4.7%;
  
  @media(max-width: ${MEDIUM}px) {
    left: 60%;
  }
  @media(min-width: ${XX_LARGE}px) {
    left: 65%;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #231F20;
  border-radius: 84.5252px;
  
  padding-left: 1.5rem;
  
  width: 35vw;
  height: ${SEARCH_BAR_HEIGHT}px;
`;

const Logo = ({ className }: { className?: string }): JSX.Element => {
	return (
		<img src={"/logo.png"}
		     className={className}
		     alt="Logo"
		/>
	);
};

export const CartIcon = ({ items }: { items: number }): JSX.Element => {
	console.log(items);
	return (
		<i className="fa fa-shopping-cart" />
	);
};

export const BlogIcon = (): JSX.Element => {
	return (
		<i className="fa fa-blog" />
	);
};

export const NavSearchBar = ({ children }: { children?: JSX.Element[] }): JSX.Element => {
	return (
		<>
			<SearchBarIcon className='fa fa-search'/>
			<SearchBar type="text"
			           placeholder="Case, memory card..."
			/>
		</>
	);
};

export const NavContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 1rem;
`;

export const NavLogo = styled(Logo)`
  height: ${LOGO_HEIGHT}px;
`;
