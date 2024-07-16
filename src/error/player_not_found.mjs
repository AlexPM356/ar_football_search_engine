class PlayerNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = 'PlayerNotFound';
    }
}

export default PlayerNotFound;