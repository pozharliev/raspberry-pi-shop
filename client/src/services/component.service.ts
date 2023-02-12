import Http from "@app/requests";
import { AxiosResponse } from "axios";

import { ComponentUnit, IComponent } from "@app/types/component";

export interface IComponentFeatured {
	order: number;
	component: ComponentUnit;
}

export default class ComponentService {
	static async get(id: number): Promise<IComponent> {
		return await Http.get(`@api/components/${id}`).then(res => res as unknown as IComponent);
	}

	static async list(): Promise<IComponent[]> {
		return await Http.get("@api/components").then((res: AxiosResponse<IComponent[]>) => {
			return res as unknown as IComponent[];
		});
	}

	static async category(categoryId: number): Promise<IComponent[]> {
		return await Http.post("@api/components/category/", { categoryId }).then((res: AxiosResponse<IComponent[]>) => {
			return res as unknown as IComponent[];
		});
	}

	static async featured(): Promise<IComponentFeatured[]> {
		return await Http.get("@api/components/featured/").then((res: AxiosResponse<IComponentFeatured[]>) => {
			return (res as unknown as IComponentFeatured[]).map(item => {
				return { component: new ComponentUnit(item.component), order: item.order };
			});
		});
	}
}
