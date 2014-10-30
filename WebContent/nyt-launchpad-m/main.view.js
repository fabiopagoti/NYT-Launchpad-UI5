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
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			
//			 sap.m.PageBackgroundDesign.List
//			 sap.m.PageBackgroundDesign.Solid
//			 sap.m.PageBackgroundDesign.Transparent

			content : [

				new sap.m.TileContainer("tile_container", {
				height: "100%",
				width: "100%",
				// editable: true,
				allowAdd: true,
				tiles : [

				new sap.m.StandardTile("tile_article", {
					title : "{i18n>Tile_Title_Article_Search}",
					info : "{i18n>Tile_Info_Article_Search}",
					numberUnit: "{i18n>Tile_NumberUnit_Article_Search}",
					number: "{/articles/hits}",
					icon: "icons/document.png",
					iconDensityAware: false,
					removable: false,
					//activeIcon: "icons/increase.png",
					// type: sap.m.StandardTileType.Monitor,
					// type: sap.m.StandardTileType.Create,
				}),

				new sap.m.StandardTile("tile_best_seller", {
					title : "{i18n>Tile_Title_Best_Seller}",
					info : "{i18n>Tile_Info_Best_Seller}",
					numberUnit : "{i18n>Tile_NumberUnit_Best_Seller}",
					number: "{/best_sellers/hits}",
					icon: "icons/increase.png",
					removable : false,
				}),

				new sap.m.StandardTile("tile_campaign_finance", {
					title : "{i18n>Tile_Title_Campaign_Finance}",
					info : "{i18n>Tile_Info_Campaign_Finance}",
					numberUnit : "{i18n>Tile_NumberUnit_Campaign_Finance}",
					number: "{/campaign_finance/hits}",
					icon: "icons/money.png"
				// infoState: sap.ui.core.ValueState.Success,
				// sap.ui.core.ValueState.Error
				// sap.ui.core.ValueState.None
				// sap.ui.core.ValueState.Success
				// sap.ui.core.ValueState.Warning
				}),

				new sap.m.StandardTile("tile_community", {
					title : "{i18n>Tile_Title_Community}",
					info : "{i18n>Tile_Info_Community}",
					numberUnit : "{i18n>Tile_NumberUnit_Community}",
					number: "{/community/hits}",
					icon: "icons/new_page.png"
				}),

				new sap.m.StandardTile("tile_congress", {
					title : "{i18n>Tile_Title_Congress}",
					info : "{i18n>Tile_Info_Congress}",
					numberUnit : "{i18n>Tile_NumberUnit_Congress}",
					number: "{/congress/hits}",
					icon: "icons/document.png"
				}),

				new sap.m.StandardTile("tile_districts", {
					title : "{i18n>Tile_Title_Districts}",
					info : "{i18n>Tile_Info_Districts}",
					numberUnit : "{i18n>Tile_NumberUnit_Districts}",
					number: "{/districts/hits}",
					icon: "icons/card.png"
				}),

				new sap.m.StandardTile("tile_event", {
					title : "{i18n>Tile_Title_Event_Listings}",
					info : "{i18n>Tile_Info_Event_Listings}",
					numberUnit : "{i18n>Tile_NumberUnit_Event_Listings}",
					number: "{/event_listings/hits}",
					icon: "icons/pie_chart.png"
				}),

				new sap.m.StandardTile("tile_geographic", {
					title : "{i18n>Tile_Title_Geographic}",
					info : "{i18n>Tile_Info_Geographic}",
					numberUnit : "{i18n>Tile_NumberUnit_Geographic}",
					number: "{/geographic/hits}",
					icon: "icons/money.png"
				}),

				new sap.m.StandardTile("tile_most_popular", {
					title : "{i18n>Tile_Title_Most_Popular}",
					info : "{i18n>Tile_Info_Most_Popular}",
					numberUnit : "{i18n>Tile_NumberUnit_Most_Popular}",
					number: "{/most_popular/hits}",
					icon: "icons/increase.png"
				}),

				new sap.m.StandardTile("tile_movie_reviews", {
					title : "{i18n>Tile_Title_Movie_Reviews}",
					info : "{i18n>Tile_Info_Movie_Reviews}",
					numberUnit : "{i18n>Tile_NumberUnit_Movie_Reviews}",
					number: "{/movie_reviews/hits}",
					icon: "icons/document.png"
				}),

				new sap.m.StandardTile("tile_real_estate", {
					title : "{i18n>Tile_Title_Real_Estate}",
					info : "{i18n>Tile_Info_Real_Estate}",
					numberUnit : "{i18n>Tile_NumberUnit_Real_Estate}",
					number: "{/real_estate/hits}",
					icon: "icons/increase.png"
				}),

				new sap.m.StandardTile("tile_semantic", {
					title : "{i18n>Tile_Title_Semantic}",
					info : "{i18n>Tile_Info_Semantic}",
					numberUnit : "{i18n>Tile_NumberUnit_Semantic}",
					number: "{/semantic/hits}",
					icon: "icons/card.png"
				}),

				new sap.m.StandardTile("tile_newswire", {
					title : "{i18n>Tile_Title_Newswire}",
					info : "{i18n>Tile_Info_Newswire}",
					numberUnit : "{i18n>Tile_NumberUnit_Newswire}",
					number: "{/newswire/hits}",
					icon: "icons/pie_chart.png"
				}),

				new sap.m.StandardTile("tile_timestags", {
					title : "{i18n>Tile_Title_Tags}",
					info : "{i18n>Tile_Info_Tags}",
					numberUnit : "{i18n>Tile_NumberUnit_Tags}",
					number: "{/tags/hits}",
					icon: "icons/document.png"
				}), ]

			})
	
			]
		});
		
		page.setEnableScrolling(false); // give a fixed height, so the TileContainer can use 100% height
		return page;
	}

});
