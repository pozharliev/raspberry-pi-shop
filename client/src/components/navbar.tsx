import { ReactElement } from "react";

import { NavLogo, NavContainer, NavSearchBar, NavCartIcon, NavBlogIcon, NavIconsContainer } from "@app/styles/navbar.style";
import { useCartQuantity } from "@app/stores/selectors";
import { StyledLink } from "@app/styles/common.style";

const Navbar: React.FC = (): ReactElement => {
	const cartItems = useCartQuantity();

	return (
		<NavContainer>
			<StyledLink to={"/"}>
				<NavLogo />
			</StyledLink>

			<NavSearchBar />

			<NavIconsContainer>
				<NavBlogIcon />
				<StyledLink to={"/checkout"}>
					<NavCartIcon items={cartItems} />
				</StyledLink>
			</NavIconsContainer>
		</NavContainer>
	);
};

export default Navbar;
