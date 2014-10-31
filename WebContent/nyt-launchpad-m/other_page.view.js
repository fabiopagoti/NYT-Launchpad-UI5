sap.ui.jsview("nyt-launchpad-m.other_page", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf nyt-launchpad-m.other_page
	 */
	getControllerName : function() {
		return "nyt-launchpad-m.other_page";
	},

	createContent : function(oController) {

		var page =  new sap.m.Page("second", {
			title : "Article Search",
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.ui.commons.TextView({
					text: "Hi there! Welcome to the other view!!",
				}),
		
			],
		});

		return page;
	}

});

