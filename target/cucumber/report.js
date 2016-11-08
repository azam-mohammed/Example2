$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Test Google.com website",
  "description": "",
  "id": "test-google.com-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2470593037,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user, i should visit google.com website on browser",
  "description": "",
  "id": "test-google.com-website;as-a-user,-i-should-visit-google.com-website-on-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit \"http://www.google.com\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Google\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Gmail\" link on page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on \"Gmail\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_visit_page(String)"
});
formatter.result({
  "duration": 1136115159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 23996286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 12
    }
  ],
  "location": "PageStepDefs.i_click_on_link_on_page(String)"
});
formatter.result({
  "duration": 1033931107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 29720900,
  "error_message": "org.junit.ComparisonFailure: title was not equal to driver.getTitle() - title \u003d Gmail driver.getTitle \u003d Gmail - Free Storage and Email from Google expected:\u003cGmail[ - Free Storage and Email from Google]\u003e but was:\u003cGmail[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat common.stepDefs.NavigationStepDefs.i_am_on_Page(NavigationStepDefs.java:25)\n\tat ✽.Then I am on \"Gmail\" Page(google.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 505788985,
  "status": "passed"
});
formatter.before({
  "duration": 169559302,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user, i should visit google.com website on browser",
  "description": "",
  "id": "test-google.com-website;as-a-user,-i-should-visit-google.com-website-on-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I visit \"http://www.google.com\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am on \"Google\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_visit_page(String)"
});
formatter.result({
  "duration": 392925770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 10860020,
  "status": "passed"
});
formatter.after({
  "duration": 39457,
  "status": "passed"
});
formatter.uri("yahoo.feature");
formatter.feature({
  "line": 1,
  "name": "Test Yahoo.com website",
  "description": "",
  "id": "test-yahoo.com-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 150448960,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user, i should visit yahoo.com website on browser",
  "description": "",
  "id": "test-yahoo.com-website;as-a-user,-i-should-visit-yahoo.com-website-on-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit \"https://www.yahoo.com/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Yahoo\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on \"News\" link on page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on \"Yahoo News UK\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.yahoo.com/",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_visit_page(String)"
});
formatter.result({
  "duration": 3843225460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 10031979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 12
    }
  ],
  "location": "PageStepDefs.i_click_on_link_on_page(String)"
});
formatter.result({
  "duration": 128464078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo News UK",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 74783069,
  "error_message": "org.junit.ComparisonFailure: title was not equal to driver.getTitle() - title \u003d Yahoo News UK driver.getTitle \u003d Yahoo expected:\u003cYahoo[]\u003e but was:\u003cYahoo[ News UK]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat common.stepDefs.NavigationStepDefs.i_am_on_Page(NavigationStepDefs.java:25)\n\tat ✽.Then I am on \"Yahoo News UK\" Page(yahoo.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 541371510,
  "status": "passed"
});
formatter.before({
  "duration": 19507996,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user, i should visit yahoo.com website on browser",
  "description": "",
  "id": "test-yahoo.com-website;as-a-user,-i-should-visit-yahoo.com-website-on-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I visit \"https://www.yahoo.com/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am on \"Yahoo\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.yahoo.com/",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_visit_page(String)"
});
formatter.result({
  "duration": 2252667929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo",
      "offset": 9
    }
  ],
  "location": "NavigationStepDefs.i_am_on_Page(String)"
});
formatter.result({
  "duration": 600089879915,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 600.000\n  (Session info: chrome\u003d54.0.2840.71)\n  (Driver info: chromedriver\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6),platform\u003dMac OS X 10.12.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 600.07 seconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027Apple.local\u0027, ip: \u0027192.168.225.105\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6), userDataDir\u003d/var/folders/qp/n8f0jdk11lndxj1tzz_n_sh40000gn/T/.org.chromium.Chromium.GAku3f}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d54.0.2840.71, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c0e905bd13a9c0eba6e1561688cd5ad2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:670)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:315)\n\tat common.stepDefs.NavigationStepDefs.i_am_on_Page(NavigationStepDefs.java:25)\n\tat ✽.Then I am on \"Yahoo\" Page(yahoo.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "duration": 900008748558,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: cannot determine loading status\nfrom timeout: Timed out receiving message from renderer: -600.003\n  (Session info: chrome\u003d54.0.2840.71)\n  (Driver info: chromedriver\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6),platform\u003dMac OS X 10.12.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 899.98 seconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027Apple.local\u0027, ip: \u0027192.168.225.105\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6), userDataDir\u003d/var/folders/qp/n8f0jdk11lndxj1tzz_n_sh40000gn/T/.org.chromium.Chromium.GAku3f}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d54.0.2840.71, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c0e905bd13a9c0eba6e1561688cd5ad2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:670)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:325)\n\tat common.hooks.WebHooks.tearDown(WebHooks.java:42)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
});