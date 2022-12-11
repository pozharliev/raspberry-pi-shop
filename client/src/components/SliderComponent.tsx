import styled from "styled-components";
import IComponent from "@app/types/component";

const SliderComponentContainer = styled.div`
  //border: -web
`;

const SliderComponent = ({ components }: { components: IComponent[] }): JSX.Element => {
	return (
		<SliderComponentContainer>

		</SliderComponentContainer>
	);
};

export default SliderComponent;