var CustomerApp = CustomerApp ||{};

(function(){

	CustomerApp.CustomerCollection = Backbone.Collection.extend({
		model : CustomerApp.CustomerModel,

		localStorage : new Backbone.LocalStorage("Customers")

	});

	CustomerApp.Customers = new CustomerApp.CustomerCollection();
}());