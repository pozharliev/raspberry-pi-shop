import axios, { AxiosResponse } from "axios";

axios.defaults.withCredentials = true;

export default class Http {
	private static readonly _base: string = "http://localhost:8000/";
	private static readonly _apiBase: string = this._base + "api";

	private static async request(url: string, method: string, body?: Record<string, unknown>): Promise<AxiosResponse> {
		const paths: { [key: string]: string } = {
			"@api": Http._apiBase,
		};

		Object.keys(paths).forEach(path => {
			url = url.replace(path, paths[path]);
		});

		return await axios({
			method,
			url,
			data: method !== "GET" ? body : null,
		}).then(res => {
			if (res.status >= 400) {
				throw res;
			}
			return res;
		});
	}

	public static get(url: string): Promise<AxiosResponse> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Http.request(url, "GET").then((res: AxiosResponse) => res.data);
	}

	public static post(url: string, body?: Record<string, unknown>): Promise<AxiosResponse> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Http.request(url, "POST", body).then(res => res.data);
	}

	public static put(url: string, body?: Record<string, unknown>): Promise<AxiosResponse> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Http.request(url, "PUT", body).then(res => res.data);
	}

	public static patch(url: string, body?: Record<string, unknown>): Promise<AxiosResponse> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Http.request(url, "PATCH", body).then(res => res.data);
	}

	public static delete(url: string, body?: Record<string, unknown>): Promise<AxiosResponse> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Http.request(url, "DELETE", body).then(res => res.data);
	}
}
