import styled from "styled-components";
import { ContainerColumn, ContainerRow, ContainerSpaceBetween } from "@app/styles/common.style";
import { LARGE, SMALL, XX_LARGE } from "@app/const";

export const ProductPageContainer = styled(ContainerRow)`
	height: 27rem;
	gap: 2rem;
	align-items: flex-end;

	@media (min-width: ${XX_LARGE}px) {
		align-items: center;
		gap: 6rem;
	  
	  	margin-top: 3rem;

		height: 37rem;
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		margin-top: 2rem;
		gap: 3rem;
	  	height: 30rem;
	}

	@media (max-width: ${SMALL}px) {
		flex-direction: column;
		align-items: center;
		height: 50rem;
		margin-top: 1.25rem;
	}
`;

export const ImageContainer = styled(ContainerColumn)`
	user-select: none;
`;

export const SlidingImagesContainer = styled(ContainerSpaceBetween)`
	width: 25rem;

	@media (min-width: ${XX_LARGE}px) {
		width: 40rem;
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		width: 28.5rem;
	}

	@media (max-width: ${SMALL}px) {
		width: 90vw;
	}
`;

export const ChoosingImagesContainer = styled(ContainerSpaceBetween)`
	width: 14rem;

	@media (min-width: ${XX_LARGE}px) {
		width: 27rem;
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		width: 21rem;
	}
`;

export const TextContainer = styled(ContainerColumn)`
	align-items: flex-start;
	justify-content: space-between;
	height: 24rem;
	width: 18.5rem;
	padding-bottom: 1rem;

    @media (min-width: ${XX_LARGE}px) {
		width: 30rem;
      	height: 34rem;
    }
  
	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		height: 28rem;
		width: 25rem;
	}

	@media (max-width: ${SMALL}px) {
		max-width: 20rem;
	  	height: 30rem;
	}
`;

export const BigImage = styled.img`
	width: 20rem;

	@media (min-width: ${XX_LARGE}px) {
		width: 30rem;
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		width: 23rem;
	}

	@media (max-width: ${SMALL}px) {
		width: 70vw;
	}
`;

export const SmallImage = styled.img<{ selected?: boolean, src?: string }>`
	width: ${props => (props.selected ?? false ? "4.5rem" : "4rem")};
	border: ${props => (props.selected ?? false ? "1px solid" : "0")};
	padding: ${props => (props.selected ?? false ? "0.25rem" : 0)};

	cursor: pointer;

	@media (min-width: ${XX_LARGE}px) {
		width: ${props => (props.selected ?? false ? "8.5rem" : "8rem")};
	}

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		width: ${props => (props.selected ?? false ? "6.5rem" : "6rem")};
	}
`;

export const BigText = styled.p`
	color: #231f20;
	padding-bottom: 0.5rem;
	font-weight: bolder;
	font-size: 2rem;

    @media (min-width: ${XX_LARGE}px) {
		font-size: 4rem;
    }
  
	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		font-size: 3rem;
	}

	@media (max-width: ${SMALL}px) {
		font-size: 2.5rem;
	}
`;

export const MidText = styled.p`
	color: #231f20;
	font-size: 2rem;
	font-weight: bolder;

    @media (min-width: ${XX_LARGE}px) {
		font-size: 3rem;
    }
  
	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px ) {
		font-size: 2.33rem;
	}
`;

export const SmallText = styled.h3`
	color: #231f20;

	padding: 0 1rem;
  
    @media (min-width: ${XX_LARGE}px) {
		font-size: 2rem;
    }

	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		font-size: 1.25rem;
	}

	@media (max-width: ${SMALL}px) {
		font-size: 1.5rem;
	}
`;

export const VerySmallText = styled.p`
	color: #f11313;
	font-weight: bolder;
  
    @media (min-width: ${XX_LARGE}px) {
		font-size: 1.5rem;
    }
`;

export const Line = styled.hr`
	width: 5rem;
	height: 3px;
	background: #c8c8c8;
	border-radius: 1.25rem;
`;

export const DescriptionContainer = styled.div`
	p {
		font-size: 1rem;
		font-weight: bolder;
		line-height: 0.95rem;
		color: #5C5C5C;
		max-width: 18.5rem;
	  
        @media (min-width: ${XX_LARGE}px) {
			max-width: 30rem;
          	font-size: 1.5rem;
          	line-height: 1.4rem;
        }
          
        @media(min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
			max-width: 25rem;
          	font-size: 1.25rem;
          	line-height: 1.18rem;
        }
	  
		@media(max-width: ${SMALL}px) {
			max-width: 20rem;
		}
`;

export const QuantitySelectorContainer = styled(ContainerRow)``;

export const Button = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d9d9d9;
	border-radius: 50%;
	width: 1.5rem;
	height: 1.5rem;
  	cursor: pointer;

    @media (min-width: ${XX_LARGE}px) {
		width: 2rem;
      	height: 2rem;
    }
  
	@media (max-width: ${XX_LARGE}px) {
		width: 1.75rem;
		height: 1.75rem;
	}
`;

export const AddToCartButton = styled.button`
	width: 100%;
	height: 2.5rem;
	border-radius: 1rem;
	border: 0;
	background: #bc1142;
	color: white;
	font-weight: bolder;
	font-size: 1.1rem;

    @media (min-width: ${XX_LARGE}px) {
		height: 4rem;
    }
  
	@media (min-width: ${LARGE}px) and (max-width: ${XX_LARGE}px) {
		height: 3rem;
	}
`;
