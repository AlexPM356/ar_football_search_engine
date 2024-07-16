class TournamentNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = 'TournamentNotFound';
    }
}

export default TournamentNotFound;