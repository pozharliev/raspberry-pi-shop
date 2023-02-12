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
	store: IComponentStore;
	description: string;
	price: number;
	category: IComponentCategory;
	image: string;
	url: string;
}

export class ComponentUnit implements IComponent {
	id: number;
	name: string;
	store: IComponentStore;
	description: string;
	price: number;
	category: IComponentCategory;
	image: string;
	url: string;

	constructor(component: IComponent) {
		this.id = component.id;
		this.name = component.name;
		this.store = component.store;
		this.description = component.description;
		this.price = component.price;
		this.category = component.category;
		this.image = component.image;
		this.url = component.url;
	}

	getDisplayName(): string {
		return this.name.replace(",", " ").split(" ").slice(0, 3).join(" ").replace(/,$/, "");
	}

	getLongerDisplayName(): string {
		return this.name.replace(",", " ").split(" ").slice(0, 5).join(" ").replace(/,$/, "");
	}

	getDisplayDescription(): string {
		return this.description.split(" ").slice(0, 5).join(" ").replace(/,$/, "");
	}
}
