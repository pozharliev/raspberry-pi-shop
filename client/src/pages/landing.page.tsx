import { useEffect, useState } from "react";

import { ContainerColumn, ContainerRow } from "@app/styles/common.style";
import { ContainerLines, ContainerCategories, ContainerFeatured, ContainerTop, GradientSpan, P, TextBetweenLines } from "@app/styles/landing.style";

import ComponentService, { IComponent, IComponentFeatured } from "@app/services/component.service";
import CategoryService, { ICategory } from "@app/services/category.service";

import SliderComponent from "@app/components/SliderComponent";
import { Category } from "@app/components/Category";
import { Component } from "@app/components/Component";

const LandingPage: React.FC = (): JSX.Element => {
	const [components, setComponents] = useState<IComponent[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [featuredComponents, setFeaturedComponents] = useState<IComponentFeatured[]>([]);

	useEffect(() => {
		ComponentService.featured()
			.then(data => setFeaturedComponents(data))
			.catch(console.error);
	}, []);

	useEffect(() => {
		ComponentService.list()
			.then(data => setComponents(data))
			.catch(console.error);
	}, []);

	useEffect(() => {
		CategoryService.list()
			.then(data => setCategories(data))
			.catch(console.error);
	}, []);

	console.log(components);

	return (
		<>
			<ContainerTop>
				<ContainerColumn>
					<P> Your Own </P>
					<GradientSpan> Raspberry </GradientSpan>
				</ContainerColumn>

				<SliderComponent components={featuredComponents} />
			</ContainerTop>

			<ContainerLines>
				<TextBetweenLines> Categories </TextBetweenLines>
			</ContainerLines>

			<ContainerRow>
				<ContainerCategories>
					{categories.map((category, index) => {
						return (
							<Category name={category.displayName} count={category.count} description={category.description} key={index} />
						);
					})}
				</ContainerCategories>
			</ContainerRow>

			<ContainerLines>
				<TextBetweenLines> Featured </TextBetweenLines>
			</ContainerLines>

			<ContainerRow>
				<ContainerFeatured>
					{components.slice(0, 15).map((component, index) => {
						return <Component component={component} key={index} />;
					})}
				</ContainerFeatured>
			</ContainerRow>
		</>
	);
};

export default LandingPage;
