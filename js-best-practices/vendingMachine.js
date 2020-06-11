
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

var insertCoin =  function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
};

var vendProduct = function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
};
var getProducts = function(){
    return productInventory.getProducts();
  };
var releaseChange =  function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
};

module.exports.insertCoin = insertCoin;
module.exports.vendProduct = vendProduct;
module.exports.getProducts = getProducts;
module.exports.releaseChange = releaseChange;

