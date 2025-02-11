import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharactersByName = async (name) => {
    const response = await axios.get(`${BASE_URL}/character`, {
        params: { name },
    });
    return response.data.results;
};
