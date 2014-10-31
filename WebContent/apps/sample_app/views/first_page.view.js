sap.ui.jsview("views.first_page", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf views.first_page
	 */
	getControllerName : function() {
		return "views.first_page";
	},

	createContent : function(oController) {
		console.log("inside view");

		var page =  new sap.m.Page("app_sample_app", {
			title : "Sample App",
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.ui.commons.TextView({
					text: "Hi there! Welcome to a sample app!!",
				}),
		
			],
		});

		return page;

	}

});

