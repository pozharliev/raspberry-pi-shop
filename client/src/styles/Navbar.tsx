import styled from "styled-components";

import { Container } from "@app/styles/common";

import { MEDIUM } from "@app/const";

const SearchBarIcon = styled.i`
  width: 200px;
  height: auto;
  position: absolute;
  left: 63%;
  top: 6.3%;
  
  @media(max-width: ${MEDIUM}px) {
    left: 60%;
  }
`;

const SearchBar = styled.input`
  border: 2.53576px solid #231F20;
  border-radius: 84.5252px;
  
  padding-left: 1rem;
  
  width: 35vw;
  height: 10vh;
`;

const Logo = ({ className }: { className?: string }): JSX.Element => {
	return (
		<img src={"/logo.png"}
		     className={className}
		     alt="Logo"
		/>
	);
};

export const NavSearchBar = ({ className, children }: { className?: string, children?: JSX.Element[] }): JSX.Element => {
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
  
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 1rem;
`;

export const NavLogo = styled(Logo)`
  width: 40px;
  height: 40px;
`;
