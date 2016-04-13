if("function"!=typeof define){var projectRoot=require("find-parent-dir").sync(__dirname,"package.json"),filesRoot=projectRoot;process.env.APP_DIR_FOR_CODE_COVERAGE&&(filesRoot+=process.env.APP_DIR_FOR_CODE_COVERAGE);var requirejs=require("requirejs"),pkg=require(projectRoot+"/package"),expect=require("expect.js"),domain="modernizr.com",_=require("lodash"),def=function(){return requirejs.define.apply(this,arguments)}}else var domain=location.host,projectRoot="..",filesRoot="..",pkg={},_=window.lodash,def=function(){return define.apply(this,arguments)};var generateBanner,cleanup;describe("generate-banner",function(){before(function(t){var e=requirejs.config({context:Math.random().toString().slice(2),paths:{lib:projectRoot+"/test/mocks/lib",generateBanner:filesRoot+"/lib/generate-banner",cleanup:projectRoot+"/test/cleanup"}});def("package",[],function(){return pkg}),def("lodash",[],function(){return _}),e(["generateBanner","package","cleanup"],function(e,n,i){generateBanner=e,cleanup=i,pkg=n,t()})}),it("should produce a compact banner when requested",function(){var t=generateBanner("compact"),e="/*! "+pkg.name+" "+pkg.version+" (Custom Build) | "+pkg.license+" *";expect(t).to.contain(e)}),it("should produce a full banner when requested",function(){var t=generateBanner("full"),e="Modernizr tests which native CSS3 and HTML5 features are available";expect(t).to.contain(e)}),it("should include a build url",function(){var t=generateBanner(),e=" * http://"+domain+"/download/?--dontmin";expect(t).to.contain(e)}),it('should only accept "full" and "compact" as type arguments',function(){expect(function(){generateBanner("sup")}).to.throwError('banners() must be passed "compact" or "full" as an argument.')}),after(function(){cleanup()})});