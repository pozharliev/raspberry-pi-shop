
export interface IMeasurements {
	width: number;
	height: number;
}

export interface ISvg {
	initial: IMeasurements;
	breakpoints?: { [key: number]: IMeasurements };
	style?: Record<string, unknown>;
}
