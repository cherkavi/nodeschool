var coins = {};
coins['p'] = 1;
coins['n'] = 5;
coins['d'] = 10;
coins['q'] = 25;

var values = [];
values.push({key:25, coin : 'q'});
values.push({key:10, coin : 'd'});
values.push({key:5, coin : 'n'});
values.push({key:1, coin : 'p'});

module.exports = {

  getAmount: function(coinType) {
    var returnValue = coins[coinType];

    if(returnValue == undefined)
      throw new Error('Unrecognized coin ' + coinType);

    return returnValue;
  },

  convertToChange: function(cents){
    var rest = cents;
    var returnValue = [];
    for( var index=0; index<values.length; index++){
      while(rest>=values[index].key){
        rest = rest - values[index].key;
        returnValue.push(values[index].coin);
      }
    }
    return returnValue;
  }

};
