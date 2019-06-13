export const UPDATE_TOKEN = "UPDATE_TOKEN";

export const updateToken = (payload) =>{
    return {
        type : UPDATE_TOKEN,
        payload : payload
    };
}