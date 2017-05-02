function Store() {
	this.products = [
		new Product("APL", "Apple", "Eat one every…", 12, 90, 0, 2, 0, 1, 2),
		new Product("AVC", "Avocado", "Guacamole…", 16, 90, 0, 1, 1, 1, 2),
		new Product("BAN", "Banana", "These are…", 4, 120, 0, 2, 1, 2, 2),
		// more products…
		new Product("WML", "Watermelon", "Nothing…", 4, 90, 4, 4, 0, 1, 1)
	];
	
	this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great" ]; 
	this.dvaRange = ["below 5%", "between 5 and 10%", "above 40%"];
	
	Store.prototype.getProduct = function(sku) {
		for(var i = 0; i < this.products.length; i++) {
			if(thos.products[i].sku === sku)
				return this.products[i];
		}
		
		return null;
	}
}