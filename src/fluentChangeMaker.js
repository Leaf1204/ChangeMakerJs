let FluentChangeMaker = function(coinDenominations){

  let _coinDenominations = coinDenominations.sort(function(a,b){return b>a});
  
  let _purchaseAmount = 0;
  let _tenderAmount = 0;

	return {
    With_Purchase_Amount : function(purchaseAmount){
      _purchaseAmount = purchaseAmount;
      return {
        With_Tender_Amount : function(tenderedAmount){
          _tenderedAmount = tenderedAmount;
          return {
            Calculate_Change: function(){
              let result = [];
      
              if(_tenderedAmount == _purchaseAmount){
                return result;
              } 
              
              let changeToBeGivenInCents = (_tenderedAmount - _purchaseAmount).toFixed(2)*100;
              
              _coinDenominations.forEach(coin => {
              while(coin <= changeToBeGivenInCents){
                  result.push(coin);
                  changeToBeGivenInCents -= coin; 
                }
              });
          
              return result;
            }
          }
        }
      }
    }
  }
}