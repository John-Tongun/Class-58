//Author: John Tongun Wani <John-Tongun-Wani>


//simulated server respond code 
const statusCode = 400;

switch (statusCode) {
    case 200:
        console.log("Request successful");
        break;

    case 400:
        console.log("bad request");
        break;

    case 401:
        console.log("unauthorize Access");
        break;

    case 404:
        console.log("Resource not found");
        break;

    case 500:
        console.log("Internal Server Error");
        break;

    default:
        console.log("Unknown Status Code");
}