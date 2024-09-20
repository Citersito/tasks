import apiClient from "./api";

const getSessionFromLocalStorage = () => {
	const session = localStorage.getItem("session");
	return session ? JSON.parse(session) : null;
};

const checkSession = async () => {
	try {
		const response = await apiClient.get("/auth/session");
		localStorage.setItem("session", JSON.stringify(response.data));
		return response.data;
	} catch (error) {
		console.error("Error al obtener la sesión:", error);
		return getSessionFromLocalStorage();
	}
};

export default checkSession;
