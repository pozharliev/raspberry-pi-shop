import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		gradientColorFrom: string;
		gradientColorTo: string;
	}
}

declare module "*.png" {
	const src: string;
	export default src;
}
