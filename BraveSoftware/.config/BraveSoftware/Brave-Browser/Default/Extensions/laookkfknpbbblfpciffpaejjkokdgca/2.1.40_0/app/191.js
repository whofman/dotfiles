(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[191],{5191:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container clock center-clock has-3-col has-dash-icon",attrs:{"data-test":"center-clock"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{key:e.activeClock,staticClass:"side-col left"},[o("center-nav",{attrs:{"active-clock":e.activeClock},on:{"switch-clock":e.switchClock}})],1)]),e._v(" "),o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.showDefault?o("div",{key:"default"},[o("default-clock")],1):o("div",{key:"percent"},[o("percent-clock")],1)]),e._v(" "),o("div",{staticClass:"side-col right"},[o("dropdown",{attrs:{"show-dropdown":e.showDropdown},on:{"show-dropdown-change":e.changeShowDropdown},scopedSlots:e._u([{key:"upsell",fn:function(){return[e.showUpsell?o("upsell",e._b({on:{"hide-upsell":function(t){e.showUpsell=!1}}},"upsell",e.percentScheduleUpsellOptions,!1)):e._e()]},proxy:!0}])},[e._v(" "),e.showDefault?o("li",{staticClass:"has-toggle",class:{on:!e.hour12clock},attrs:{"data-test":"hour-format"},on:{click:e.switchBetween12and24hr}},[o("span",{staticClass:"dropdown-list-label"},[e._v("24-hour clock")]),e._v(" "),o("span",{staticClass:"toggle-slider"},[o("svg",{staticClass:"toggle-switch",attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{attrs:{cx:"50",cy:"50",r:"50"}})])])]):o("dropdown-option",{attrs:{name:"Edit Schedule","data-test":"edit-schedule"},nativeOn:{click:function(t){return e.openScheduleSettings(t)}}})],1)],1)],1)};s._withStripped=!0;const c={name:"Clock",components:{DefaultClock:()=>o.e(706).then(o.bind(o,3706)),PercentClock:()=>o.e(98).then(o.bind(o,8098)),Upsell:()=>o.e(107).then(o.bind(o,9107)),Dropdown:()=>o.e(385).then(o.bind(o,9385)),DropdownOption:()=>o.e(672).then(o.bind(o,2672)),CenterNav:()=>o.e(502).then(o.bind(o,2502))},mixins:[o(1940).Z],data:()=>({hour12clock:m.models.customization.get("hour12clock"),showDefault:!m.models.customization.get("percentClock"),showDropdown:!1,showUpsell:!1}),computed:{activeClock(){return this.showDefault?"clock":"percent"}},percentScheduleUpsellOptions:{targetRegion:"center-clock",sourceEvent:"customBalanceMode",buttonText:"Learn more",title:"Balance Mode",description:"Customize your schedule to fit the way you work"},created(){this.$e.listenTo(m.models.customization,"change:percentClock",this.togglePercentClock),this.percentScheduleUpsellOptions=this.$options.percentScheduleUpsellOptions},destroyed(){this.$e.stopListening(m.models.customization,"change:percentClock",this.togglePercentClock)},methods:{switchClock(e){switch(e){case"clock":this.showDefault=!0,m.models.customization.save("percentClock",!1);break;case"percent":this.showDefault=!1,m.models.customization.save("percentClock",!0);break;case"pomodoro":if(!this.$plus)return;this.$emit("pomodoro-show",!0)}this.showDropdown=!1},togglePercentClock(){this.showDefault=!m.models.customization.get("percentClock")},changeShowDropdown(e){this.showDropdown=e},switchBetween12and24hr(){this.hour12clock=!this.hour12clock,m.models.customization.save({hour12clock:this.hour12clock}),m.sendEvent("Clock","Toggle format",this.hour12clock?"12h":"24h")},openScheduleSettings(){this.$plus?(m.commandManager.executeAsync("settings.display",null,{scheduleVisible:!0,section:"balance"}),this.showDropdown=!1,m.sendEvent("Percent Clock","Edit schedule")):this.showUpsell=!0},switchToPomodoro(){this.switchClock("pomodoro")}}};var n=(0,o(1900).Z)(c,s,[],!1,null,null,null);n.options.__file="source/addins-vue/clock/Clock.vue";const l=n.exports}}]);
//# sourceMappingURL=191.js.map