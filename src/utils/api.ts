const createURL = (path: string) => {
	return window.location.origin + path;
};

export const createNewEntry = async () => {
	const res = await fetch(
		new Request(createURL("/api/journal"), {
			method: "POST",
		})
	);
	if (res.ok) {
		const response = await res.json();
		return response.data;
	}
};

export const updateEntry = async (id, content) => {
	const res = await fetch(
		new Request(createURL(`/api/journal/${id}`), {
			method: "PATCH",
			body: JSON.stringify({ content }),
		})
	);

	if (res.ok) {
		const response = await res.json();
		return response.data;
	}
};

export const askQuestion = async (question) => {
	const res = await fetch(
		new Request(createURL("/api/question"), {
			method: "POST",
			body: JSON.stringify({ question }),
		})
	);
	if (res.ok) {
		const response = await res.json();
		return response.data;
	}
};
