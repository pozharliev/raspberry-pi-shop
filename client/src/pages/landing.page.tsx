import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ContainerColumn, ContainerRow, ContainerComponents, TextBetweenLines } from "@app/styles/common.style";
import { ContainerLines, ContainerCategories, ContainerTop, GradientSpan, P } from "@app/styles/landing.style";

import ComponentService, { IComponentFeatured } from "@app/services/component.service";
import CategoryService, { ICategory } from "@app/services/category.service";

import { ComponentUnit, IComponent } from "@app/types/component";

import SliderComponent from "@app/components/ui/slider-component";
import { Category } from "@app/components/ui/category";
import { Component } from "@app/components/ui/component";
import { setStoredComponents } from "@app/stores/component.store";
import { useStoredComponents } from "@app/stores/selectors";

const LandingPage: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const storedComponents = useStoredComponents();

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
			.then(data => {
				setComponents(data);
				dispatch(setStoredComponents(data));
			})
			.catch(_ => {
				setComponents(storedComponents);
			});
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
				<ContainerComponents>
					{components.slice(0, 18).map((component, index) => {
						return <Component component={component} key={index} />;
					})}
				</ContainerComponents>
			</ContainerRow>
		</>
	);
};

export default LandingPage;
