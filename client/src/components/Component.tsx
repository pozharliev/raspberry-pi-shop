import styled from "styled-components";

import { Container } from "@app/styles/common.style";

import { IComponent } from "@app/services/component.service";
import { MEDIUM, SMALL, X_LARGE } from "@app/const";

// const image = new URL("/src/assets/raspberry-pi-transparent.png", import.meta.url).href;

const ComponentContainer = styled.div`
  	background: #EFF3F4;
	box-shadow: 0px 15.8786px 33.6252px rgba(0, 0, 0, 0.06);
	border-radius: 1.5rem;
  
  	padding: 1rem;
  
  	width: 17rem;
  	height: 20rem;
  
  	@media(max-width: ${X_LARGE}px) {
	  	width: 15rem;
    }
  
  	@media(max-width: ${MEDIUM}px) {
	  	width: 12rem;
	  	height: 16rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	width: 11rem;
	  	height: 15rem;
    }
`;

const ImageContainer = styled.div`
	${Container};
  	margin-bottom: 0.75rem;
  
	background: linear-gradient(270.59deg, #8384F4 -33.85%, #B5B5EA 99.51%);
	border-radius: 1.5rem;
`;

const Image = styled.img`
	width: 12rem;
  
  	@media(max-width: ${MEDIUM}px) {
	  width: 9rem;
    }
  
  	@media(max-width: ${SMALL}px) {
  		width: 7rem;
    }
`;

const Description = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 0.75rem;
  
  	max-width: 12em;
  
	color: #7C7C7C;
  	
  	margin-top: 0.33rem;
  	margin-bottom: 0.8rem;
`;

const BottomContainer = styled.div`
	display: flex;
  	justify-content: space-between;
  	align-items: center;
  
  	margin-bottom: 0.5rem;
`;

const P = styled.p`
	color: #2C2C2C;
	
  	font-size: 0.85rem;
  	font-weight: 800;

  	padding: 0.2rem;
  
	border: 1.95461px solid #2C2C2C;
	border-radius: 23.3508px;
`;

export const Component = ({ component }: { component: IComponent }): JSX.Element => {
	return (
		<ComponentContainer>
			<ImageContainer>
				<Image src={component.image} />
			</ImageContainer>

			<h3> {component.displayName ?? component.name} </h3>

			<Description>{component.displayDescription ?? component.description}</Description>

			<BottomContainer>
				<h4>$ {component.price}</h4>
				<P> Add to cart</P>
			</BottomContainer>
		</ComponentContainer>
	);
};
