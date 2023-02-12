import styled from "styled-components";
import { useState } from "react";

import { Container, ContainerColumn, ContainerRow, StyledLink } from "@app/styles/common.style";
import { SMALL } from "@app/const";
import { IComponentFeatured } from "@app/services/component.service";
import { ComponentUnit } from "@app/types/component";
import { RightArrow } from "@app/components/common/svg";

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
					<StyledLink to={`component/${components[componentId]?.component.id}`}>
						<SliderComponentImg src={components[componentId]?.component.image} alt={"ok"} />
					</StyledLink>
				</SliderImgContainer>

				<SliderTextContainer>
					<SliderBigText>
						{components[componentId]?.component.getDisplayName()}
					</SliderBigText>
					<SliderSmallText>${components[componentId]?.component.price} </SliderSmallText>
				</SliderTextContainer>

				<div style={{ cursor: "pointer" }} onClick={() => handleSliderClick()}>
					<RightArrow initial={{ width: 20, height: 40 }} />
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
