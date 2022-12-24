import { useEffect, useState } from "react";

import { ContainerColumn } from "@app/styles/common.style";
import { ContainerLines, ContainerTop, GradientSpan, P, TextBetweenLines } from "@app/styles/landing.style";
import SliderComponent from "@app/components/SliderComponent";
import Component, { IComponentFeatured } from "@app/services/component.service";

const LandingPage: React.FC = (): JSX.Element => {
	const [featuredComponents, setFeaturedComponents] = useState<IComponentFeatured[]>([]);

	useEffect(() => {
		Component.featured()
			.then(components => setFeaturedComponents(components))
			.catch(console.log);
	}, []);

	return (
		<><ContainerTop>
			<ContainerColumn>
				<P> Your Own </P>
				<GradientSpan> Raspberry </GradientSpan>
			</ContainerColumn>

			<SliderComponent components={featuredComponents}/>
		</ContainerTop>

		<ContainerLines>
			<TextBetweenLines> Categories </TextBetweenLines>
		</ContainerLines></>
	);
};

export default LandingPage;
