import styled from "styled-components";

import { ContainerColumn, ContainerRow, ContainerSpaceBetween } from "@app/styles/common.style";
import { LARGE, MEDIUM, SMALL, XX_LARGE, XXX_LARGE } from "@app/const";

export const Heading = styled.p`
  	font-size: 2.25rem;
  	font-weight: 700;
  
  	align-self: flex-start;
  
  	margin-bottom: 2.5rem;
  	
    @media(max-width: ${SMALL}px) {
      	font-size: 1.85rem;
      
      	align-self: center;
    }
`;

export const CheckoutPageContainer = styled(ContainerRow)`
    gap: 2rem;
  
  	margin: 0 2rem;
	margin-top: 2.5rem;
  
  	@media(max-width: ${XX_LARGE}px) {
	  	flex-direction: column;
	  	gap: 5rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	gap: 3rem;
    }
`;

export const CheckoutCartItemsContainer = styled.table`
	width: 60rem;
  	border-collapse: collapse;
  
  	@media(max-width: ${XXX_LARGE}px) and (min-width: ${XX_LARGE}px) {
  		width: 51rem;
    }
  
  	@media(max-width: ${LARGE}px) {
	  	width: 92vw;
    }
`;

export const CartItemsHeading = styled.tr`
	justify-content: space-between;
  	
  	padding-bottom: 5rem;
  	border-bottom: solid 2px #D9D9D9;
  
  	th {
    	font-weight: 500;
	  	font-size: 30px;
	  
	  	text-align: left;
	  
	  	padding-bottom: 0.55rem;
    }
  
  	th:first-child {
    	width: 30rem;
    }
  	
  	th:nth-child(2), th:nth-child(3) {
	  text-align: center;
    }
  
  	th:last-child {
	  width: 3.5rem;
    }
  
  	@media(max-width: ${LARGE}px) {
	  	th:first-child {
  			width: 25rem;
	    }
    }
  	
  	@media(max-width: ${MEDIUM}px) {
	  	th {
		  	font-size: 1.4rem;
	    }
    }
  
  	@media(max-width: ${SMALL}px) {
	  	th {
		  	font-size: 1.15rem;
	    }
	  
	  	th:first-child {
		  	width: 15rem;
	    }
    }
`;

export const CheckoutContainerTotal = styled(ContainerSpaceBetween)`
	padding-top: 1rem;
  	margin-top: 1rem;
  	border-top: solid 2px #D9D9D9;

  	height: 3rem;
  	width: 100%;
  
  	@media(max-width: ${LARGE}px) {
	  	& h1 {
		  	font-size: 1.75rem;
	    }
    }
  
  	@media(max-width: ${MEDIUM}px) {
	  	& h1 {
		  	font-size: 1.35rem;
	    }
    }
  
  	@media(max-width: ${SMALL}px) {
	  	& h1 {
		  	font-size: 1.1rem;
	    }
    }
`;

export const ContinueShoppingText = styled(ContainerSpaceBetween)`
  	cursor: pointer;
  
  	h1 {
	  	margin-left: 0.25rem;
    }
`;

export const CheckoutDetailsContainer = styled(ContainerColumn)`
  	width: 37rem;
  
  	background: #E1E6E8;
	border-radius: 1rem;
  	padding: 0.5rem;
  
  	@media(max-width: ${XX_LARGE}px) {
	  	width: 60rem;
    }
  
  	@media(max-width: ${LARGE}px) {
	  	width: 92vw;
    }
`;

export const CheckoutDetailsTextContainer = styled(ContainerRow)`
  	justify-content: space-around;
  
	width: 100%;
  
  	padding-top: 2rem;
	
  	margin-bottom: 5rem;
  
  	@media(max-width: ${SMALL}px) {
	  	margin-bottom: 2.5rem;
    }
`;

export const CheckoutDetailsText = styled.p<{ isActive: boolean }>`
	font-size: 1.85rem;
  	font-weight: 600;
  	line-height: 2.5rem;

  	color: ${props => props.isActive ? props.theme.color1 : "black"};
  
  	cursor: pointer;
  	user-select: none;
  
    @media(max-width: ${XX_LARGE}px) {
		font-size: 2.25rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 1.25rem;
    }
`;

export const CheckoutDetailsInputContainer = styled(ContainerRow)`
	gap: 1.5rem;
  
  	width: 100%;
  
  	@media(max-width: ${SMALL}px) {
	  	flex-direction: column;
	  	gap: 0;
    }
`;

export const Input = styled.input<{ big: boolean }>`
	background: #F7FAFB;
  	border-radius: 0.5rem;
  	border: none;
  
  	width: ${props => props.big ? "91%" : "43%"};
  	height: 4.5rem;
  
  	padding: 1rem;
    margin-bottom: 1.75rem;
  
  	color: #6A6A6A;
  	font-weight: 600;
  	font-size: 1.5rem;
  
    @media(max-width: ${XX_LARGE}px) {
	    width: ${props => props.big ? "91%" : "44%"};
    }
  
  	@media(max-width: ${SMALL}px) {
	  	width: 91%;
    }
`;

export const Button = styled.button`
	background-color: #BC1142;
  	border-radius: 1rem;
  	border: none;
  
  	color: white;
  	font-weight: 600;
  	font-size: 2rem;
  
  	height: 5rem;
  	width: 43%;
  	margin-bottom: 2rem;
  	margin-left: 2rem;
  
  	align-self: flex-start;
  
  	cursor: pointer;
  
  	@media(max-width: ${SMALL}px) {
    	margin-left: 1rem;
	  	width: 91%;
    }
`;

export const Error = styled.h1`
  	margin-left: 2rem;
  	margin-bottom: 2rem;
  
  	align-self: flex-start;
  
  	color: ${props => props.theme.color1};
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 1.25rem;
	  	margin-left: 1rem;
    }
`;
