const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyDmL5YqeqvxWmY00ZsNrTi5b2GOsfuxJxM";

const client = new DissCussServiceClient({
    authContent:new GoogleAuth().fromAPIKey(API_KEY)
})

const context = "";



// message.push({"content":"NEXT REQUEST"})