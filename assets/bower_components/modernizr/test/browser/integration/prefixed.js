describe("prefixed()",function(){function t(t,e){var n,i=["Moz","Khtml","Webkit","O","ms"],r=["moz","khtml","webkit","o","ms"],o=document.createElement("div"),s=t.charAt(0).toUpperCase()+t.slice(1);if(e){if(t in e)return t;for(n=r.length;n--;)if(r[n]+s in e)return r[n]+s}else{if(t in o.style)return t;for(n=i.length;n--;)if(i[n]+s in o.style)return i[n]+s}return!1}function e(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}var n=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"],i=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}];_.forEach(n,function(e){it("results for "+e+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(e)).to.equal(t(e))})}),_.forEach(n,function(n){it("results for "+n+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(e(n))).to.equal(t(n))})}),_.forEach(i,function(e){it("results for "+e.prop+" match the homebaked prefix finder",function(){var n=Modernizr.prefixed(e.prop,e.obj,!1),i=t(e.prop,e.obj);expect(n).to[_.isString(i)?"contain":"equal"](i)})})});