var CustomerApp = CustomerApp ||{};

(function () {
	
	CustomerApp.CustomerListView = Backbone.View.extend({
		el : "#ListView",

		initialize : function(){
			this.listenTo(CustomerApp.Customers,'add',this.addCustomer);
			this.listenTo(CustomerApp.Customers,'reset',this.addAllCustomer);

			CustomerApp.Customers.fetch({reset:true});
		},

		addCustomer : function(customer){
			var view = new CustomerApp.CustomerView({model: customer});
			this.$el.append(view.render().el);
		},
		addAllCustomer : function(){
			this.$el.html("");
			CustomerApp.Customers.each(this.addCustomer,this);
		}

	});

}());