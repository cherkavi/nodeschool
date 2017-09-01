var balance = 0;

var decreaseBalance = function(amount){
    if(!this.canAfford(amount)){
        throw new Error("Insufficient balance");
    }
    balance -= amount;
};

var getBalance =  function(){
    return balance;
};

var increaseBalance = function(amount){
    balance += amount;
};

var isValidAmount = function(amount){
    var isNull = (amount === null);
    var isUndefined = (amount === undefined);
    console.log(isNull + "   " + isUndefined);
    return !(isNull || isUndefined);
};

var canAfford = function(amount){
    if(!this.isValidAmount(amount)){
        console.log("amount: "+amount);
        throw new Error("Invalid Input:" + amount);
    }
    return amount <= balance;
};


module.exports.decreaseBalance = decreaseBalance;
module.exports.getBalance = getBalance;
module.exports.increaseBalance = increaseBalance;
module.exports.isValidAmount = isValidAmount;
module.exports.canAfford = canAfford;
