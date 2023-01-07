import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	BigImage,
	ChoosingImagesContainer,
	ImageContainer,
	ProductPageContainer,
	SlidingImagesContainer,
	SmallImage,
	TextContainer,
	BigText,
	Line,
	DescriptionContainer,
	QuantitySelectorContainer,
	Button,
	AddToCartButton,
	SmallText,
	MidText,
	VerySmallText,
} from "@app/styles/product.style";
import ComponentService, { IComponent } from "@app/services/component.service";
import serverImage from "@app/utils/serverImage";
import { useStoredComponents } from "@app/stores/selectors";
import { Component } from "@app/components/Component";
import { ContainerColumn, TextBetweenLines, ContainerComponents } from "@app/styles/common.style";

const ProductPage = (): JSX.Element => {
	const { id } = useParams();

	const [component, setComponent] = useState<IComponent>();
	const [similarComponents, setSimilarComponents] = useState<IComponent[]>();
	const [quantity, setQuantity] = useState(0);
	const [imageId, setImageId] = useState(0);

	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		if (id !== null) {
			ComponentService.get(Number(id))
				.then(res => setComponent(res))
				.catch(console.error);
		}
	}, []);

	useEffect(() => {
		if (component !== null && component !== undefined) {
			ComponentService.category(component.category.id)
				.then(data => {
					setSimilarComponents(data);
				})
				.catch(_ => {
					const storedComponents = useStoredComponents();
					setSimilarComponents(storedComponents.filter(storedComponent => storedComponent.category.id === component.category.id));
				});
		}
	}, [component]);

	useEffect(() => {
		if (component !== null && component !== undefined) {
			setImages([serverImage(component.id), serverImage(component.id), serverImage(component.id)]);
		}
	}, [component]);

	const handleArrowClick = (operand: -1 | 1): void => {
		if (imageId + operand >= images.length) {
			setImageId(0);
		} else if (imageId + operand < 0) {
			setImageId(images.length - 1);
		} else {
			setImageId(imageId + operand);
		}
	};

	return (
		<ContainerColumn>
			<ProductPageContainer>
				<ImageContainer>
					<SlidingImagesContainer>
						<svg
							width="20"
							viewBox="0 0 35 74"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => handleArrowClick(-1)}
							style={{ cursor: "pointer" }}
						>
							<line
								y1="-2"
								x2="45.2375"
								y2="-2"
								transform="matrix(-0.643635 -0.765333 -0.63047 0.776214 32.1162 74)"
								stroke="#A1A1A1"
								strokeWidth="4"
							/>
							<line
								y1="-2"
								x2="46.4223"
								y2="-2"
								transform="matrix(-0.643652 0.765318 0.63044 0.776238 33 4)"
								stroke="#A1A1A1"
								strokeWidth="4"
							/>
						</svg>
						<BigImage src={images[imageId]} />
						<svg
							width="20"
							viewBox="0 0 35 74"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => handleArrowClick(1)}
							style={{ cursor: "pointer" }}
						>
							<line
								y1="-2"
								x2="45.2374"
								y2="-2"
								transform="matrix(0.643634 -0.765334 0.630469 0.776214 2.88379 74)"
								stroke="#A2A2A2"
								strokeWidth="4"
							/>
							<line
								y1="-2"
								x2="46.4222"
								y2="-2"
								transform="matrix(0.643652 0.765318 -0.630439 0.776238 2 4)"
								stroke="#A2A2A2"
								strokeWidth="4"
							/>
						</svg>
					</SlidingImagesContainer>

					<ChoosingImagesContainer>
						{images.map((imageSrc, index) => {
							return <SmallImage onClick={() => setImageId(index)} src={imageSrc} selected={imageId === index} key={index} />;
						})}
					</ChoosingImagesContainer>
				</ImageContainer>

				<TextContainer>
					<div>
						<VerySmallText> New </VerySmallText>
						<BigText> {component?.name.replace(",", " ").replace("-", " ").split(" ").slice(0, 5).join(" ")} </BigText>
						<Line />
					</div>
					<MidText> $ {component?.price}</MidText>
					<DescriptionContainer>
						<p>{component?.description.split(" ").slice(0, 15).join(" ")}</p>
						<br />
						<p> {component?.description.split(" ").slice(15, 30).join(" ")} </p>
					</DescriptionContainer>
					<QuantitySelectorContainer>
						<Button onClick={() => setQuantity(originalQuantity => (originalQuantity === 0 ? 0 : originalQuantity - 1))}>
							{" "}
							-{" "}
						</Button>
						<SmallText> {quantity} </SmallText>
						<Button onClick={() => setQuantity(originalQuantity => originalQuantity + 1)}> + </Button>
					</QuantitySelectorContainer>
					<AddToCartButton> ADD TO CART </AddToCartButton>
				</TextContainer>
			</ProductPageContainer>

			<TextBetweenLines style={{ margin: "5rem 0" }}> Similar components </TextBetweenLines>

			<ContainerComponents>
				{
					similarComponents?.slice(0, 10).map(similarComponent => {
						return <Component component={similarComponent} key={similarComponent.id} />;
					})
				}
			</ContainerComponents>
		</ContainerColumn>
	);
};

export default ProductPage;
