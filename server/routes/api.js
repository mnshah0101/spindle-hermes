//here we want to catch get, post, put, and delete requests seperately
//in each handler, first we want to check if the provided key is valid
//if the key is valid, we want to proceed with the request
//if the key is invalid, we want to return a 401 status code
//if the key is missing, we want to return a 403 status code
//then we get the endpoint from our mongodb, remember to open and close connections strictly
//then we want to check if the parameters are valid ie if they match the paramters in our endpoint object
//if the parameters are valid, we want to proceed with the request
//if the parameters are invalid, we want to return a 400 status code
//if the parameters are missing, we want to return a 400 status code
//then, we want to take the code string from the endpoint object which would be a function and call in our vm with the parameters
//the code should run and return a result
//if the code runs successfully, we want to return the result with a 200 status code
//if the code fails, we want to return a 500 status code