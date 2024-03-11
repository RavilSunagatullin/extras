export interface EndpointInterface {
	[key: string]: string;
}

const endpoints: EndpointInterface = {
	login: 'http://127.0.0.1:8000/auth/login',
};

export default endpoints;
