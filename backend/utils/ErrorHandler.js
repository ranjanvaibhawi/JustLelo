class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode   //adds the HTTP status code associated with the error

        Error.captureStackTrace(this,this.constructor);
        //When an error occurs, a stack trace is generated, 
        //which shows the sequence of function calls that led to the error.

    }
    
}
module.exports = ErrorHandler