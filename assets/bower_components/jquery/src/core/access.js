define(["../core"],function(e){var t=e.access=function(t,n,r,i,o,u,a){var c=0,s=t.length,l=null==r;if("object"===e.type(r)){o=!0;for(c in r)e.access(t,n,c,r[c],!0,u,a)}else if(void 0!==i&&(o=!0,e.isFunction(i)||(a=!0),l&&(a?(n.call(t,i),n=null):(l=n,n=function(t,n,r){return l.call(e(t),r)})),n))for(;s>c;c++)n(t[c],r,a?i:i.call(t[c],c,n(t[c],r)));return o?t:l?n.call(t):s?n(t[0],r):u};return t});