webpackJsonp([15],{"5tup":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("/7Ts"),i=o("Cm93"),r=o("FrZg"),n=o("mMUV");a.Module.instance().config(["$routeProvider","PROFILE_REGEX","PROFILE_PATH",function(e,t,a){"ngInject";var l=function(e){return{workbookDetailsModel:["workbookFactoryService","sharedProfileUxStateService","$location","$route","$rootScope","$window",function(o,i,l,s,c,u){var h=location.pathname.match(t);if(!h)throw"location.pathname '"+location.pathname+"' does not match expected format: "+t;var f=function(e){if(i.viewingProfileName=h[1],i.viewingProfileName!==e.profileName){var t=a+"/"+e.profileName+"#!"+l.path();u.location.replace(u.location.origin+t)}return i.viewLoaded=!0,c.metaTag=e.metaTag,e},p=function(){return e?o.getWorkbookDetailsForSharedView(s.current.params.guid).then(f,function(){return i.viewingProfileName=null,l.path(r.PROFILE_404_PATH).replace(),null}):o.getWorkbookDetailsForName(s.current.params.workbook,s.current.params.view).then(f,function(){return i.viewingProfileName=null,l.path(r.PROFILE_404_PATH).replace(),null})};return n.checkAuthStatusWithRefresh().then(p).catch(p)}],profileModel:["sharedProfileUxStateService","modelCacheService",function(e,o){var a=location.pathname.match(t);if(!a)throw"location.pathname '"+location.pathname+"' does not match expected format: "+t;e.viewingProfileName=a[1];var i=function(){return o.getProfileForName(e.viewingProfileName)};return n.checkAuthStatusWithRefresh().then(i).catch(i)}],favoritesModel:["favoritesModelFactory",function(e){return e.getUserFavoritesModel()}],resolveTranslations:i.resolveTranslations}};e.when("/",{template:o("RFJ7"),controller:"profileCtrl",resolve:{favoritesModel:["favoritesModelFactory",function(e){var o=location.pathname.match(t);if(!o)throw"location.pathname '"+location.pathname+"' does not match expected format: "+t;return e.getFavoritesModel(o[1])}],profileModel:["modelCacheService","sharedProfileUxStateService","$location","$rootScope",function(e,o,a,i){var l=location.pathname.match(t);if(!l)throw"location.pathname '"+location.pathname+"' does not match expected format: "+t;if("publish"!==l[1]){var s=function(){return e.getProfileForName(l[1]).then(function(e){return o.viewingProfileName=l[1],o.viewLoaded=!0,o.avatarUrl=e.avatarUrl||e.getGravatarUrl(150),e}).catch(function(){return l=location.pathname.match(t),o.viewingProfileName=null,"publish"===l[1]?a.path("/publish-confirm"):a.path(r.PROFILE_404_PATH).replace(),null})};return n.checkAuthStatusWithRefresh().then(s).catch(s)}a.path("/publish-confirm")}],isFollowingAuthorBoolean:["loginService","sharedProfileUxStateService",function(e,o){var a=location.pathname.match(t);return e.isFollowing(a[1]).then(function(e){o.isFollowingAuthor=e})}],resolveTranslations:i.resolveTranslations}}).when("/publish-confirm",{template:o("eFQ1"),controller:"vizHomeCtrl",resolve:function(){var e=window.location.pathname;if(e&&e.match(/^\/profile\/publish\//i)){var t=e.split("/profile/publish/")[1],o=t.split("/")[0],a=t.split("/")[1];return{workbookDetailsModel:["sharedProfileUxStateService","workbookFactoryService","$rootScope",function(e,t,i){return t.getWorkbookDetailsForName(o,a).then(function(t){return e.viewLoaded=!0,e.showToast=!0,i.metaTag=t.metaTag,t},function(){return null})}],profileModel:["sharedProfileUxStateService","workbookApiService","modelCacheService",function(e,t,a){return t.getWorkbookDetails(o).then(function(t){return e.viewingProfileName=t.profileName,a.getProfileForName(t.profileName)})}],resolveTranslations:i.resolveTranslations}}}()}).when("/vizhome/shared/:guid",{template:o("BKbW"),controller:"vizHomeCtrl",resolve:l(!0)}).when("/vizhome/:workbook/:view",{template:o("BKbW"),controller:"vizHomeCtrl",resolve:l(!1)})}])},"7cRL":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("0Qa9"),i=o("77Dy");o("FwjY");var r=o("UPJH").default("tableau:entrypoints");r("Frontend Bundle entrypoint called");var n=o("MvCg");o("5tup");var l=n.registerPage("profile");a.all([i.angularPromise]).then(function(){r("Frontend dependencies finished setup"),l()})},RFJ7:function(e,t){e.exports='<aside class="l-region-author author-container clearfix"><div class=l-inner><div class=author-info><div ng-include=templateUrls.AUTHOR_INFO></div></div></div></aside><section class=l-region-author-profile><div class=l-inner><uib-tabset active=$scope.activeTab><uib-tab ng-repeat="profileTab in profileTabs" ng-if=profileTab.show() class={{profileTab.classDef}} index=$index data-test-id=viewProfileAuthor-{{profileTab.classDef}}-lower><uib-tab-heading><span translate-string-contents={{profileTab.nameCapitalized}} translate-values=\'{"COUNT": {{profileTab.count()}}}\'></span> <span class=counter ng-bind=profileTab.count()></span></uib-tab-heading><div ng-include=profileTab.templateUrl></div></uib-tab></uib-tabset></div></section>'},eFQ1:function(e,t){e.exports='<section class=l-publish><div class="toast action toast--publish" ng-if="sharedProfileUxStateService.canEdit() && sharedProfileUxStateService.showToast" tabia-transition tt-class=shown tt-delay=750><div class=l-inner><h2 class=toast-header translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_SAVE_COMPLETE_MESSAGE></h2><div class="set edit"><a href="" class="white tile tile--l tile--ui" ng-click="sharedProfileUxStateService.toggleEditMode(); editWorkbook(workbook); scrollTo(\'workbookEditForm\');"><i class=icon-edit-pencil></i> <span translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_EDIT_DETAILS_LINK_DESCRIPTION></span> </a><span class=instruction translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_EDIT_DETAILS_INSTRUCTION_WITH_ATTRIBUTIONS></span></div><a class=toast__close href="" ng-click="sharedProfileUxStateService.showToast = false;" translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_CLOSE_BUTTON_LABEL></a></div></div><div ng-include=templateUrls.VIZHOME></div></section>'}},["7cRL"]);