module.exports=(thefunc)=>(req,res,next)=>{
Promise.resolve (thefunc(req,res,next)).catch(next)
}


// req: The incoming HTTP request object containing information about the request.
// res: The outgoing HTTP response object used to send responses back to the client.
// next: A function that allows the middleware to pass control to the next middleware in the chain.
//This ensures that even if theFunc doesn't return a Promise explicitly, 
//it's still treated as an asynchronous operation.
//Wraps your middleware in a Promise for consistent asynchronous handling.
//Catches any errors thrown by your middleware and
// passes them to the next middleware in the chain for proper error handling.