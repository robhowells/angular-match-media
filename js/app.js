(function() { 
	var app = angular.module('matchMediaApp', ['matchmedia-ng']);

	app.config(['matchmediaProvider', function (matchmediaProvider) {
		matchmediaProvider.rules.phone = "(max-width: 759px)";
		matchmediaProvider.rules.tablet = "(min-width: 760px) and (max-width: 768px)";
		matchmediaProvider.rules.desktop = "(min-width: 1024px)";
	}]);

	app.controller('MatchMediaController', ['matchmedia', function (matchmedia) {
		var self = this,
			device = {};

		device['phone'] = matchmedia.onPhone(function(mediaQueryList) {
			self.isPhone = mediaQueryList.matches;
		});
		device['tablet'] = matchmedia.onTablet( function(mediaQueryList) {
			self.isTablet = mediaQueryList.matches;
		});
		device['desktop'] = matchmedia.onDesktop( function(mediaQueryList) {
			self.isDesktop = mediaQueryList.matches;
		});
		device['smDesktop'] = matchmedia.on('(min-width: 769px) and (max-width: 1023px)', function(mediaQueryList) {
			self.isSmDesktop = mediaQueryList.matches;
		});

  	}]);

})();
