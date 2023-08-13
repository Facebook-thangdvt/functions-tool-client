const defaultProxy = {
	host: "",
	port: "",
	username: "",
	password: "",
};

export class Proxy implements IProxy {
	host = "";
	port = "";
	username = "";
	password = "";

	constructor({ host, port, username, password }: IProxy = defaultProxy) {
		this.host = host;
		this.port = port;
		this.username = username;
		this.password = password;
	}

	compose() {
		return `${this.host}:${this.port}`;
	}
}
