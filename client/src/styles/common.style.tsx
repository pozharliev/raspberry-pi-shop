import styled, { css } from "styled-components";

export const Container = css`
	display: flex;
	align-items: center;
	justify-content: center;
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
