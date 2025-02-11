import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import { fetchCharactersByName } from "@/api/rickAndMortyApi";
import "./HomePage.scss";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query && query.length > 2) {
                setLoading(true);
                setError("");
                fetchCharactersByName(query)
                    .then((results) => {
                        setCharacters(results);
                        setLoading(false);
                    })
                    .catch(() => {
                        setError("Персонажи не найдены!");
                        setCharacters([]);
                        setLoading(false);
                    });
            } else {
                setCharacters([]);
                setError("");
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const handleSearch = (value) => {
        setQuery(value);
    };

    return (
        <div className="home-page">
            <SearchBar onSearch={handleSearch} />
            {loading && <p className="loading">Загрузка...</p>}
            {error && <p className="error">{error}</p>}

            <div className="characters-grid">
                {characters.length > 0 && (
                    <div className="first-row">
                        {characters.slice(0, 2).map((character) => (
                            <CharacterCard
                                key={character.id}
                                character={character}
                            />
                        ))}
                    </div>
                )}

                {characters.length > 2 && (
                    <div className="other-rows">
                        {characters.slice(2).map((character) => (
                            <CharacterCard
                                key={character.id}
                                character={character}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
