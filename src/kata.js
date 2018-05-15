let ChangeMaker = function(coinDenominations){

	let _coinDenominations = coinDenominations.sort(function(a,b){return b>a});

	let Calculate_Change_For_Fn = function(tenderedAmount, purchaseAmount){
    let result = [];
    
		if(tenderedAmount == purchaseAmount){
			return result;
		}
		
		let changeToBeGivenInCents = (tenderedAmount - purchaseAmount).toFixed(2)*100;
		
		_coinDenominations.forEach(coin => {
			while(coin <= changeToBeGivenInCents){
				result.push(coin);
				changeToBeGivenInCents -= coin; 
			}
		});

		return result;
	};

	return {
		Calculate_Change_For : Calculate_Change_For_Fn
	}
}