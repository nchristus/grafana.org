define(["../core","../var/rcssNum"],function(t,e){function n(n,i,r,o){var s,a=1,l=20,u=o?function(){return o.cur()}:function(){return t.css(n,i,"")},c=u(),d=r&&r[3]||(t.cssNumber[i]?"":"px"),f=(t.cssNumber[i]||"px"!==d&&+c)&&e.exec(t.css(n,i));if(f&&f[3]!==d){d=d||f[3],r=r||[],f=+c||1;do a=a||".5",f/=a,t.style(n,i,f+d);while(a!==(a=u()/c)&&1!==a&&--l)}return r&&(f=+f||+c||0,s=r[1]?f+(r[1]+1)*r[2]:+r[2],o&&(o.unit=d,o.start=f,o.end=s)),s}return n});