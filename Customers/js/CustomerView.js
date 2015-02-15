var CustomerApp = CustomerApp ||{};


(function(){

	CustomerApp.CustomerView = Backbone.View.extend({
		tagName : 'div',

		

		templateName : "CustomerDetailsTemplate",

		getTemplate : function () {
			return Handlebars.compile($("#"+this.templateName).html());
		},

		initialize:function(){
			this.listenTo(this.model,'destroy',this.remove);
			this.render();
		},

		events:{
				'click .editBtn' : 'edit',
				'click .deleteBtn' : 'deleteCustomer',
				'click .cancelBtn' : 'cancel',
				'click .saveBtn' : 'save'
		},

		render : function(){
			if (this.model.changed.id !== undefined) {
	                return;
	        }

	        this.$el.html(this.getTemplate()(this.model.toJSON()));
	        return this;
		},

		edit :function(){
			this.templateName = "CustomerEditDetailsTemplate";
			this.render();
		},

		cancel : function(){
			this.templateName = "CustomerDetailsTemplate";
			this.render();	
		},
		deleteCustomer : function(){
			this.model.destroy();
		},
		save : function(){
			var name = $('.editName',this.$el).val();
			var age = $('.editAge',this.$el).val();
			var city = $('.editCity',this.$el).val();

			this.model.set({Name:name,Age:age,City:city});
			this.model.save();
			this.templateName = "CustomerDetailsTemplate";
			this.render();		
		}



	})


}());