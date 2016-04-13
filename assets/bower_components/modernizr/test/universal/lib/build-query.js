if("function"!=typeof define){var projectRoot=require("find-parent-dir").sync(__dirname,"package.json"),filesRoot=projectRoot;process.env.APP_DIR_FOR_CODE_COVERAGE&&(filesRoot+=process.env.APP_DIR_FOR_CODE_COVERAGE);var requirejs=require("requirejs"),expect=require("expect.js")}else var projectRoot="..",filesRoot="..";var cleanup,req;describe("build-query",function(){var t;before(function(e){(req=requirejs.config({context:Math.random().toString().slice(2),paths:{lib:filesRoot+"/lib",lodash:projectRoot+"/node_modules/lodash/lodash",metadata:projectRoot+"/test/mocks/lib/metadata",cleanup:projectRoot+"/test/cleanup"}}))(["lib/build-query","cleanup"],function(n,i){t=n,cleanup=i,e()})}),it("builds a query from a feature-detect",function(){var e=t({"feature-detects":["css/boxsizing"]});expect(e).to.be("?-boxsizing-dontmin")}),it("properly formats detects with multiple properties",function(){var e=t({"feature-detects":["dom/createElement-attrs"]});expect(e).to.be("?-createelementattrs_createelement_attrs-dontmin")}),it("adds options to the query",function(){var e=t({options:["mq"]});expect(e).to.be("?-mq-dontmin")}),it("adds classPrefix when setClasses is true as well",function(){var e=t({classPrefix:"TEST_PREFIX",options:["setClasses"]});expect(e).to.be("?-setclasses-dontmin-cssclassprefix:TEST_PREFIX")}),it("strips `html5` from the shiv options",function(){var e=t({options:["html5shiv"]});expect(e).to.be("?-shiv-dontmin")}),it("removes the dontmin option when minify is true",function(){var e=t({minify:!0});expect(e).to.be("?-")}),it("removes custom tests from the build query",function(){var e=t({"feature-detects":["css/boxsizing","custom/test/path"]});expect(e).to.be("?-boxsizing-dontmin")}),after(function(){cleanup()})});