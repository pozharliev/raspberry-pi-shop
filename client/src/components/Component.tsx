import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container, ContainerColumn } from "@app/styles/common.style";
import { MEDIUM, SMALL, X_LARGE } from "@app/const";
import serverImage from "@app/utils/serverImage";
import { IComponent } from "@app/services/component.service";
import CartService from "@app/services/cart.service";
import { useIsItemInCart } from "@app/stores/selectors";
import { addStoredItem, removeStoredItem } from "@app/stores/cart.store";

const ComponentContainer = styled(ContainerColumn)`
  	justify-content: space-between;
  	align-items: flex-start;
  
	background: #eff3f4;
	box-shadow: 0px 15.8786px 33.6252px rgba(0, 0, 0, 0.06);
	border-radius: 1.5rem;

	padding: 1rem;

	width: 17rem;
	height: 20rem;

	@media (max-width: ${X_LARGE}px) {
		width: 15rem;
	}

	@media (max-width: ${MEDIUM}px) {
		width: 12rem;
		height: 16rem;
	}

	@media (max-width: ${SMALL}px) {
		width: 22rem;
	  	height: 21rem;
	  
	  	h3 {
		  	font-size: 30px;
	    }
	  
	  	h4 {
		  font-size: 20px;
	    }
	}
`;

const ImageContainer = styled.div`
	${Container};
  
  	width: 100%;
  
  	margin-bottom: 0.33rem;

	background: linear-gradient(270.59deg, #8384f4 -33.85%, #b5b5ea 99.51%);
	border-radius: 1.5rem;
  
	@media (max-width: ${SMALL}px) {
		height: 10rem;
	}
`;

const Image = styled.img`
	width: 12rem;
  	
  	cursor: pointer;

	@media (max-width: ${MEDIUM}px) {
		width: 9rem;
	}

	@media (max-width: ${SMALL}px) {
		height: 100%;
	}
`;

const Description = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 0.75rem;

  	text-align: left;
  
	max-width: 12rem;
  
	@media (max-width: ${SMALL}px) {
		font-size: 1rem;
		
		max-width: 16rem;
	}

	color: #7c7c7c;

`;

const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

  	width: 100%;
`;

const P = styled.p<{ enabled: boolean }>`
	color: ${props => props.enabled ? "#2c2c2c" : "white"};

	font-size: 0.85rem;
	font-weight: ${props => props.enabled ? 800 : 500};

	padding: 0.3rem;

	border: 1.95461px solid #2c2c2c;
	border-radius: 23.3508px;
  
  	background-color: ${props => props.enabled ? "#eff3f4" : "black"};
  
  	cursor: pointer;
  
  	@media (max-width: ${SMALL}px) {
    	font-size: 1.2rem;
    }
`;

export const Component = ({ component }: { component: IComponent }): JSX.Element => {
	const dispatch = useDispatch();

	const isItemInCart = useIsItemInCart(component?.id);

	const handleAddToCart = (): void => {
		if (isItemInCart) {
			CartService.removeItem(component.id)
				.then(_ => {
					dispatch(removeStoredItem(component.id));
				})
				.catch(console.error);
		} else {
			CartService.addItem(component.id, 1)
				.then(_ => {
					dispatch(addStoredItem({ item: component, quantity: 1 }));
				})
				.catch(console.error);
		}
	};

	return (
		<ComponentContainer>
			<ImageContainer>
				<Link to={`/component/${component.id}`}>
					<Image src={serverImage(component.id)} />
				</Link>
			</ImageContainer>

			<h3> {component.displayName ?? component.name} </h3>

			<Description>{component.displayDescription ?? component.description}</Description>

			<BottomContainer>
				<h4>$ {component.price}</h4>
				<P
					enabled={!isItemInCart}
					onClick={handleAddToCart}
				>
					{isItemInCart ? "Remove from cart" : "Add to cart"}
				</P>
			</BottomContainer>
		</ComponentContainer>
	);
};
