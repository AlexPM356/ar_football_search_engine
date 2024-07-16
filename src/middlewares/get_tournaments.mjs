import databaseCall from "../db/index.mjs";
const getTournamentSelected = (country) => {
    return async (req, res, next) => {
        let countryDB = (country[0].toUpperCase() + country.slice(1));
        try {
            databaseCall(countryDB);
        } catch (err) {
            return next(err);
        }
    }
};

export default getTournamentSelected;