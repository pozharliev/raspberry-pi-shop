import styled, { css } from "styled-components";
import { LARGE, MEDIUM, SMALL, X_LARGE, XXX_LARGE } from "@app/const";
import { Link } from "react-router-dom";

export const Container = css`
	display: flex;
	align-items: center;
	justify-content: center;

	//width: 100%;
`;

export const ContainerSpaceBetween = styled.div`
	${Container};
	justify-content: space-between;
`;

export const ContainerColumn = styled.div`
	${Container};
	flex-direction: column;
`;

export const ContainerRow = styled.div`
	${Container};
	flex-direction: row;
`;

export const TextBetweenLines = styled.h2`
	display: flex;
	flex-direction: row;
	align-items: center;

	&:before,
	&:after {
		content: "";
		flex: 1 1;
		border-bottom: 1px solid black;
	}

	&:before {
		margin-right: 10px;
		margin-left: 2.5rem;
	}
	&:after {
		margin-left: 10px;
		margin-right: 2.5rem;
	}

	@media (max-width: ${SMALL}px) {
		&:before {
			margin-left: 1.2rem;
		}
		&:after {
			margin-right: 1.2rem;
		}
	}
`;

export const ContainerComponents = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;

	@media (min-width: ${XXX_LARGE}px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	}

	@media (max-width: ${X_LARGE}px) {
		gap: 1rem;
	}

	@media (max-width: ${LARGE}px) {
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: ${MEDIUM}px) {
		gap: 1rem;
	}

	@media (max-width: ${SMALL}px) {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
