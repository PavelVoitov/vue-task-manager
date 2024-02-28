(function(){"use strict";var e={43:function(e,t,s){var n=s(751),o=s(641);const a={class:"bg-body h-100vh"};function r(e,t,s,n,r,i){const d=(0,o.g2)("vtm-header"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(d),(0,o.bF)(u)])}var i=s.p+"img/logo.3e1bc336.png";const d={class:"bg-header py-4 flex justify-between items-center"},u=(0,o.Lk)("img",{src:i,alt:"Логотип",class:"mr-2 h-5"},null,-1),l=(0,o.Lk)("span",{class:"text-white text-lg font-semibold"},"Task Manager",-1);function c(e,t,s,n,a,r){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",d,[(0,o.bF)(i,{to:{name:"home"},class:"flex items-center ml-5"},{default:(0,o.k6)((()=>[u,l])),_:1}),(0,o.bF)(i,{to:{name:"about"},class:"text-link hover:text-gray-400 mr-5 h-5"},{default:(0,o.k6)((()=>[(0,o.eW)(" About ")])),_:1})])}var m={name:"VtmHeader"},f=s(262);const k=(0,f.A)(m,[["render",c]]);var p=k,g={components:{VtmHeader:p}};const h=(0,f.A)(g,[["render",r]]);var b=h,v=s(220),y=s(33);const x={class:"mx-2 md:mx-5 lg:w-1/2 xl:w-1/3"},T={class:"flex items-center mb-2 md:mb-0 md:mr-0 w-full"},w=["onInput","onUpdate:modelValue"],C={class:"bg-header py-2 px-3 border rounded focus:shadow-outline-blue text-white break-all"},E=["onClick"],L=["onClick"];function M(e,t,s,a,r,i){const d=(0,o.g2)("vtm-add-task-form"),u=(0,o.g2)("vtm-edit-task");return(0,o.uX)(),(0,o.CE)("div",x,[(0,o.bF)(d),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.tasks,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"flex flex-col md:flex-row mb-2 w-full rounded-md"},[(0,o.Lk)("div",T,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",class:"h-auto w-6 rounded mr-2 cursor-pointer",onInput:t=>i.handleTaskCompletion(e.id),"onUpdate:modelValue":t=>e.completed=t},null,40,w),[[n.lH,e.completed]]),r.editMode&&e.id===r.editingTaskId?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",{key:0,class:(0,y.C4)(["flex-grow md:w-full items-start",{"completed-task":e.completed}])},[(0,o.Lk)("p",C,(0,y.v_)(e.message),1)],2)),r.editMode&&e.id===r.editingTaskId?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:1,class:"bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2",onClick:t=>i.handleEditMode(e.id,!0)}," Edit ",8,E)),r.editMode&&e.id===r.editingTaskId?((0,o.uX)(),(0,o.Wv)(u,{key:2,"task-message":e.message,"task-id":e.id,onCloseEditMode:i.handleEditMode},null,8,["task-message","task-id","onCloseEditMode"])):(0,o.Q3)("",!0),(0,o.Lk)("button",{class:"bg-red-500 hover:bg-red-700 h-10 text-white font-bold py-2 px-4 rounded ml-2",onClick:t=>i.deleteTask(e.id)}," Delete ",8,L)])])))),128))])])}const I={class:"my-3 flex w-full flex-col"},O={class:"flex w-full"},j={class:"h-5"};function A(e,t,s,a,r,i){return(0,o.uX)(),(0,o.CE)("div",I,[(0,o.Lk)("div",O,[(0,o.bo)((0,o.Lk)("input",{class:"flex-grow appearance-none border rounded py-2 px-3 mr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:bg-white",placeholder:"Input your task","onUpdate:modelValue":t[0]||(t[0]=e=>r.message=e),onInput:t[1]||(t[1]=e=>r.error="")},null,544),[[n.Jo,r.message]]),(0,o.Lk)("button",{class:"relative bg-gray-800 hover:bg-gray-900 text-white font-bold border-blue-100 border-spacing-0.5 px-3 py-2 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-gray-800 transition-colors duration-300 ease-in-out",onClick:t[2]||(t[2]=(...e)=>i.addTask&&i.addTask(...e))}," Add Task ")]),(0,o.Lk)("div",j,[(0,o.bo)((0,o.Lk)("div",{class:"mt-1 text-red-500"},(0,y.v_)(r.error),513),[[n.aG,r.error]])])])}var _=s(302),S={name:"VtmAddTaskForm",data(){return{message:"",error:""}},methods:{addTask(){if(!this.message.trim())return void(this.error="Can't add the empty task");const e=(0,_.A)();this.$store.commit("addTask",{id:e,message:this.message.trim(),completed:!1}),this.message=""}}};const F=(0,f.A)(S,[["render",A]]);var X=F,V=s(278);function P(e,t,s,a,r,i){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.editedTaskMessage=e),class:"flex-grow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:bg-white"},null,512),[[n.Jo,r.editedTaskMessage]]),(0,o.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3",onClick:t[1]||(t[1]=(...e)=>i.saveEditingTask&&i.saveEditingTask(...e))}," Save ")],64)}var $={name:"VtmEditTask",props:{taskMessage:{type:String,required:!0},taskId:{type:String,required:!0}},data(){return{editedTaskMessage:this.taskMessage}},emits:{"close-edit-mode":e=>"string"===typeof e},methods:{saveEditingTask(){this.$store.commit("editTask",{id:this.taskId,editedMessage:this.editedTaskMessage}),this.$emit("close-edit-mode",this.taskId,!1)}}};const H=(0,f.A)($,[["render",P]]);var N=H,J={name:"TaskListPage",components:{VtmEditTask:N,VtmAddTaskForm:X},data(){return{editMode:!1,editingTaskId:null}},methods:{handleEditMode(e,t){this.editMode=t,this.editingTaskId=e},deleteTask(e){this.$store.commit("deleteTask",e)},handleTaskCompletion(e){this.$store.commit("completeTask",e)}},computed:{...(0,V.aH)({tasks:e=>e.tasks})},watch:{tasks(){sessionStorage.setItem("tasks",JSON.stringify(this.tasks))}},mounted(){const e=sessionStorage.getItem("tasks"),t=e?JSON.parse(e):[];this.$store.commit("setTasks",t)}};const Q=(0,f.A)(J,[["render",M],["__scopeId","data-v-59378e2c"]]);var U=Q;const q=e=>((0,o.Qi)("data-v-080a669a"),e=e(),(0,o.jt)(),e),W={class:"home flex flex-col items-center justify-center h-screen text-center"},B=q((()=>(0,o.Lk)("h1",{class:"text-4xl font-bold mb-2 text-white"}," Start your productive day! ",-1))),K=q((()=>(0,o.Lk)("h2",{class:"text-lg mb-4"},"Create your first task!",-1)));function D(e,t,s,n,a,r){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",W,[B,K,(0,o.bF)(i,{class:"button-animation",to:{name:"taskList"}},{default:(0,o.k6)((()=>[(0,o.eW)(" Open Tasks List ")])),_:1})])}var G={name:"HomePage"};const z=(0,f.A)(G,[["render",D],["__scopeId","data-v-080a669a"]]);var R=z;const Y=[{path:"/",name:"home",component:R},{path:"/task-list",name:"taskList",component:U},{path:"/about",name:"about",component:()=>s.e(302).then(s.bind(s,921))}],Z=(0,v.aE)({history:(0,v.Bt)(),routes:Y});var ee=Z,te=(0,V.y$)({state:{tasks:null},mutations:{setTasks(e,t){e.tasks=t},addTask(e,t){e.tasks=[...e.tasks,t]},editTask(e,{id:t,editedMessage:s}){e.tasks=e.tasks.map((e=>e.id===t?{...e,message:s}:e))},completeTask(e,t){e.tasks=e.tasks.map((e=>e.id===t?{...e,completed:!e.completed}:e))},deleteTask(e,t){e.tasks=e.tasks.filter((e=>e.id!==t))}}});(0,n.Ef)(b).use(te).use(ee).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,a){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,d=0;d<n.length;d++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[d])}))?n.splice(d--,1):(i=!1,a<r&&(r=a));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+".5ac273ae.js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-task-manager:";s.l=function(n,o,a,r){if(e[n])e[n].push(o);else{var i,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+a){i=c;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[o];var m=function(t,s){i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(s)})),t)return t(s)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),d&&document.head.appendChild(i)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/vue-task-manager/"}(),function(){var e={524:0};s.f.j=function(t,n){var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(s,n){o=e[t]=[s,n]}));n.push(o[2]=a);var r=s.p+s.u(t),i=new Error,d=function(n){if(s.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,o[1](i)}};s.l(r,d,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],d=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(d)var l=d(s)}for(t&&t(n);u<r.length;u++)a=r[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(l)},n=self["webpackChunkvue_task_manager"]=self["webpackChunkvue_task_manager"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(43)}));n=s.O(n)})();
//# sourceMappingURL=app.f00d94a6.js.map