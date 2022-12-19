import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		gradientColorFrom: string;
		gradientColorTo: string;
		color1: string;
	}
}

declare module "*.png" {
	const src: string;
	export default src;
}
