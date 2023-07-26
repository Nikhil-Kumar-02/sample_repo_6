const dotENV = require('dotenv');
dotENV.config();

module.exports = {
    PORT : process.env.PORT,
    AUTH_SERVICE_URL : process.env.AUTH_SERVICE_URL,
    FLIGHT_AND_SEARCH_SERVICE_URL : process.env.FLIGHT_AND_SEARCH_SERVICE_URL,
    REMAINDER_SERVICE_URL : process.env.REMAINDER_SERVICE_URL
}