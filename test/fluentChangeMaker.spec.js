describe("ChangeMaker", function () {
	describe("Calculate_Change_For",function(){
		describe("Given no change to return", function(){
			it("Should return zero coins", function() {
				// arrange
				let changeMaker = new ChangeMakerBuilder()
												.With_British_Pound()
												.Build_Fluent();
				const tenderedAmount = 1.00;
				const purchaseAmount = 1.00;
				// act	
				let actual = changeMaker
							 .With_Purchase_Amount(purchaseAmount)
							 .With_Tender_Amount(tenderedAmount)
							 .Calculate_Change();
				// assert
				expect(actual).toEqual([]);
			});
		});
		describe("Given change to return when using Norwegian Krone", function(){
			describe("When change is only made up of one coin", function(){
				[
					{tender:2.00, purchase:1.80, change:[20]},
					{tender:2.50, purchase:2.40, change:[10]},
					{tender:3.00, purchase:2.95, change:[5]},
					{tender:1.00, purchase:0.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						let changeMaker = new ChangeMakerBuilder()
														.With_Norwegain_Krone()
														.Build_Fluent();
						// act
						let actual = changeMaker
									.With_Purchase_Amount(interaction.purchase)
									.With_Tender_Amount(interaction.tender)
									.Calculate_Change();
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					let changeMaker = new ChangeMakerBuilder()
													.With_Norwegain_Krone()
													.Build_Fluent();
					const tenderedAmount = 3.00;
					const purchaseAmount = 2.64;
					// act
					let actual = changeMaker
								.With_Purchase_Amount(purchaseAmount)
								.With_Tender_Amount(tenderedAmount)
								.Calculate_Change();
				// assert
					expect(actual).toEqual([20,10,5,1]);
				});
			});
		});
		describe("Given change to return when using US Dollar", function(){
			describe("When change is only made up of one coin", function(){
				[
					{tender:3.00, purchase:2.75, change:[25]},
					{tender:1.50, purchase:1.40, change:[10]},
					{tender:1.00, purchase:0.95, change:[5]},
					{tender:2.00, purchase:1.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						let changeMaker = new ChangeMakerBuilder()
														.With_US_Dollar()
														.Build_Fluent();
						const tenderedAmount = interaction.tender;
						const purchaseAmount = interaction.purchase;
						// act
						let actual = changeMaker
									.With_Purchase_Amount(interaction.purchase)
									.With_Tender_Amount(interaction.tender)
									.Calculate_Change();
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					let changeMaker = new ChangeMakerBuilder()
													.With_US_Dollar()
													.Build_Fluent();
					const tenderedAmount = 2.00;
					const purchaseAmount = 1.59;
					// act
					let actual = changeMaker
								.With_Purchase_Amount(purchaseAmount)
								.With_Tender_Amount(tenderedAmount)
								.Calculate_Change();
					// assert
					expect(actual).toEqual([25,10,5,1]);
				});
			});
		});
		describe("Given change to return when using British Pound", function(){
			describe("When change is made up of one coin", function(){
				[
					{tender:6.00, purchase:5.50, change:[50]},
					{tender:1.80, purchase:1.60, change:[20]},
					{tender:0.50, purchase:0.40, change:[10]},
					{tender:2.00, purchase:1.95, change:[5]},
					{tender:5.00, purchase:4.98, change:[2]},
					{tender:8.00, purchase:7.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						let changeMaker = new ChangeMakerBuilder()
														.With_British_Pound()
														.Build_Fluent();
						const tenderedAmount = interaction.tender;
						const purchaseAmount = interaction.purchase;
						// act
						let actual = changeMaker
									.With_Purchase_Amount(interaction.purchase)
									.With_Tender_Amount(interaction.tender)
									.Calculate_Change();
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is only made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					let changeMaker = new ChangeMakerBuilder()
													.With_British_Pound()
													.Build_Fluent();
					const tenderedAmount = 3.00;
					const purchaseAmount = 2.12;
					// act
					let actual = changeMaker
								.With_Purchase_Amount(purchaseAmount)
								.With_Tender_Amount(tenderedAmount)
								.Calculate_Change();
					// assert
					expect(actual).toEqual([50,20,10,5,2,1]);
				});
			});
		});
	});
});

