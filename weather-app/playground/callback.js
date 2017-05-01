var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Igor"
    };

    setTimeout(() => {
        callback(user); //wait 3sec and after what see the result
    },3000);
};

getUser(31, (callbackObject) => {
    console.log(callbackObject);
});