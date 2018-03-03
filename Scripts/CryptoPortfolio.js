var CryptoPortfolio = function(source, options){
    switch(source) {
        case "file":
            // var balances = document.createElement("script");
            // balances.src="./Scripts/balances.js";

            // document.body.appendChild(balances);
            return storedBalances;
        case "test": 
        default:
            return [
                {
                    symbol: 'BTC',
                    amount: 10,
                    exchange: 'Coinbase'
                },
                {
                    symbol: 'ETH',
                    amount: 100,
                    exchange: 'Coinbase'
                },
            ];
    }
}