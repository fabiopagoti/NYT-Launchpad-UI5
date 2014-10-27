sap.ui.jsview("nyt-launchpad-m.main", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf nyt-launchpad-m.main
	 */
	getControllerName : function() {
		return "nyt-launchpad-m.main";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf nyt-launchpad-m.main
	 */
	createContent : function(oController) {
		var page =  new sap.m.Page({
			title : "New York Times",
			icon: "icons/nyt_logo_black.png",
			content : [

			new sap.m.TileContainer("tile_container", {
				height: "800px",
				width: "100%",
				tiles : [

				new sap.m.StandardTile("tile_article", {
					title : "Article Search",
					info : "Search Times articles from 1851 to today",
					icon: "icons/document.png",
				// type: sap.m.StandardTileType.Monitor,
				// type: sap.m.StandardTileType.Create,
				}),

				new sap.m.StandardTile("tile_best_seller", {
					title : "Best Seller",
					info : "Get data from all best-seller lists",
//					removable : true,
					icon: "icons/increase.png"
				}),

				new sap.m.StandardTile("tile_campaign_finance", {
					title : "Campaign Finance",
					info : "Get presidential campaign contribution and expenditure data ",
					icon: "icons/money.png"
				// infoState: sap.ui.core.ValueState.Success,
				// sap.ui.core.ValueState.Error
				// sap.ui.core.ValueState.None
				// sap.ui.core.ValueState.Success
				// sap.ui.core.ValueState.Warning
				}),

				new sap.m.StandardTile("tile_community", {
					title : "Community",
					info : "Get comments by NYTimes.com users.",
					icon: "icons/new_page.png"
				}),

				new sap.m.StandardTile("tile_congress", {
					title : "Congress",
					info : "Get U.S. Congressional vote data, including information about specific House and Senate members",
					icon: "icons/document.png"
				}),

				new sap.m.StandardTile("tile_districts", {
					title : "Districts",
					info : "Get political districts based on a pair of coordinates",
					icon: "icons/card.png"
				}),

				new sap.m.StandardTile("tile_event", {
					title : "Event Listings",
					info : "Get information about hand-picked events in New York City",
					icon: "icons/pie_chart.png"
				}),

				new sap.m.StandardTile("tile_geographic", {
					title : "Geographic",
					info : "Use linked data to enhance location concepts used in The New York Times' controlled vocabulary.",
					icon: "icons/money.png"
				}),

				new sap.m.StandardTile("tile_most_popular", {
					title : "Most Popular",
					info : "Most frequently blog post and articles e-mailed, shared and viewed",
					icon: "icons/increase.png"
				}),

				new sap.m.StandardTile("tile_movie_reviews", {
					title : "Movie Reviews",
					info : "Get links to reviews and NYT Critics' Picks, and search movie reviews by keyword",
				}),

				new sap.m.StandardTile("tile_real_estate", {
					title : "Real Estate",
					info : "Real estate listings",
				}),

				new sap.m.StandardTile("tile_semantic", {
					title : "Semantic",
					info : "Access to people,places,organanizations and descriptors",
				}),

				new sap.m.StandardTile("tile_newswire", {
					title : "Newswire",
					info : "Up-to-the-minute stream",
				}),

				new sap.m.StandardTile("tile_timestags", {
					title : "Tags",
					info : "Tagged Terms",
				}), ]

			})

			]
		});
		
		page.setEnableScrolling(true);
		return page;
	}

});