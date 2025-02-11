import { useRef, useEffect } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Поиск персонажей..."
                onChange={handleChange}
                className="search-bar"
            />
        </div>
    );
};

export default SearchBar;
