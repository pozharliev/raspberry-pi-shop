import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { NavLogo, NavContainer, NavSearchBar } from "@app/styles/Navbar";

export const Navbar: React.FC = (): ReactElement => {
	return (
		<NavContainer>
			<Link to={"/"}>
				<NavLogo />
			</Link>

			<NavSearchBar />

			<Link to={"/"}>
				<h1> Ok 3</h1>
			</Link>
		</NavContainer>
	);
};
