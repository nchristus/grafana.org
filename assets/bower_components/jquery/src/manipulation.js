define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/support","./data/var/data_priv","./data/var/data_user","./core/init","./data/accepts","./traversing","./selector","./event"],function(t,e,n,r,i,o,u,a){function c(e,n){return t.nodeName(e,"table")&&t.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function l(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function s(t){var e=w.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function f(t,e){for(var n=0,r=t.length;r>n;n++)u.set(t[n],"globalEval",!e||u.get(e[n],"globalEval"))}function d(e,n){var r,i,o,c,l,s,f,d;if(1===n.nodeType){if(u.hasData(e)&&(c=u.access(e),l=u.set(n,c),d=c.events)){delete l.handle,l.events={};for(o in d)for(r=0,i=d[o].length;i>r;r++)t.event.add(n,o,d[o][r])}a.hasData(e)&&(s=a.access(e),f=t.extend({},s),a.set(n,f))}}function p(e,n){var r=e.getElementsByTagName?e.getElementsByTagName(n||"*"):e.querySelectorAll?e.querySelectorAll(n||"*"):[];return void 0===n||n&&t.nodeName(e,n)?t.merge([e],r):r}function h(t,e){var n=e.nodeName.toLowerCase();"input"===n&&i.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}var v=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,g=/<|&#?\w+;/,y=/<(?:script|style|link)/i,_=/checked\s*(?:[^=]|=\s*.checked.)/i,b=/^$|\/(?:java|ecma)script/i,w=/^true\/(.*)/,x=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,A={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return A.optgroup=A.option,A.tbody=A.tfoot=A.colgroup=A.caption=A.thead,A.th=A.td,t.extend({clone:function(e,n,r){var i,u,a,c,l=e.cloneNode(!0),s=t.contains(e.ownerDocument,e);if(!(o.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||t.isXMLDoc(e)))for(c=p(l),a=p(e),i=0,u=a.length;u>i;i++)h(a[i],c[i]);if(n)if(r)for(a=a||p(e),c=c||p(l),i=0,u=a.length;u>i;i++)d(a[i],c[i]);else d(e,l);return c=p(l,"script"),c.length>0&&f(c,!s&&p(e,"script")),l},buildFragment:function(e,n,r,i){for(var o,u,a,c,l,s,d=n.createDocumentFragment(),h=[],y=0,_=e.length;_>y;y++)if(o=e[y],o||0===o)if("object"===t.type(o))t.merge(h,o.nodeType?[o]:o);else if(g.test(o)){for(u=u||d.appendChild(n.createElement("div")),a=(m.exec(o)||["",""])[1].toLowerCase(),c=A[a]||A._default,u.innerHTML=c[1]+o.replace(v,"<$1></$2>")+c[2],s=c[0];s--;)u=u.lastChild;t.merge(h,u.childNodes),u=d.firstChild,u.textContent=""}else h.push(n.createTextNode(o));for(d.textContent="",y=0;o=h[y++];)if((!i||-1===t.inArray(o,i))&&(l=t.contains(o.ownerDocument,o),u=p(d.appendChild(o),"script"),l&&f(u),r))for(s=0;o=u[s++];)b.test(o.type||"")&&r.push(o);return d},cleanData:function(e){for(var n,r,i,o,c=t.event.special,l=0;void 0!==(r=e[l]);l++){if(t.acceptData(r)&&(o=r[u.expando],o&&(n=u.cache[o]))){if(n.events)for(i in n.events)c[i]?t.event.remove(r,i):t.removeEvent(r,i,n.handle);u.cache[o]&&delete u.cache[o]}delete a.cache[r[a.expando]]}}}),t.fn.extend({text:function(e){return r(this,function(e){return void 0===e?t.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(e,n){for(var r,i=e?t.filter(e,this):this,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||t.cleanData(p(r)),r.parentNode&&(n&&t.contains(r.ownerDocument,r)&&f(p(r,"script")),r.parentNode.removeChild(r));return this},empty:function(){for(var e,n=0;null!=(e=this[n]);n++)1===e.nodeType&&(t.cleanData(p(e,!1)),e.textContent="");return this},clone:function(e,n){return e=null==e?!1:e,n=null==n?e:n,this.map(function(){return t.clone(this,e,n)})},html:function(e){return r(this,function(e){var n=this[0]||{},r=0,i=this.length;if(void 0===e&&1===n.nodeType)return n.innerHTML;if("string"==typeof e&&!y.test(e)&&!A[(m.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(v,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(t.cleanData(p(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(n){e=this.parentNode,t.cleanData(p(this)),e&&e.replaceChild(n,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(n,r){n=e.apply([],n);var i,a,c,f,d,h,v=0,m=this.length,g=this,y=m-1,w=n[0],A=t.isFunction(w);if(A||m>1&&"string"==typeof w&&!o.checkClone&&_.test(w))return this.each(function(t){var e=g.eq(t);A&&(n[0]=w.call(this,t,e.html())),e.domManip(n,r)});if(m&&(i=t.buildFragment(n,this[0].ownerDocument,!1,this),a=i.firstChild,1===i.childNodes.length&&(i=a),a)){for(c=t.map(p(i,"script"),l),f=c.length;m>v;v++)d=i,v!==y&&(d=t.clone(d,!0,!0),f&&t.merge(c,p(d,"script"))),r.call(this[v],d,v);if(f)for(h=c[c.length-1].ownerDocument,t.map(c,s),v=0;f>v;v++)d=c[v],b.test(d.type||"")&&!u.access(d,"globalEval")&&t.contains(h,d)&&(d.src?t._evalUrl&&t._evalUrl(d.src):t.globalEval(d.textContent.replace(x,"")))}return this}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,r){t.fn[e]=function(e){for(var i,o=[],u=t(e),a=u.length-1,c=0;a>=c;c++)i=c===a?this:this.clone(!0),t(u[c])[r](i),n.apply(o,i.get());return this.pushStack(o)}}),t});