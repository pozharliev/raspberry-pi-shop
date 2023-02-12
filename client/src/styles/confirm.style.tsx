import styled from "styled-components";
import { ContainerColumn } from "@app/styles/common.style";
import { MEDIUM, SMALL } from "@app/const";

export const ConfirmPageContainer = styled(ContainerColumn)`
	align-content: center;
  	justify-content: center;
  
  	width: 100vw;
  	height: calc(100vh - 100px);
`;

export const Heading = styled.h1`
	font-size: 5rem;
  	line-height: 6rem;
  
  	margin: 1.5rem 0;
  
  	@media(max-width: ${MEDIUM}px) {
	  	font-size: 3rem;
	  	line-height: 3.5rem;
    }
  
  	@media(max-width: ${SMALL}px) {
	  	font-size: 2rem;
	  	line-height: 2.5rem;
	  
	  	margin: 1rem 0;
    }
`;

export const Text = styled.p`
	color: #7B7B7B;
  
  	font-weight: 600;
  	font-size: 3rem;
  
  	text-align: center;
  
  	@media(max-width: ${MEDIUM}px) {
	  	font-size: 2.5rem;
    }
  
    @media(max-width: ${SMALL}px) {
		font-size: 1.5rem;
    }
	      
`;
