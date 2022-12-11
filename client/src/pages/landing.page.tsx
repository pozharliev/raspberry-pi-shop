import { ContainerSpaceBetween, ContainerColumn } from "@app/styles/common.style";
import { GradientSpan, P } from "@app/styles/landing.style";

const LandingPage: React.FC = (): JSX.Element => {
	const img = "";
	return (
		<ContainerSpaceBetween>
			<ContainerColumn>
				<P> Your Own </P>
				<GradientSpan> Raspberry </GradientSpan>
			</ContainerColumn>


		</ContainerSpaceBetween>
	);
};

export default LandingPage;
