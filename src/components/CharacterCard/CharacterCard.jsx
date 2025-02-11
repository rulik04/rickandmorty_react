import "./CharacterCard.scss";
const CharacterCard = ({ character }) => {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "alive":
                return "alive";
            case "dead":
                return "dead";
            default:
                return "unknown";
        }
    };

    return (
        <a className="character-card" href={character.url} target="_blank">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <p className={`status ${getStatusClass(character.status)}`}>
                Статус: {character.status}
            </p>
            <p className="created">
                Created: {new Date(character.created).toLocaleDateString()}
            </p>
        </a>
    );
};

export default CharacterCard;
