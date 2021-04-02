var fn_addin=function(r,t,e){var n=n||{};n.styles=n.styles||{},n.commands=n.commands||{},n.dependencies=e||n.dependencies||{},n.styles.style=function(){},n.views=n.views||{},n.collect=n.collect||{},n.models=n.models||{},n.templates=n.templates||{},n.info={widget:!0,placeholderType:"metric",id:"countdown",class:"app-container base-metric metric countdown",region:"top-right",order:"append",addin:"fb230b62-96ce-44b5-87c5-4a563553038b",requiredFeature:"countdown",visibleSetting:"countdownVisible",dependencies:["base_metric"]},r.console.log(r.elapsed()+": "+n.info.id+" started"),n.styles=n.styles||{},n.styles.style=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML=".countdown{order:4}.countdown .app{padding:0}.countdown .hour-punctuation{margin-right:-2px}.countdown .option-cancel{padding:5px 6px;display:inline-block;font-size:81.25%;opacity:.45;transition:all .1s var(--a-curve)}.countdown .option-cancel:hover{cursor:pointer;opacity:.8}.countdown .option-wrapper.add-time{margin-bottom:15px}.countdown-year-group,.countdown-year-other{width:3.75em!important}.Firefox .countdown-year-group{width:4em!important}.Firefox .countdown-year-other{width:3em!important}.countdown-year-other-group{margin-bottom:0!important;display:none}.show-other .countdown-year-group{display:none}.countdown-year-other,.show-other .countdown-year-other-group{display:inline-block}",document.getElementsByTagName("head")[0].appendChild(t)},n.collect.Countdowns=r.collect.SyncedCollection.extend({initialize:function(t,e){(e=e||{}).name="countdown",this.accountSitePath="countdowns",e.sorted=!0,e.transientProps=["random","selected","past"],e.model=n.models.Countdown,r.collect.SyncedCollection.prototype.initialize.call(this,t,e)},findPinned:function(){return this.filter(function(t){return!t.get("deleted")&&!t.get("archived")&&t.get("pinned")})},activeItems:function(){var t=this.models.filter(function(t){return!t.get("deleted")}),e=t;try{e=t.sort(function(t,e){return t.get("pinned")&&!e.get("pinned")?-1:!t.get("pinned")&&e.get("pinned")?1:t.get("utcDate")-e.get("utcDate")})}catch(t){}return e},supportEditTeamWidgets:function(){var t=r.models.teamInfo.get("team");return t&&t.userIsAdmin}}),n.models.Countdown=Backbone.Model.extend({placeholder:"Countdown",nowString:"Now",todayString:"Today",defaults:function(){return{name:"",pinned:!1,utcDate:r.now(),hasHours:!1,past:!1,deleted:!1,archived:!1,serverSetId:!1,selected:!1,random:!1}},initialize:function(t){o.models.BaseMetricModel.prototype.initialize.call(this,t)},mainContent:function(){var t={};return t.name=this.get("name"),t.utcDate=this.get("utcDate"),t},getNameOrPlaceholder:function(){return this.get("name")||this.placeholder},getDetailViewVariables:function(){return{years:this.years,placeholder:this.placeholder}},getViewData:function(){var t=this.formatTime(),e=r.date().getFullYear();this.lastSelectedYear=e,this.years=[];for(var n=e;n<e+5;n++)this.years.push(n);return{id:this.get("id"),pinned:this.get("pinned"),date:new Date(this.get("utcDate")),tooltip:this.generateDateTooltip(),metricType:"Countdown",time:t.number,unit:t.unit,nameOrPlaceholder:this.getNameOrPlaceholder(),placeholder:this.placeholder,years:this.years,archived:this.get("archived"),random:!1}},generateDateTooltip:function(){var t=new Date(this.get("utcDate")),e=r.utils.getFriendlyDate(t);return this.get("hasHours")&&(e+=" "+r.utils.getHoursMinsStr(t)),e},formatTime:function(){var t,e=r.date(),n=new Date(this.get("utcDate")),o=this.calculateTimeLeft(e,n),i=this.get("hasHours"),a="";return o.past!==this.get("past")&&this.save("past",o.past,{silent:!0}),a=i&&o.minsTot<r.utils.mConst("dateMinsPerHour")?(t=0===o.minsTot?this.nowString:o.minsTot,"m"):i&&o.hoursTot<r.utils.mConst("dateHoursPerDay")?(t=o.hoursTot,"h"):(t=i||0!==o.nights?o.nights:this.todayString,"d"),o.past&&(a+=" ago"),t!==this.nowString&&t!==this.todayString||(a=""),{number:t,unit:a,timeData:o}},calculateTimeLeft:function(t,e){var n=(e-t)/r.utils.mConst("dateMsPerMin"),o=n/r.utils.mConst("dateMinsPerHour"),i=r.utils.nightsBetween(t,e,r.utils.mConst("dateRolloverHour")),a=n<0;return{nights:Math.abs(i),hoursTot:Math.abs(Math.round(o)),minsTot:Math.abs(Math.round(n)),past:a}},togglePinned:function(){this.save("pinned",!this.get("pinned"))},toggleArchive:function(){this.save("archived",!this.get("archived"))},delete:function(){this.save("deleted",!0)}}),n.models.CountdownManager=Backbone.Model.extend({initialize:function(){n.collect.countdowns=this.collection=new n.collect.Countdowns,this.collection.fetch({reset:!0})}});var o=n.dependencies.base_metric;return o.info=n.info,n.models.countdownManager=new n.models.CountdownManager,n.styles.style(),n.views.countdown=r.widgetManager.handover("countdown",o.views.BaseMetric,{model:n.models.countdown,region:"top-right",order:"append",metricType:"Countdown",metricTitle:"Countdowns",metricIcon:"icon-countdowns.svg",visibleSetting:"countdownVisible",defaultShowRandomState:!0,metricDescription:"Count down the days until an important date",manager:n.models.countdownManager,detailViewAddin:"countdown_detail",updateInterval:"onWholeMinute"}),r.widgets.push(n.views.countdown),n};m.addinManager&&m.addinManager.registerAddinFn("fb230b62-96ce-44b5-87c5-4a563553038b",fn_addin);