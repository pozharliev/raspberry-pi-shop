import Http from "@app/requests";
import { AxiosResponse } from "axios";

export interface ICategory {
	id: number;
	count: number;
	name: string;
	displayName: string;
	description: string;
}

export default class CategoryService {
	static async list(): Promise<ICategory[]> {
		return await Http.get("@api/categories").then((data: AxiosResponse<ICategory[]>) => data as unknown as ICategory[]);
	}
}
