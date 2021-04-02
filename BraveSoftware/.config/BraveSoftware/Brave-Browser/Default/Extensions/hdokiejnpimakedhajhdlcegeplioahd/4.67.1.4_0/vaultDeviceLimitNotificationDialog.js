var VaultDeviceLimitNotificationDialog=function(e){Dialog.call(this,e,{dynamicHeight:!0,buttonsInsideContent:!1,closeButtonEnabled:!1,hidePreviousDialogs:!0,hideHeader:!0,hideButtons:!0,overlayDialog:!0})};VaultDeviceLimitNotificationDialog.prototype=Object.create(Dialog.prototype),(VaultDeviceLimitNotificationDialog.prototype.constructor=VaultDeviceLimitNotificationDialog).prototype.initialize=function(e){Dialog.prototype.initialize.apply(this,arguments),function(t){var e=864e5,i=15*e,a=30*e,s=bg.get("g_device_limit_releaseTS"),o=new Date,n=$("#moreThan15Days"),l=$("#moreThan15dDysTitle"),r=$("#moreThan15DaysImg"),c=document.getElementById("moreThan15DaysText1"),g=document.getElementById("moreThan15DaysText2"),m=document.getElementById("moreThan15DaysText3"),u=$("#lessThan15Days"),d=$("#lessThan15DaysTitle"),p=$("#lessThan15DaysImg"),y=document.getElementById("lessThan15DaysText1"),D=bg.get("g_uid")+"_deviceLimitNotificationData";function h(e){bg.localStorage_setItem(D,JSON.stringify({lastShown:(new Date).getTime()})),bg.setDeviceLimitNotification(!1),t.close(!0),bg.sendLpImprove("ipm_dismissed",{"Message Title":e,"Message CampaignId":"Multi-Device Paywall",Source:"Vault Pop Up"})}function v(e){bg.localStorage_setItem(D,JSON.stringify({lastShown:(new Date).getTime()})),bg.setDeviceLimitNotification(!1),t.close(!0),LPPlatform.openURL("https://www.lastpass.com/buy-premium?cp=LPP2021-DT-25IP"),bg.sendLpImprove("ipm_engage",{"Message Title":e,"Message CampaignId":"Multi-Device Paywall",Source:"Vault Pop Up"})}n.hide(),u.hide();var b=$("#moreThan15DaysUpgradeBtn"),T=$("#lessThan15DaysUpgradeBtn"),S=$("#moreThan15DaysDismissBtn"),L=$("#moreThan15DaysClose"),f=$("#lessThan15DaysClose");o<s-a||s-a<=o&&o<s-i?(t.$element.addClass("moreThan15Days"),l.text(Strings.translateString("Important changes to LastPass Free")),r.attr("src","images/vault_4.0/multi_device_notification/device_types.svg"),c.innerHTML=Strings.translateString("Starting %sMarch 16, 2021%s, we're making some important changes to LastPass.","<b>","</b>"),g.innerHTML=Strings.translateString("As a Free user, you'll only be able to use LastPass on %sone type of device%s (either computers or mobile devices).","<b>","</b>"),m.innerHTML=Strings.translateString("To continue using LastPass everywhere, upgrade to Premium now at a %s25%% discount.%s","<b>","</b>"),n.show(),bg.setDeviceLimitNotification(!0),b.click(function(){v("First Notice")}),L.click(function(){h("First Notice")}),S.click(function(){h("First Notice")}),bg.sendLpImprove("ipm_shown",{"Message Title":"First Notice","Message CampaignId":"Multi-Device Paywall",Source:"Vault Pop Up"})):s-i<=o&&o<s-e?(u.show(),t.$element.addClass("lessThan15Days"),d.text(Strings.translateString("Grab your 25% discount today!")),p.attr("src","images/vault_4.0/multi_device_notification/illustration_yellow.svg"),y.innerHTML=Strings.translateString("Starting %sMarch 16, 2021%s, you'll only be able to use LastPass Free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.","<b>","</b>","<b>","</b>"),bg.setDeviceLimitNotification(!0),T.click(function(){v("Second Notice")}),f.click(function(){h("Second Notice")}),bg.sendLpImprove("ipm_shown",{"Message Title":"Second Notice","Message CampaignId":"Multi-Device Paywall",Source:"Vault Pop Up"})):s-e<=o&&o<s&&(u.show(),t.$element.addClass("lessThan15Days"),d.text(Strings.translateString("Grab your 25% discount today!")),p.attr("src","images/vault_4.0/multi_device_notification/illustration_red.svg"),y.innerHTML=Strings.translateString("Starting %stomorrow%s you'll only be able to use LastPass Free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.","<b>","</b>","<b>","</b>"),bg.setDeviceLimitNotification(!0),T.click(function(){v("Final Notice")}),f.click(function(){h("Final Notice")}),bg.sendLpImprove("ipm_shown",{"Message Title":"Final Notice","Message CampaignId":"Multi-Device Paywall",Source:"Vault Pop Up"}))}(this)};