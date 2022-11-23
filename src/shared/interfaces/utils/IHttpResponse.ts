export interface IHttpResponse {
	status: number;
	message?: string;
	data?: object | null;
}
