(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[706],{3706:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"center-col default-clock",attrs:{"data-test":"default-clock"}},[s("div",{staticClass:"time",attrs:{"data-test":"default-clock-time"}},[t._v(t._s(t.date.getTimeString()))])])};a._withStripped=!0;const i={name:"DefaultClock",mixins:[s(1940).Z],bb:()=>({date:m.models.date}),created(){this.$e.listenTo(m.models.customization,"change:hour12clock",this.updateTime)},destroyed(){this.$e.stopListening(m.models.customization,"change:hour12clock",this.updateTime)},methods:{updateTime(){this.date.set("date",m.date())}}};var o=(0,s(1900).Z)(i,a,[],!1,null,null,null);o.options.__file="source/addins-vue/clock/DefaultClock.vue";const c=o.exports}}]);
//# sourceMappingURL=706.js.map