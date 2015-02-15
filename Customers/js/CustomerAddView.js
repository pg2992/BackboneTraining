var CustomerApp = CustomerApp ||{};

(function () {
	
	CustomerApp.CustomerAddView = Backbone.View.extend({

		el : "#AddView",
		initialize : function(){
			this.render();
			this.cusName = $('.cusName',this.$el);
			this.age = $('.age',this.$el);
			this.city = $('.city',this.$el);
			
		},

		render : function(){
			this.$el.html($("#AddViewTemplate").html());
		},

		events : {
			'click .addBtn' : 'addCustomer'
		},

		addCustomer : function(){
			var _this = this;
			CustomerApp.Customers.create(_this.fetchCustomer());
			this.render();
		},

		fetchCustomer : function(){
			console.log(this);
			var cname = this.cusName.val();
			var cage = this.age.val();
			var ccity = this.city.val();
			var kk = {
				Name : cname,
				Age : cage,
				City : ccity,
			};

			return kk;
		}


	});


}());