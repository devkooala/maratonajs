const {getMessage} = require("./messages");

const getValidatorError = (error, messagePath) => {
    if(!error) return null;

    const errors = {};
    for (let i = 0; i < error.details.length; i++) {
        let message = error.details[i].message;
        let key = error.details[i].context.key;
        let type = error.details[i].type;
        
        const path = `${messagePath}.${key}.${type}`;

        const customMessage = getMessage(path);
        if(!customMessage){
            console.log("No custom msg found for path: ", path);
        }
        
        errors[key] = customMessage || message;

        console.log(path);
    }

    return errors;
}

module.exports = {getValidatorError, getMessage};