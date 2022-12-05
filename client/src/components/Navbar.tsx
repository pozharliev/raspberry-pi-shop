import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { NavLogo, NavContainer, NavSearchBar, CartIcon, BlogIcon } from "@app/styles/Navbar";
import { Container } from "@app/styles/common";

export const Navbar: React.FC = (): ReactElement => {
	return (
		<NavContainer>
			<Link to={"/"}>
				<NavLogo />
			</Link>

			<NavSearchBar />

			<Container>
				<CartIcon items={1} />
				<BlogIcon />
			</Container>
		</NavContainer>
	);
};
