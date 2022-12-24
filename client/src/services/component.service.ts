import Http from "@app/requests";
import { AxiosResponse } from "axios";

export interface IComponentStore {
	id: number;
	name: string;
	displayName: string;
}

export interface IComponentCategory {
	id: number;
	name: string;
	displayName: string;
}

export interface IComponent {
	id: number;
	name: string;
	displayName?: string;
	store: IComponentStore;
	description: string;
	price: number;
	category: IComponentCategory;
	image: string;
	url: string;
}

export interface IComponentFeatured {
	order: number;
	component: IComponent;
}

export default class Component {
	static async featured(): Promise<IComponentFeatured[]> {
		return await Http.get("@api/components/featured/").then((res: AxiosResponse<IComponentFeatured[]>) => {
			(res as unknown as IComponentFeatured[]).map(component => {
				component.component.displayName = component.component.name.replace(",", " ").split(" ").slice(0, 3).join(" ");
				return component;
			});
			return res as unknown as IComponentFeatured[];
		});
	}
}
