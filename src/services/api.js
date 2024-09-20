import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://tasksapi-lvzk.onrender.com",
	headers: {
		"Content-Type": "application/json",
	},
});

export default apiClient;
