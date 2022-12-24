import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, ContainerColumn, ContainerRow } from "@app/styles/common.style";
import { SMALL } from "@app/const";
import { IComponentFeatured } from "@app/services/component.service";

const SliderComponentContainer = styled(ContainerRow)`
	background: linear-gradient(white, white) padding-box,
		linear-gradient(to right, ${props => props.theme.gradientColorFrom}, ${props => props.theme.gradientColorFrom}) border-box;
	border-radius: 3rem;
	border: 1.5px solid transparent;

	height: 15vh;
	padding: 1.5rem;
	justify-content: space-between;

	@media (max-width: ${SMALL}px) {
		height: 20vh;
		width: 90vw;
		padding: 0 1rem;
	}
`;

const SliderImgContainer = styled.div`
	${Container};

	margin-right: 1rem;
`;

const SliderComponentImg = styled.img`
	height: 11.5vh;
`;

const Circle = styled.div<{ filled: boolean }>`
	background: ${props => (props.filled ? "#BC1243" : "#C5C5C5")};
	border-radius: 100%;

	cursor: pointer;

	margin: 0.33rem;

	width: 0.63rem;
	height: 0.63rem;
`;

const SliderCirclesContainer = styled(ContainerRow)`
	padding-top: 0.33rem;

	justify-content: space-between;
`;

const SliderTextContainer = styled(ContainerColumn)`
	justify-content: space-between;
	align-items: flex-start;

	margin-right: 2.3rem;

	@media (max-width: ${SMALL}px) {
		margin-right: 1.5rem;
	}
`;

const SliderBigText = styled.h1`
	font-size: 20px;
`;

const SliderSmallText = styled.p`
	font-size: 23px;
`;

const SliderComponent = ({ components }: { components: IComponentFeatured[] }): JSX.Element => {
	const [componentId, setComponentId] = useState(0);

	const handleSliderClick = (): void => {
		if (componentId === components.length - 1) {
			setComponentId(0);
		} else {
			setComponentId(componentId + 1);
		}
	};

	components?.sort((a, b) => {
		return a.order - b.order;
	});

	return (
		<ContainerColumn>
			<SliderComponentContainer>
				<SliderImgContainer>
					<Link to={`product/${components[componentId]?.component.id}`}>
						<SliderComponentImg src={components[componentId]?.component.image} alt={"ok"} />
					</Link>
				</SliderImgContainer>

				<SliderTextContainer>
					<SliderBigText>
						{" "}
						{components[componentId]?.component.displayName ?? components[componentId]?.component.name}
						{" "}
					</SliderBigText>
					<SliderSmallText>${components[componentId]?.component.price} </SliderSmallText>
				</SliderTextContainer>

				<div style={{ cursor: "pointer" }} onClick={() => handleSliderClick()}>
					<svg width="20" viewBox="0 0 30 58" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4.99984 57C4.06523 57.0018 3.15949 56.6763 2.43984 56.08C2.0348 55.7442 1.7 55.3318 1.45459 54.8664C1.20918 54.401 1.058 53.8918 1.00969 53.3679C0.961388 52.844 1.01692 52.3157 1.17309 51.8133C1.32927 51.3109 1.58303 50.8442 1.91984 50.44L19.8398 29L2.55984 7.52001C2.22758 7.11086 1.97945 6.64007 1.82972 6.13471C1.67999 5.62936 1.63162 5.09939 1.68738 4.57528C1.74313 4.05116 1.90192 3.54324 2.15462 3.08069C2.40731 2.61814 2.74893 2.2101 3.15984 1.88001C3.5737 1.51586 4.05837 1.24119 4.58341 1.07323C5.10846 0.905278 5.66256 0.847663 6.21094 0.904002C6.75931 0.960342 7.29012 1.12942 7.77004 1.40063C8.24997 1.67184 8.66866 2.03932 8.99984 2.48001L28.3198 26.48C28.9082 27.1957 29.2298 28.0935 29.2298 29.02C29.2298 29.9465 28.9082 30.8443 28.3198 31.56L8.31984 55.56C7.91857 56.0441 7.40883 56.4267 6.832 56.6769C6.25516 56.9271 5.62746 57.0378 4.99984 57Z"
							fill="#231F20"
						/>
					</svg>
				</div>
			</SliderComponentContainer>

			<SliderCirclesContainer>
				{components.map((item, index) => {
					return <Circle filled={componentId === index} key={index} onClick={() => setComponentId(index)} />;
				})}
			</SliderCirclesContainer>
		</ContainerColumn>
	);
};

export default SliderComponent;
