import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { NavLogo, NavContainer, NavSearchBar, NavCartIcon, NavBlogIcon, NavIconsContainer } from "@app/styles/navbar.style";
import { useCartQuantity } from "@app/stores/selectors";

const Navbar: React.FC = (): ReactElement => {
	const cartItems = useCartQuantity();

	return (
		<NavContainer>
			<Link to={"/"}>
				<NavLogo />
			</Link>

			<NavSearchBar />

			<NavIconsContainer>
				<NavBlogIcon />
				<NavCartIcon items={cartItems} />
			</NavIconsContainer>
		</NavContainer>
	);
};

export default Navbar;
