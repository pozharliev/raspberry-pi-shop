import { useEffect, useState } from "react";

import { ContainerColumn, ContainerRow } from "@app/styles/common.style";
import { ContainerLines, ContainerCategories, ContainerTop, GradientSpan, P, TextBetweenLines } from "@app/styles/landing.style";
import SliderComponent from "@app/components/SliderComponent";
import ComponentService, { IComponentFeatured } from "@app/services/component.service";
import { Category } from "@app/components/Category";
import CategoryService, { ICategory } from "@app/services/category.service";

const LandingPage: React.FC = (): JSX.Element => {
	const [featuredComponents, setFeaturedComponents] = useState<IComponentFeatured[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		ComponentService.featured()
			.then(components => setFeaturedComponents(components))
			.catch(console.error);
	}, []);

	useEffect(() => {
		CategoryService.list()
			.then(data => setCategories(data))
			.catch(console.error);
	}, []);

	return (
		<>
			<ContainerTop>
				<ContainerColumn>
					<P> Your Own </P>
					<GradientSpan> Raspberry </GradientSpan>
				</ContainerColumn>

				<SliderComponent components={featuredComponents}/>
			</ContainerTop>

			<ContainerLines>
				<TextBetweenLines> Categories </TextBetweenLines>
			</ContainerLines>

			<ContainerRow>
				<ContainerCategories>
					{categories.map((category, index) => {
						return <Category name={category.displayName} count={category.count} description={category.description} key={index} />;
					})}
				</ContainerCategories>
			</ContainerRow>
		</>
	);
};

export default LandingPage;
