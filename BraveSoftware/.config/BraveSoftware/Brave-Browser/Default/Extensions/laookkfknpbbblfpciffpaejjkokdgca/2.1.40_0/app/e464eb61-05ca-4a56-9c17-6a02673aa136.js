var fn_addin=function(n,o,t){var s=s||{};s.styles=s.styles||{},s.commands=s.commands||{},s.dependencies=t||s.dependencies||{},s.styles.style=function(){},s.views=s.views||{},s.collect=s.collect||{},s.models=s.models||{},s.templates=s.templates||{},s.info={addin:"e464eb61-05ca-4a56-9c17-6a02673aa136",id:"settings_bookmarks",dependencies:["settings"],commands:["settings.panels.bookmarks"]},n.console.log(n.elapsed()+": "+s.info.id+" started"),s.templates=s.templates||{},s.templates.main=Handlebars.template({1:function(t,s,a,e){var n,o,i,l=s.helperMissing,p="function",g='\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="">\n\t\t\t<span class="toggle-options">\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="links" data-test="show-tab-links">Links</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="bookmarks" data-test="show-tab-bookmarks">Bookmarks</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="dash">Dash</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="none">None</span>\n\t\t\t</span>\n\t\t\t<span class="setting-name">Show '+this.escapeExpression(typeof(o=null!=(o=s.browserName||(null!=t?t.browserName:t))?o:l)==p?o.call(t,{name:"browserName",hash:{},data:e}):o)+" Tab in</span>\n\t\t</li>\n";return o=null!=(o=s.isChrome||(null!=t?t.isChrome:t))?o:l,i={name:"isChrome",hash:{},fn:this.program(2,e,0),inverse:this.noop,data:e},n=typeof o==p?o.call(t,i):o,s.isChrome||(n=s.blockHelperMissing.call(t,n,i)),null!=n&&(g+=n),g},2:function(t,s,a,e){return'\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="">\n\t\t\t\t<span class="toggle-options">\n\t\t\t\t\t<span class="toggle-option special-link-option" data-link="appsLocation" data-place="links" data-test="show-apps-links">Links</span>\n\t\t\t\t\t<span class="toggle-divider ">|</span>\n\t\t\t\t\t<span class="toggle-option special-link-option" data-link="appsLocation" data-place="bookmarks" data-test="show-apps-bookmarks">Bookmarks</span>\n\t\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t\t<span class="toggle-option special-link-option"  data-link="appsLocation" data-place="dash">Dash</span>\n\t\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t\t<span class="toggle-option special-link-option"  data-link="appsLocation" data-place="none">None</span>\n\t\t\t\t</span>\n\t\t\t\t<span class="setting-name">Show Apps in</span>\n\t\t\t</li>\n'},4:function(t,s,a,e){return'\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeBookmarks" data-test="toggle-show-manager">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Bookmarks Manager</span>\n\t\t</li>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,s,a,e){var n,o,i,l=s.helperMissing,p="function",g=s.blockHelperMissing,c='<h3>Links & Bookmarks Bar</h3>\n<p class="description">Quick access to your favorite links</p>\n\n<div data-test="settings-links">\n\t<ul class="settings-list options-list" style="padding-top: 10px;">\n';return o=null!=(o=s.isChromium||(null!=t?t.isChromium:t))?o:l,i={name:"isChromium",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e},n=typeof o==p?o.call(t,i):o,s.isChromium||(n=g.call(t,n,i)),null!=n&&(c+=n),c+='\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="openInNewTab" data-test="open-link-new-tab-toggle">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Open links in new tab</span>\n\t\t</li>\n\t</ul>\n\n\n\t<h4>Links</h4>\n\t<ul class="settings-list options-list">\n\t\t<li class="slide-toggle has-toggle on stay-open" data-option="linksKeepOpen">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t</li>\n\t</ul>\n\n\n\t<h4>Bookmarks Bar</h4>\n\t<ul class="settings-list options-list" data-test="bookmarks-options">\n\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="iconsOnly" data-test="toggle-icons-only">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Icons only</span>\n\t\t\t<span class="option-message">Hide titles for a clean and compact look</span>\n\t\t</li>\n\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="defaultMostVisited" data-test="toggle-start-most-visited">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Start in Top Sites</span>\n\t\t\t<span class="option-message">Show most visited websites by default in Bookmarks Bar</span>\n\t\t</li>\n\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeMostVisited" data-test="toggle-show-most-visited">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Top Sites</span>\n\t\t\t<span class="option-message">Add a folder with most visited websites to Bookmarks Bar</span>\n\t\t</li>\n',o=null!=(o=s.isChrome||(null!=t?t.isChrome:t))?o:l,i={name:"isChrome",hash:{},fn:this.program(4,e,0),inverse:this.noop,data:e},n=typeof o==p?o.call(t,i):o,s.isChrome||(n=g.call(t,n,i)),null!=n&&(c+=n),c+'\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeOtherBookmarks" data-test="toggle-show-other">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Other Bookmarks</span>\n\t\t</li>\n\t</ul>\n</div>\n\n'},useData:!0}),s.styles=s.styles||{},s.styles.style=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML="",document.getElementsByTagName("head")[0].appendChild(t)};var a=s.dependencies.settings;return s.views.Main=a.views.SettingsPanel.extend({attributes:{id:"settings-bookmarks",class:"settings-view settings-bookmarks"},template:s.templates.main,panelid:"bookmarks-panel",panelTitle:"Link Settings",events:{"click .special-link-option":"toggleSpecialLinks","click .bookmark-option":"toggleOption","click .bookmarks-enable":"enableBookmarks","click .links-enable":"enableLinks","click .stay-open":"toggleStayOpen"},initialize:function(){n.sendEvent(this.panelTitle,"Panel Opened")},render:function(){this.chrome=n.utils.isChrome(),this.$el.html(this.template(this));var t=this;return this.$el.css("opacity",0),setTimeout(function(){t.updateView()},5),setTimeout(function(){t.$el.css("opacity",1)},100),this},updateView:function(){var s=n.models.bookmarksSettings;this.$(".bookmark-option").each(function(){var t=o(this);t.toggleClass("on",s.get([t.attr("data-option")]))}),this.$el.find('[data-link="chromeTabLocation"]').each(function(){var t=o(this);t.toggleClass("active",s.get("chromeTabLocation")==t.attr("data-place"))}),this.$el.find('[data-link="appsLocation"]').each(function(){var t=o(this);t.toggleClass("active",s.get("appsLocation")==t.attr("data-place"))}),this.$el.find(".bookmarks-enable").toggleClass("on",n.models.customization.get("bookmarksVisible")),this.$el.find(".links-enable").toggleClass("on",n.models.customization.get("linksVisible")),this.$el.find(".stay-open").toggleClass("on",n.models.customization.get("linksKeepOpen")),this.$el.find(".bookmarks-settings").toggleClass("active",s.get("enabled"))},toggleOption:function(t){t&&(t.stopPropagation(),t.preventDefault());var s=o(t.delegatedTarget).attr("data-option"),a=n.models.bookmarksSettings,e=!a.get(s);a.set(s,e),o(t.delegatedTarget).toggleClass("on",e),"defaultMostVisited"===s?a.optionsChanged("mostVisitedVisible",e):a.optionsChanged()},toggleSpecialLinks:function(t){t&&(t.stopPropagation(),t.preventDefault());var s=o(t.delegatedTarget).attr("data-link"),a=o(t.delegatedTarget).attr("data-place"),e=n.models.bookmarksSettings;e.set(s,a),this.$el.find('[data-link="'+s+'"]').removeClass("active"),o(t.delegatedTarget).addClass("active"),e.optionsChanged()},enableBookmarks:function(t){t&&(t.stopPropagation(),t.preventDefault()),n.commandManager.execute("settings.enableBookmarks",{callback:function(){o(t.delegatedTarget).toggleClass("on",n.models.customization.get("bookmarksVisible"))}})},enableLinks:function(t){t&&(t.stopPropagation(),t.preventDefault()),n.models.customization.save("linksVisible",!n.models.customization.get("linksVisible")),o(t.delegatedTarget).toggleClass("on",n.models.customization.get("linksVisible"))},toggleStayOpen:function(t){t&&(t.stopPropagation(),t.preventDefault()),n.models.customization.save("linksKeepOpen",!n.models.customization.get("linksKeepOpen")),o(t.delegatedTarget).toggleClass("on",n.models.customization.get("linksKeepOpen"))}}),n.commandManager&&n.commandManager.registerCommand("settings.panels.bookmarks",function(){return s.styleLoaded||(s.styleLoaded=!0,s.styles.style()),new s.views.Main}),s};m.addinManager&&m.addinManager.registerAddinFn("e464eb61-05ca-4a56-9c17-6a02673aa136",fn_addin);