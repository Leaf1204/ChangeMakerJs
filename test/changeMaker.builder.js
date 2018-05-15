/* NOTE : A builder used to construct the SUT in the test.
 * This way I avoid using onBefore and having to navigate around the file to build all context
 * required to understand the test.
 * 
 * This is because I believe each test must read like a short story, no jumping around to find 
 * hidden elements of the story. 
 * 
 * Who would read a book where the pages where not sequential and required you 
 * to skip around to understand the story?! No one so why do it with code!
 */
function ChangeMakerBuilder(){
	let self = this;
	self.coinDenominations = [];

	self.With_Norwegain_Krone = function(){
		self.coinDenominations = [1,5,10,20];
		return self;
	}

	self.With_US_Dollar = function(){
		self.coinDenominations = [1,5,10,25];
		return self;
	}

	self.With_British_Pound = function(){
		self.coinDenominations = [1,2,5,10,20,50];
		return self;
	}

	self.Build = function(){
		return new ChangeMaker(self.coinDenominations);
	}

	self.Build_Fluent = function(){
		return new FluentChangeMaker(self.coinDenominations);
	}
}