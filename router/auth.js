const express = require('express');
const router = express.Router();

const {CallAuthentication} = require('../serviceModules/index');

//now from here we will redirect to authorization in service Modules

const callauthentication = new CallAuthentication();

router.get('/isAuthenticated' , async (req,res) => {
    try {
        //the called function just expects a token as a parameter
        const response = await callauthentication.isUserAuthenticated(req.headers['x-access-token']);
        console.log('print from auth.js of routes of interservice : ', response);
        return res.status(200).json({
            data : response
        })
    } catch (error) {
        console.log('error in the interservice call / router / auth');
        throw error;
    }
});

module.exports = router;