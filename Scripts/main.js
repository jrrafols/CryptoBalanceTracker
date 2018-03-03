(function(){
    function Main() {
        portfolio = portfolio.map(function(item){
            var coinInfo = app.getData(item.symbol);

            if (coinInfo) {
                var coinPriceUSD = +coinInfo["price_usd"];
                var coinPriceBTC = +coinInfo["price_btc"];
                item.price = coinPriceUSD;
                item.price_btc = coinPriceBTC;
                item.total = item.amount * coinPriceUSD;
                item.total_btc = item.amount * coinPriceBTC;
            }
            else {
                item.price = 0;
                item.total = 0;
                item.price_btc = 0;
                item.total_btc = 0;
            }
            return item;
        });

        var view = new Vue({
            el: '#app',
            data: {
                'portfolio': portfolio,
                'total': portfolio.reduce(function(memo, item){
                    return memo + item.total;
                }, 0),
                'total_btc': portfolio.reduce(function(memo, item){
                    return memo + item.total_btc;
                }, 0)
            }
        });
    }
    
    //var portfolio = CryptoPortfolio("test");
    var portfolio = CryptoPortfolio("file");

    app = new CryptoBalanceTracker();
    app.init().then(Main);
})()
