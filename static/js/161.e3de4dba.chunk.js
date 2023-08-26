(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});r(2791);var n=r(1087),i=r(6842),s=r(7892),a=r.n(s),u=r(184),c=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"VolSurface",subtitle:"Volatility Surface Modelling with Real Option Data in Chinese market",link:"https://voladocs.readthedocs.io/",image:"/images/projects/volsurface.png",date:"2023-08-14",desc:"Web Data Service Development for Option VolatilitySVI modelling supports, with both original method by Gatheral (2004) and Quasi-Explicit Method by Zeliade Systems(2009)"},{title:"OptShare",subtitle:"Option Data Interface Library.",link:"https://optshare.readthedocs.io/",image:"/images/projects/optshare.png",date:"2023-02-20",desc:"OptShare is a Python-based option data interface library, designed to provide easy-to-use option data, index data, and market yield data. "}],h=function(){return(0,u.jsx)(i.Z,{title:"Projects",description:"Learn about Yu Lu's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((function(t){return(0,u.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",u="day",c="week",o="month",h="quarter",d="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,o),s=r-i<0,a=e.clone().add(n+(s?-1:1),o);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:c,d:u,D:l,h:a,m:s,s:i,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=m;var D=function(t){return t instanceof j},S=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),r&&(M[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,i=u}return!n&&i&&(y=i),i||!n&&y},w=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},b=v;b.l=S,b.i=D,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return w(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<w(t)},g.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!b.u(e)||e,h=b.p(t),f=function(t,e){var i=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(u)},$=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case d:return n?f(1,0):f(31,11);case o:return n?f(1,m):f(0,m+1);case c:var y=this.$locale().weekStart||0,M=(p<y?p+7:p)-y;return f(n?g-M:g+(6-M),m);case u:case l:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,c=b.p(t),h="set"+(this.$u?"UTC":""),f=(r={},r[u]=h+"Date",r[l]=h+"Date",r[o]=h+"Month",r[d]=h+"FullYear",r[a]=h+"Hours",r[s]=h+"Minutes",r[i]=h+"Seconds",r[n]=h+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===d){var p=this.clone().set(l,1);p.$d[f]($),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[b.p(t)]()},g.add=function(n,h){var l,f=this;n=Number(n);var $=b.p(h),p=function(t){var e=w(f);return b.w(e.date(e.date()+Math.round(t*n)),f)};if($===o)return this.set(o,this.$M+n);if($===d)return this.set(d,this.$y+n);if($===u)return p(1);if($===c)return p(7);var m=(l={},l[s]=e,l[a]=r,l[i]=t,l)[$]||1,g=this.$d.getTime()+n*m;return b.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=r.meridiem,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},l=function(t){return b.s(s%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return d(r.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,c,2);case"ddd":return d(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(s,a,!0);case"A":return $(s,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,f){var $,p=this,m=b.p(l),g=w(n),v=(g.utcOffset()-this.utcOffset())*e,y=this-g,M=function(){return b.m(p,g)};switch(m){case d:$=M()/12;break;case o:$=M();break;case h:$=M()/3;break;case c:$=(y-v)/6048e5;break;case u:$=(y-v)/864e5;break;case a:$=y/r;break;case s:$=y/e;break;case i:$=y/t;break;default:$=y}return f?$:b.a($)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),x=j.prototype;return w.prototype=x,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",u],["$M",o],["$y",d],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,j,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=M[y],w.Ls=M,w.p={},w}()}}]);
//# sourceMappingURL=161.e3de4dba.chunk.js.map