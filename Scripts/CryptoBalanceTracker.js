var CryptoBalanceTracker = function(url, version){
    var BASE_URL = url || 'https://api.coinmarketcap.com';
    var VERSION = version || 'v1'; 

    var data;

    function init(options) {
        return fetch(BASE_URL + '/' + VERSION + '/ticker/' )
            .then(function(response){
                return response.json();
            })
            .then(function(returnData){
                data = returnData.reduce(
                    function(map, item){ 
                        map[item.symbol] = item; 
                        return map; 
                    }, {});
            });
    }

    function getData(symbol) {
        if (!data) return 'Prices loading...';

        if (!symbol) return data;

        return data[symbol];
    }

    return {
        "getData" : getData,
        "init" : init
    }
}