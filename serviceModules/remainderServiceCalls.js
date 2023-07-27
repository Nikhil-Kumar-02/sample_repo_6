const axios = require('axios');

const { REMAINDER_SERVICE_URL } = require('../serverConfig');

class CallRemainder{

    async createAndSendTicketRemainder(data){
        try {
            const responseFromRemainderService = await axios.post(REMAINDER_SERVICE_URL , data);
            console.log('reponse from remainder service : ',responseFromRemainderService);
            return responseFromRemainderService;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CallRemainder;