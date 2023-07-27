const axios = require('axios');

const { AUTH_SERVICE_URL } = require('../serverConfig');

//first check if the user token is valid

class CallAuthentication{

    async isUserAuthenticated(token) {
        try {
            const response = await axios.get(`${AUTH_SERVICE_URL}/isAuthenticated` , {
                headers : {
                    'x-access-token' : token
                }
            })
            console.log('the response recieved from the auth service through axios is : ' , response.data);
            return response.data;
        } catch (error) {
            console.log('error on the authentification.js file of the interservice calls');
            throw {name : "the sent token is not valid"};
        }
    }
    
    
    async isUserAdmin(userId){
        try {
            const response = await axios.get(`${AUTH_SERVICE_URL}/isAdmin` , {
                data : {
                    id : userId
                }
            })
            console.log('response from the auth service in interservice calls folder : ' , response.data);
            //here data.data as the true/false will be returned in the data parameter from the auth service
            if(!response.data.data){
                throw {name : "User is not ADMIN and only admin can create flight"}
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CallAuthentication;