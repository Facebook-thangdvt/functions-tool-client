type TProxyKey = "host" | "port" | TBasicAccount;
interface IProxy extends Record<TProxyKey, string> {
	compose?: () => string;
}
