(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[673],{7788:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,s=e[1]||"",n=e[3];if(!n)return s;if(t&&"function"==typeof btoa){var a=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[s].concat(o).concat([a]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var a=this[n][0];null!=a&&(s[a]=!0)}for(n=0;n<e.length;n++){var o=e[n];null!=o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},1673:(e,t,i)=>{"use strict";i.r(t);var s=i(4525),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-base",attrs:{"data-test":"modal-base"}},[i("transition",{attrs:{name:e.transitionName,appear:""},on:{"after-leave":e.afterStepLeave}},[e.stepActive?i(e.activeStep.component||"Popup",e._b({tag:"component",attrs:{"force-active-sub-step-index":e.forceActiveSubStepIndex,plans:e.plans,sales:e.sales},on:{destroy:e.destroyModal,stepComplete:e.handleStepCompletion,subStepComplete:e.handleSubStepCompletion,goToSubStep:e.goToSubStep,beforeSubStepEnter:e.beforeSubStepEnter,afterSubStepLeave:e.afterSubStepLeave,upgrade:e.showUpgrade,skipOnboarding:e.skipOnboarding,targetElementMissing:e.handleElementMissingError}},"component",e.activeStep,!1)):e._e()],1)],1)};n._withStripped=!0;const a=Backbone.Model.extend({initialize:function(){this.idAttribute=this.collection.idAttribute||"csid"}}),o=m.collect.SyncedCollection.extend({initialize(e){(e=e||{}).name="onboarding",e.model=a,m.collect.SyncedCollection.prototype.initialize.call(this,null,e)},refresh:function(){return new Promise((e=>{this.listenTo(this,"loaded-from-server",(()=>e())),this.fetch({reset:!0})}))}});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"popup nipple",class:[e.nippleClass,e.pulseAnimation?"popup-pulse":""],style:e.popupStyles},[i("div",{staticClass:"app"},[i("header",[i("h3",{staticClass:"popup-title"},[e._v(e._s(e.headerText))]),e._v(" "),i("div",{staticClass:"icon-wrapper icon-wrapper-close",on:{click:e.close}},[i("i",[e._v("✕")])])]),e._v(" "),i("div",{staticClass:"popup-body",domProps:{textContent:e._s(e.bodyText)}}),e._v(" "),i("div",{staticClass:"button-row"},[e.hideNext?e._e():i("button",{staticClass:"button next",on:{click:e.completeStep}},[e._v(e._s(e.nextButtonText))]),e._v(" "),e.hideSkip?e._e():i("span",{staticClass:"opt-out"},[e._v("\n\t\t\t\tSee these already? "),i("span",{staticClass:"opt-out-button",on:{click:e.skipOnboarding}},[e._v("Skip")])]),e._v(" "),e.ctaCallback?i("span",{staticClass:"call-to-action button notification-button",class:e.ctaClasses,on:{click:e.clickCta}},[e._v(e._s(e.ctaText))]):e._e(),e._v(" "),e.secondaryCallback?i("span",{staticClass:"secondary",class:e.secondaryClasses,on:{click:e.clickSecondary}},[e._v(e._s(e.secondaryText))]):e._e()])])])};r._withStripped=!0;const p={name:"Popup",customNipplePositionId:"customNipplePosition",props:{id:{type:String,required:!0},targetElementSelector:{type:String,required:!0},position:{type:String,default:"top-right"},headerText:{type:String,default:""},bodyText:{type:String,default:""},ctaText:{type:String,default:"Learn more…"},ctaCallback:{type:Function,default:null},ctaClasses:{type:String,default:""},secondaryText:{type:String,default:""},secondaryCallback:{type:Function,default:null},secondaryClasses:{type:String,default:""},hideCallback:{type:Function,default:null},nextButtonText:{type:String,default:"Next"},windowEdgePadding:{type:Number,default:7},targetDistance:{type:Number,default:0},pulseAnimation:{type:Boolean,default:!0},hideSkip:{type:Boolean,default:!1},hideNext:{type:Boolean,default:!1}},data:()=>({nippleClass:"",popupStyles:{}}),computed:{targetElement(){return document.querySelector(this.targetElementSelector)}},mounted(){this.$e.listenTo(m,"globalEvent:window:resize devPanelToggled",this.handleResize),this.setPosition(),m.sendEvent("Onboarding","Step displayed",this.id)},destroyed(){this.$e.stopListening(m,"globalEvent:window:resize",this.handleResize)},methods:{calculatePosition(e,t){try{const i=()=>S>h-l-this.windowEdgePadding?Math.round(h-S-this.windowEdgePadding)+"px":"",s=()=>h-v<l+this.windowEdgePadding?Math.round(h-v-this.windowEdgePadding)+"px":"",n=e=>e<this.windowEdgePadding?this.windowEdgePadding-e:0,a=e=>`${e}: ${u-d}px`;let o={},r="",p=e.getBoundingClientRect(),l=350,d=0,c=6,u=33,h=window.innerWidth,m=(p.right-p.left)/2+p.left,S=m-u-c,v=h-m-u-c,g=p.bottom+this.targetDistance,b=window.innerHeight-p.top+this.targetDistance;switch(t){case"top-left":d=n(v),d&&(r=a("right")),o={left:"auto",right:v+d+"px",bottom:b+"px","max-width":s()};break;case"top-right":d=n(S),d&&(r=a("left")),o={left:S+d+"px",top:"auto",bottom:b+"px","max-width":i()};break;case"bottom-left":d=n(v),d&&(r=a("right")),o={left:"auto",right:v+d+"px",top:g+"px","max-width":s()};break;case"bottom-right":d=n(S),d&&(r=a("left")),o={left:S+d+"px",top:g+"px","max-width":i()}}return{popupCss:o,nipplePositionOverride:r}}catch(e){return this.$emit("targetElementMissing"),{}}},getNippleClass(){switch(this.position){case"top-left":return"nipple-bottom-right";case"top-right":return"nipple-bottom-left";case"bottom-left":return"nipple-top-right";case"bottom-right":return"nipple-top-left"}},setPosition(){let e=this.calculatePosition(this.targetElement,this.position);this.popupStyles=e.popupCss,this.nippleClass=this.getNippleClass(),e.nipplePositionOverride?this.createStyleElement(this.$options.customNipplePositionId,`.popup[class*=nipple]:after { ${e.nipplePositionOverride} !important; }`):this.removeStyleElement(this.$options.customNipplePositionId)},handleResize(e){!0===e?this.$nextTick(this.setPosition):(clearTimeout(this.timeout),this.timeout=setTimeout(this.setPosition,1e3))},clickCta(){m.sendEvent("Onboarding","CTA clicked",this.id),this.ctaCallback&&this.ctaCallback()},clickSecondary(){m.sendEvent("Onboarding","Secondary clicked",this.id),this.secondaryCallback&&this.secondaryCallback()},completeStep(e){e||m.sendEvent("Onboarding","Step completed",this.id),this.$emit("stepComplete",this.id)},skipOnboarding(){m.sendEvent("Onboarding","Skipped",this.id),this.$emit("skipOnboarding")},close(e){e||m.sendEvent("Onboarding","Popup closed",this.id),this.hideCallback&&this.hideCallback(),this.hideNext?this.$emit("destroy"):this.$emit("stepComplete",this.id)},createStyleElement(e,t){let i=document.createElement("style"),s=document.createTextNode(t);i.setAttribute("id",e),i.setAttribute("type","text/css"),i.appendChild(s),document.head.appendChild(i)},removeStyleElement(e){let t=document.head.querySelector("#"+e);t&&t.parentNode.removeChild(t)}}};i(2947);var l=i(1900),d=(0,l.Z)(p,r,[],!1,null,"285b2a26",null);d.options.__file="source/addins-vue/modal/common/Popup.vue";const c=d.exports;var u=i(1117);function h(e){const t=e?u.CP[e]:u.CP[u.EA.state];let i={};return t.forEach((e=>i[e]=u.Cb[e])),i}function S(){return Object.keys(u.V).length?(e=function(){if(!function(e){const t=u.$J[u.EA.state]||[];let i={};return t.forEach((e=>i[e]=u.V[e])),i}())return{};let e={};return u.Hb.forEach((t=>{let i=u.V[t.pathName];if(!i)return;const s=i.variants[t.pathVariantName];s&&s.steps.forEach((function(i){e[i]=u.Cb[i],s.overrides&&s.overrides[i]&&(e[i]=Object.assign({pathInfo:t},e[i],s.overrides[i]))}))})),e}(),t=h(),Object.assign(t,e)):h();var e,t}const v={name:"ModalManager",customStylesId:"custom-step-css",customSubStepStylesId:"custom-sub-step-css",components:{Popup:c},data:()=>({activeStep:{},stepActive:!1,forceActiveSubStepIndex:null,activeSubStepIndex:0,plans:{},sales:{}}),computed:{transitionName(){return"top-right"===this.activeStep.position||"top-left"===this.activeStep.position?"fade-slide-up":"fade-slide-down"},activeSubStep(){return this.activeStep&&this.activeStep.subSteps&&this.activeStep.subSteps[this.activeSubStepIndex]||null}},watch:{activeStep(e){e.getPlanInfo&&!Object.keys(this.plans).length&&this.getPlanInfo().then((({plans:e={},sales:t={}}={})=>{this.plans=e,this.sales=t||{}}))}},created(){m.collect.onboarding=this.collection=new o,this.$e.listenTo(m,"onboarding:initialize",this.initializeOnboardingIfTimeFrameElapsed),this.$e.listenTo(m,"updateStepActiveProperties",this.updateStepActiveProperties),this.$e.listenTo(m,"modal:forceStep",this.forceStep),this.$e.listenTo(m,"modal:close",this.destroyModal),m.modals={stepsEnum:u.os,definitions:u.Cb};const e=e=>{e&&e.length&&(e.forEach((e=>u.Hb.push(e))),m.commandManager.execute("upsell.setUpgradePath",e)),this.definitions=S(),this.collection.refresh().then(this.onCollectionLoaded),m.trigger("modalManagerCreated")};localStorage.getItem("onboarding:skip")?e():new Promise(((e,t)=>{$.ajax({url:m.globals.urlRootApi+"onboarding/paths",success:e,error:t})})).then(e)},destroyed(){this.$e.stopListening(m,"onboarding:initialize",this.initializeOnboardingIfTimeFrameElapsed),this.$e.stopListening(m,"modal:forceStep",this.forceStep),delete m.modals,this.clearCustomStyles()},methods:{updateStepActiveProperties(e,{deactivate:t,activeSubStepIndex:i}={}){t?(this.$delete(e,"activeSubStepIndex"),this.$delete(e,"active")):(e.active||this.$set(e,"active",!0),e.subSteps&&this.$set(e,"activeSubStepIndex",i))},forceStep(e,t){this.stepActive&&this.destroyModal(),this.$nextTick((()=>{void 0!==t?this.activeSubStepIndex=t:void 0!==e.firstSubStep&&(this.activeSubStepIndex=e.firstSubStep()),this.activeStep=e,m.trigger("updateStepActiveProperties",this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.setCustomStyles(),this.stepActive=!0}))},onCollectionLoaded(){if(localStorage.getItem("onboarding:skip"))return void m.trigger("onboarding:stepsAnalyzed",!0);if(Object.keys(this.activeStep).length)return;const e=this.getActiveStep();if(e&&Object.keys(e).length)this.activeStep=e,m.delayOnboardingForIntro?m.trigger("onboarding:stepsAnalyzed",!1,this.activeStep.hideOtherApps):this.initializeOnboardingIfTimeFrameElapsed();else{if(m.devPanelActive||localStorage.getItem("dev-panel:pinned-step"))return;m.delayOnboardingForIntro&&m.trigger("onboarding:stepsAnalyzed",!1)}},getActiveStep(){for(let e in this.definitions){let t=this.definitions[e],i=this.collection.findWhere({stepId:t.id});if(!i||!i.get("utcCompletedDate")){if(!t.prerequisite)return t;if(this.checkPrerequisiteStepComplete(t))return t}}},checkPrerequisiteStepTimeWindowElapsed(e){if(!e.prerequisite)return!0;let t,i=this.collection.findWhere({stepId:e.prerequisite}),s=i&&i.get("utcCompletedDate");return!!(i&&s&&(t=m.now()-s,t/36e5>this.getStageDelayFromStep(e)))},checkPrerequisiteStepComplete(e){if(!e.prerequisite)return!0;let t=this.collection.findWhere({stepId:e.prerequisite});return t&&t.get("utcCompletedDate")},handleSubStepCompletion(e){const t="modal:subStepCompletionIntercepted";!0===e&&this.$e.off(t),this.activeSubStep.interceptNextStep&&!0!==e?(this.$e.off(t),this.$e.on(t,this.handleSubStepCompletion.bind(this,!0)),this.$e.trigger("modal:interceptSubStepCompletion")):this.activeStep.subSteps&&this.activeSubStepIndex<this.activeStep.subSteps.length-1?(m.sendEvent("Onboarding","Sub-step completed",this.activeSubStep.name),this.activeSubStepIndex++,m.trigger("updateStepActiveProperties",this.activeStep,{activeSubStepIndex:this.activeSubStepIndex})):(m.sendEvent("Onboarding","Sub-step completed",this.activeSubStep.name),this.handleStepCompletion())},handleStepCompletion(e){var t;m.sendEvent("Onboarding","Step completed",this.activeStep.name),this.stepActive=!1,this.activeSubStepIndex=0,m.trigger("updateStepActiveProperties",this.activeStep,{deactivate:!0}),this.activeStep.pathInfo&&(t=this.activeStep.pathInfo.pathId,new Promise(((e,i)=>{$.ajax({type:"PATCH",url:m.globals.urlRootApi+"onboarding/paths/"+t+"/complete",success:e,error:i})}))),this.collection.create({stepId:this.activeStep.id,utcCompletedDate:m.now()}),e&&this.removeStyleElement(this.$options.customStylesId)},getStageDelayFromStep:e=>u.ZL[e.stage]&&u.ZL[e.stage].hoursDelay,initializeOnboardingIfTimeFrameElapsed(){this.activeStep&&Object.keys(this.activeStep).length&&this.checkPrerequisiteStepTimeWindowElapsed(this.activeStep)&&(m.trigger("updateStepActiveProperties",this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.setCustomStyles(),this.stepActive=!0)},destroyModal(){this.activeSubStepIndex=0,m.trigger("updateStepActiveProperties",this.activeStep,{deactivate:!0}),this.clearCustomStyles(),this.stepActive=!1},skipOnboarding(){localStorage.setItem("onboarding:skip",!0),this.destroyModal()},goToSubStep(e){this.activeSubStepIndex=e,m.trigger("updateStepActiveProperties",this.activeStep,{activeSubStepIndex:this.activeSubStepIndex})},showUpgrade(){if(m.inExtensionUpgrade&&"Firefox"!==m.utils.getBrowserName())m.sendEvent("Onboarding","Upgrade clicked","In-extension"),this.forceStep(u.Cb[u.os.UPGRADE]);else{m.sendEvent("Onboarding","Upgrade clicked","External");let e=localStorage.getItem("email");e&&(e=e.replace("+","%2B")),m.commandManager.execute("window.account.open.login","/upgrade")}},handleElementMissingError(){this.$set(this.activeStep,"error",!0)},setCustomStyles(){this.activeStep.customCss&&this.createStyleElement(this.$options.customStylesId,this.activeStep.customCss),this.activeSubStep&&this.activeSubStep.customCss&&this.createStyleElement(this.$options.customSubStepStylesId,this.activeSubStep.customCss)},clearCustomStyles(){this.removeStyleElement(this.$options.customStylesId),this.removeStyleElement(this.$options.customSubStepStylesId)},createStyleElement(e,t){let i=document.createElement("style"),s=document.createTextNode(t);i.setAttribute("id",e),i.setAttribute("type","text/css"),i.appendChild(s),document.head.appendChild(i)},removeStyleElement(e){let t=document.head.querySelector("#"+e);t&&t.parentNode.removeChild(t)},afterStepLeave(){if(void 0!==this.activeStep.stage&&0===this.getStageDelayFromStep(this.activeStep)){this.removeStyleElement(this.$options.customStylesId);const e=this.getActiveStep();if(!e||!Object.keys(e).length)return;this.activeStep=e,this.activeStep&&this.checkPrerequisiteStepTimeWindowElapsed(this.activeStep)&&this.initializeOnboardingIfTimeFrameElapsed(this.activeStep)}},beforeSubStepEnter(){this.activeSubStep&&this.activeSubStep.customCss&&this.createStyleElement(this.$options.customSubStepStylesId,this.activeSubStep.customCss)},afterSubStepLeave(){this.removeStyleElement(this.$options.customSubStepStylesId)},getPlanInfo:()=>new Promise(((e,t)=>{$.ajax(m.globals.urlRootApi+"account/plans").done((i=>{i||t(),e(i.personal)})).fail(t)}))}};i(3797);var g=(0,l.Z)(v,n,[],!1,null,"dae7a036",null);g.options.__file="source/addins-vue/modal/ModalManager.vue";const b=g.exports;if(!m.modals){const e=new s.Z({render:e=>e(b)}).$mount();document.querySelector(".apps .full").appendChild(e.$el)}},2296:(e,t,i)=>{(e.exports=i(7788)(!1)).push([e.id,"\n.fade-slide-down-enter-active[data-v-dae7a036], .fade-slide-down-leave-active[data-v-dae7a036] { transition: all 0.5s ease-out;\n}\n.fade-slide-down-enter[data-v-dae7a036], .fade-slide-down-leave-to[data-v-dae7a036] { opacity: 0; transform: translateY(0px);\n}\n.fade-slide-up-enter-active[data-v-dae7a036], .fade-slide-up-leave-active[data-v-dae7a036] { transition: all 0.5s ease-out;\n}\n.fade-slide-up-enter[data-v-dae7a036], .fade-slide-up-leave-to[data-v-dae7a036] { opacity: 0; transform: translateY(0px);\n}\n[data-v-dae7a036] .opt-out { margin-bottom: 0px; opacity: 0.45; font-size: 0.8125rem; line-height: 1.4; user-select: none;\n}\n[data-v-dae7a036] .opt-out-button { margin-left: -3px; padding: 3px; cursor: pointer; text-decoration: underline; white-space: nowrap;\n}\n[data-v-dae7a036] .opt-out-button:hover { opacity: 0.75;\n}\n\n",""])},9354:(e,t,i)=>{(e.exports=i(7788)(!1)).push([e.id,"\n.popup[data-v-285b2a26] { width: 350px; position: fixed; z-index: 100; overflow: visible;\n}\n.popup.popup-pulse[data-v-285b2a26]:before { animation: 1.8s popup-pulse-data-v-285b2a26 infinite forwards; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; opacity: 0; border-radius: 20px; --size: 26px; box-shadow: inset 0 0 var(--size) calc(var(--size)*0.5) white, 0 0 var(--size) calc(var(--size)*0.5) white; content: '';\n}\n@keyframes popup-pulse-data-v-285b2a26 {\n0% { opacity: 0.6; transform: scale(1);\n}\n\t\t\t/*0.1% { opacity: 0.6; }*/\n100% { opacity: 0; transform: scale(1.15);\n}\n}\n.app[data-v-285b2a26] { position: static; padding: 24px;\n}\nheader[data-v-285b2a26] { display: flex; justify-content: space-between; align-items: flex-start;\n}\nheader .popup-title[data-v-285b2a26] { margin: 0 0 7px;\n}\nheader .icon-wrapper-close[data-v-285b2a26] { padding: 15px; margin: -20px -20px 0 0; opacity: 0.4; transition: opacity 0.3s ease; cursor: pointer;\n}\nheader .icon-wrapper-close[data-v-285b2a26]:hover { opacity: 0.6;\n}\n.popup-body[data-v-285b2a26] { opacity: 0.7; font-size: 0.9375rem; line-height: 1.4;\n}\n.button-row[data-v-285b2a26] { margin: 12px 0 -2px; display: flex; align-items: center; user-select: none;\n}\n.button-row[data-v-285b2a26] > :not(:last-child) { margin-right: 10px;\n}\n.button.next[data-v-285b2a26] { white-space: nowrap;\n}\n.secondary[data-v-285b2a26] { padding: 10px; opacity: 0.6; cursor: pointer; transition: opacity 0.3s ease;\n}\n.secondary[data-v-285b2a26]:hover { opacity: 0.8;\n}\n.call-to-action.notification-button[data-v-285b2a26] { margin-top: 0; color: #fff;\n} /* overrides default notification button margin */\n\n",""])},3797:(e,t,i)=>{var s=i(2296);"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(1372).Z)("70ce7b8a",s,!1,{ssrId:!0})},2947:(e,t,i)=>{var s=i(9354);"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(1372).Z)("b51e2996",s,!1,{ssrId:!0})},1372:(e,t,i)=>{"use strict";function s(e,t){for(var i=[],s={},n=0;n<t.length;n++){var a=t[n],o=a[0],r={id:e+":"+n,css:a[1],media:a[2],sourceMap:a[3]};s[o]?s[o].parts.push(r):i.push(s[o]={id:o,parts:[r]})}return i}i.d(t,{Z:()=>m});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=n&&(document.head||document.getElementsByTagName("head")[0]),r=null,p=0,l=!1,d=function(){},c=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,i,n){l=i,c=n||{};var o=s(e,t);return S(o),function(t){for(var i=[],n=0;n<o.length;n++){var r=o[n];(p=a[r.id]).refs--,i.push(p)}for(t?S(o=s(e,t)):o=[],n=0;n<i.length;n++){var p;if(0===(p=i[n]).refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete a[p.id]}}}}function S(e){for(var t=0;t<e.length;t++){var i=e[t],s=a[i.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](i.parts[n]);for(;n<i.parts.length;n++)s.parts.push(g(i.parts[n]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var o=[];for(n=0;n<i.parts.length;n++)o.push(g(i.parts[n]));a[i.id]={id:i.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,i,s=document.querySelector("style["+u+'~="'+e.id+'"]');if(s){if(l)return d;s.parentNode.removeChild(s)}if(h){var n=p++;s=r||(r=v()),t=y.bind(null,s,n,!1),i=y.bind(null,s,n,!0)}else s=v(),t=x.bind(null,s),i=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else i()}}var b,f=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function y(e,t,i,s){var n=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=f(t,n);else{var a=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function x(e,t){var i=t.css,s=t.media,n=t.sourceMap;if(s&&e.setAttribute("media",s),c.ssrId&&e.setAttribute(u,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}}}]);
//# sourceMappingURL=673.js.map