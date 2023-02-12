import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import QuantitySelector from "@app/components/common/quantity-selector";
import CartService, { ICartItem } from "@app/services/cart.service";
import { removeStoredItem, setCart, updateStoredItem } from "@app/stores/cart.store";
import styled from "styled-components";
import { ContainerColumn, ContainerRow, StyledLink } from "@app/styles/common.style";
import { ComponentUnit } from "@app/types/component";
import serverImage from "@app/utils/serverImage";
import { LARGE, MEDIUM, SMALL, XX_LARGE, XXX_LARGE } from "@app/const";
import { XMark } from "@app/components/common/svg";

const ProductContainer = styled(ContainerRow)`
    width: 26rem;
  
  	justify-content: flex-start;
  
  	h2 {
	  	font-size: 1.8rem;
	  	text-align: left;
    }
  
  	p {
    	font-size: 1.33rem;
	  	font-weight: 600;
	  
	  	color: #7C7C7C;
    }
  
	img {
		background: linear-gradient(270.59deg, #8384f4 -33.85%, #b5b5ea 99.51%);
		border-radius: 1.5rem;
	  
	  	margin-right: 1.5rem;
	  
	  	width: 150px;
	}
  
	@media(max-width: ${XXX_LARGE}px) and (min-width: ${XX_LARGE}px) {
		width: 24rem;    
	}
  
  	@media(max-width: ${LARGE}px) {
	  	h2 {
	  		font-size: 1.5rem;
    	}
	  
	  	img {
		  	width: 125px;
		  	margin-right: 1rem;
	    }
    }
  
  	@media(max-width: ${MEDIUM}px) {
		width: 45vw;

	  	img {
		  	display: none;
	    }
    }
  
  	@media(max-width: ${SMALL}px) {
	  	width: 35vw;
	  
	  	h2 {
		  	font-size: 1.1rem;
	    }
	  
	  	p {
		  	font-size: 1rem;
	    }
    }
  	
`;

const ProductTextContainer = styled(ContainerColumn)`
	align-items: flex-start;
`;

const PriceText = styled.h1`
	text-align: center;
  
  	@media(max-width: ${MEDIUM}px) {
	  	font-size: 1.75rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 1.33rem;
    }
`;

const CartItem = ({ item }: { item: ICartItem }): JSX.Element => {
	const itemUnit = new ComponentUnit(item);

	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(item.quantity);

	useEffect(() => {
		if (quantity === 0) {
			CartService.removeItem(item.id)
				.then((data) => {
					dispatch(setCart(data));
				})
				.catch(console.error);
		} else {
			CartService.updateItem(item.id, quantity)
				.then((data) => {
					dispatch(setCart(data));
				})
				.catch(console.error);
		}
	}, [quantity]);

	const removeItemFromCart = (): void => {
		CartService.removeItem(item.id)
			.then((data) => {
				dispatch(setCart(data));
			})
			.catch(console.error);
	};

	return (
		<tr>
			<td style={{ padding: "1rem 0" }}>
				<ProductContainer>
					<StyledLink to={`/component/${item.id}`}>
						<img src={serverImage(item.id)} />
					</StyledLink>
					<ProductTextContainer>
						<StyledLink to={`/component/${item.id}`}>
							<h2>{itemUnit.getLongerDisplayName()}</h2>
						</StyledLink>
						<StyledLink to={`/categories/${item.category.id}`}>
							<p> {item.category.displayName} </p>
						</StyledLink>
					</ProductTextContainer>
				</ProductContainer>
			</td>

			<td>
				<QuantitySelector
					quantity={quantity}
					breakpoints={{
						[SMALL]: { width: 22, height: 22 },
					}}
					onClickMinus={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
					onClickPlus={() => setQuantity(quantity + 1)}
				/>
			</td>

			<td>
				<PriceText>{(item.price * item.quantity).toFixed(2)}</PriceText>
			</td>

			<td style={{ textAlign: "right", cursor: "pointer", paddingLeft: "0.5rem" }} onClick={removeItemFromCart}>
				<XMark
					initial={{ width: 24, height: 24 }}
					breakpoints={{
						[SMALL]: { width: 16, height: 16 },
					}}
				/>
			</td>
		</tr>
	);
};

export default CartItem;
