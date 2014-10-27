sap.ui.jsview("nyt-launchpad-m.favorites", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf nyt-launchpad-m.favorites
	 */
	getControllerName : function() {
		return "nyt-launchpad-m.favorites";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf nyt-launchpad-m.favorites
	 */
	createContent : function(oController) {
		return new sap.m.Page({
			title : "Title",
			
			content : [ new sap.m.TileContainer("tile_container", {
				width : '50%',
				height : '50%',
				editable : true,
				allowAdd : true,
				tiles : [

				new sap.m.StandardTile("tile_event", {
					title : "Event Listings",
					info : "Get information about hand-picked events in New York City",
				}),

				new sap.m.StandardTile("tile_geographic", {
					title : "Geographic",
					info : "Use linked data to enhance location concepts used in The New York Times' controlled vocabulary.",
				}),

				new sap.m.StandardTile("tile_most_popular", {
					title : "Most Popular",
					info : "Most frequently blog post and articles e-mailed, shared and viewed",
				}),

				]
			})

			]
		});
	}

});