import styled from "styled-components";

import { ContainerSpaceBetween } from "@app/styles/common.style";
import { MEDIUM, SMALL } from "@app/const";

export const P = styled.p`
	font-size: 50px;
	font-weight: 400;

	@media (max-width: ${MEDIUM}px) {
		font-size: 70px;
	}
`;

export const GradientSpan = styled.span`
	font-size: 50px;
	font-weight: 700;
	background: -webkit-linear-gradient(100deg, #bc1142, #9a11bc);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: ${MEDIUM}px) {
		font-size: 70px;
	}
`;

export const ContainerTop = styled(ContainerSpaceBetween)`
	width: 100vw;

	padding-top: 6.5vh;
	padding-left: 7.5vw;
	padding-right: 7.5vw;

  	@media(max-width: ${MEDIUM}px) {
		flex-direction: column;
		align-content: space-evenly;
		flex-wrap: wrap;
		padding: 0;
	  	padding-top: 1rem;
		height: 24rem;
    }
`;
