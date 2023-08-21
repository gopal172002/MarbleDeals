const { constants } = require("../routes/constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "validation failed", message: err.message, statusbar: err.stack });
            break;
        case constants.UNAUTHORISED_ERROE:
            res.json({ title: "Unauthorised error", message: err.message, statusbar: err.stack }); 
            break;
        case constants.FORBIDDEN_ERROR:
                res.json({ title: "Forbidden error", message: err.message, statusbar: err.stack }); 
                break;
        case constants.NOT_FOUND:
                    res.json({ title: "Not Found", message: err.message, statusbar: err.stack }); 
                    break; 
        default:
            console.log("No Error is there.. all goood!");
            break;                         
    }
};

module.exports = errorHandler;