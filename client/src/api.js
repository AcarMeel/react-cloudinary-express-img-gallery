const API_URL = process.env.REACT_APP_API_URL;

export const getImages = async (nextCursor) => {
    const params = new URLSearchParams();
    if (nextCursor) {
        params.append('next_cursor', nextCursor)
    }
    const response = await fetch(`${API_URL}/photos?${params}`)
    const data = await response.json()
    return data;
}

export const searchImages = async (searchValue) => {
	const params = new URLSearchParams();
	params.append(`expression`, searchValue);

	const response = await fetch(`${API_URL}/search?${params}`);
	const data = await response.json();

	return data;
};