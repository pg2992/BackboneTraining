var CustomerApp = CustomerApp ||{};

(function() {
	
	CustomerApp.CustomerModel = Backbone.Model.extend({
		defaults:{
			Name:'',
			Age:18,
			City: "Pune"
		}
	});

})();