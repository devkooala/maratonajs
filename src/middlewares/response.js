const TYPE_APP_JSON = "application/json";
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 400;
const STATUS_CODE_SERVER_ERROR = 500;


const jsonOk = function(data = null, metadata = null, message = "Successful request "){
    const status = STATUS_CODE_OK;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonBadRequest = function(data = null, metadata = null, message = "Bad request"){
    const status = STATUS_CODE_BAD_REQUEST;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonUnauthorized = function(data = null, metadata = null, message = "Unauthorized request"){
    const status = STATUS_CODE_UNAUTHORIZED;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonNotFound = function(data = null, metadata = null, message = "Not found"){
    const status = STATUS_CODE_NOT_FOUND;

    this.status(status);
    this.type(TYPE_APP_JSON);

    return this.json({status, message, data, metadata});
}

const jsonServerError = function(data = null, metadata = null, message = "Internal Server Error"){
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