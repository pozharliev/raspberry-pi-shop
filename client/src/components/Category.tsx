import styled from "styled-components";
import { LARGE, MEDIUM, SMALL, XX_LARGE } from "@app/const";
import { ICategory } from "@app/services/category.service";

const CategoriesContainer = styled.div`
	display: flex;
  	flex-direction: column;
  
	background: linear-gradient(white, white) padding-box,
		linear-gradient(to right, ${props => props.theme.gradientColorFrom}, ${props => props.theme.gradientColorFrom}) border-box;
	border-radius: 2.5rem;
	border: 1.5px solid transparent;
  
  	padding: 1rem 1.4rem;
  
  	width: 20rem;
	height: 9.5rem;
  
  	@media(max-width: ${XX_LARGE}px) {
    	width: 15rem;
    }
  
  	@media(max-width: ${LARGE}px) {
	  	width: 22rem;
    }
  
  	@media(max-width: ${MEDIUM}px) {
	  	width: 16rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	width: 23rem;
	  	height: 10rem;
    }
`;

const BigTextContainer = styled.div`
	display: flex;
  	
  	margin-bottom: 0.5rem;
  
  	h1 {
	  	color: #242424;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	h1 {
		  font-size: 2.75rem;
	    }
    }
`;

const DescriptionContainer = styled.div`
	display: flex;
  
  	max-width: 11rem;
  
  	margin-bottom: 1.2rem;
  
  	p {
	  font-size: 0.65rem;
	  font-weight: 700;
	  
	  color: #616161;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	margin-bottom: 0.4rem;
	  	max-width: 14rem;
	  
	  	p {
		  	font-size: 0.80rem;
	    }
    }
`;

const BottomContainer = styled.div`
	display: flex;
  	justify-content: space-between;
  	align-items: center;
`;

const PriceText = styled.p`
	font-size: 0.65rem;
  	font-weight: 700;
  
	color: #909090;
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 0.80rem;
    }
`;

const ShopNowText = styled.p`
	color: #2C2C2C;
  	font-size: 0.73rem;
  	font-weight: 900;
  
	border: 2px solid #2C2C2C;
  	border-radius: 3rem;
  
  	padding: 0.3rem;
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 0.85rem;
    }
`;

export const Category = ({ name, count, description }: { name: string, count: number, description: string }): JSX.Element => {
	return (
		<CategoriesContainer>
			<BigTextContainer>
				<h1> {name} </h1>
			</BigTextContainer>

			<DescriptionContainer>
				<p>{description}</p>
			</DescriptionContainer>

			<BottomContainer>
				<PriceText> {count} items</PriceText>
				<ShopNowText> SHOP NOW</ShopNowText>
			</BottomContainer>
		</CategoriesContainer>
	);
};
