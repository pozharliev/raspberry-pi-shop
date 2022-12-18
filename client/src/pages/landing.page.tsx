import { ContainerColumn } from "@app/styles/common.style";
import { ContainerTop, GradientSpan, P } from "@app/styles/landing.style";
import SliderComponent from "@app/components/SliderComponent";

const LandingPage: React.FC = (): JSX.Element => {
	return (
		<ContainerTop>
			<ContainerColumn>
				<P> Your Own </P>
				<GradientSpan> Raspberry </GradientSpan>
			</ContainerColumn>

			<SliderComponent />
		</ContainerTop>
	);
};

export default LandingPage;
