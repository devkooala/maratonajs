const {getMessage} = require("../helpers/messages");

const TYPE_APP_JSON = "application/json";
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 400;
const STATUS_CODE_SERVER_ERROR = 500;


const jsonOk = function(data = null, metadata = null, message = getMessage("response.json_ok")){
    const status = STATUS_CODE_OK;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonBadRequest = function(data = null, metadata = null, message = getMessage("response.json_bad_request")){
    const status = STATUS_CODE_BAD_REQUEST;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonUnauthorized = function(data = null, metadata = null, message = getMessage("response.json_unauthorized")){
    const status = STATUS_CODE_UNAUTHORIZED;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonNotFound = function(data = null, metadata = null, message = getMessage("response.json_not_found")){
    const status = STATUS_CODE_NOT_FOUND;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonServerError = function(data = null, metadata = null, message = getMessage("response.json_server_error")){
    const status = STATUS_CODE_SERVER_ERROR;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const response = (req, res, next) => {
    res.jsonOk = jsonOk;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
}

module.exports = response;