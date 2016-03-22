var axios = require("axios");

function getUserInfo (username) {
    return axios.get("https://api.github.com/users/" + username )
};

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function(player){
            return getUserInfo(player);
        })).then(function(info){
            return info.map(funtion(user) {
                return user.data;
            })
        })
    }
};

module.exports = helpers;
