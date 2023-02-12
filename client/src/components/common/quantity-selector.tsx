import styled from "styled-components";
import { ContainerRow } from "@app/styles/common.style";
import { LARGE, SMALL, XX_LARGE } from "@app/const";
import { IMeasurements } from "@app/types/common";

export const SmallText = styled.h3`
	color: #231f20;

	padding: 0 1rem;

	@media (min-width: ${XX_LARGE}px) {
		font-size: 2rem;
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		font-size: 1.25rem;
	}

	@media (max-width: ${SMALL}px) {
		font-size: 1.5rem;
	}
`;

export const Button = styled.span<{ breakpoints?: { [key: number]: IMeasurements } }>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d9d9d9;
	border-radius: 50%;
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;

	@media (min-width: ${XX_LARGE}px) {
		width: 2rem;
		height: 2rem;
	}

	@media (max-width: ${XX_LARGE}px) {
		width: 1.75rem;
		height: 1.75rem;
	}
  
  	${props => props.breakpoints !== undefined && Object.keys(props.breakpoints).map((key: string) => {
	    if (props.breakpoints !== undefined) {
			return `@media(max-width: ${key}px) { width: ${props.breakpoints[Number(key)].width}px;  height: ${props.breakpoints[Number(key)].height}px;}`;
	    }
		return "";
	})}
`;

interface QuantitySelectorProps {
	quantity: number;
	breakpoints?: { [key: number]: IMeasurements };
	onClickMinus: (quantity: number) => void;
	onClickPlus: (quantity: number) => void;
	style?: Record<string, unknown>;
}

const QuantitySelector = ({ quantity, breakpoints, onClickMinus, onClickPlus, style }: QuantitySelectorProps): JSX.Element => {
	return (
		<ContainerRow style={style}>
			<Button breakpoints={breakpoints} onClick={() => onClickMinus(quantity)}> - </Button>
			<SmallText> {quantity} </SmallText>
			<Button breakpoints={breakpoints} onClick={() => onClickPlus(quantity)}> + </Button>
		</ContainerRow>
	);
};

export default QuantitySelector;
