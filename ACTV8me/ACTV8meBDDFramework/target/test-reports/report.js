$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Divyata QA/ACTV8me/ACTV8meBDDFramework/src/main/java/com/qa/features/ACTV8meTest.feature");
formatter.feature({
  "line": 1,
  "name": "ACTV8me Application test",
  "description": "",
  "id": "actv8me-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate login page",
  "description": "",
  "id": "actv8me-application-test;validate-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user select an application",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click Content and appears on content page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on advanced serach button and open search winodw",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter Content id and Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on advanced serach button and open search winodw",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter name and Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on advanced serach button and open search winodw",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter brand and Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on advanced serach button and open search winodw",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter type and Click on Search",
  "keyword": "And "
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 17029591096,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 360909335,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 90031673,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_select_appliation()"
});
formatter.result({
  "duration": 2423827617,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_is_on_Content_page()"
});
formatter.result({
  "duration": 3181187650,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.click_on_advanced_serach_button_and_open_search_winodw()"
});
formatter.result({
  "duration": 156339088,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.enter_contentId_and_click_on_search()"
});
formatter.result({
  "duration": 3316535768,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.click_on_advanced_serach_button_and_open_search_winodw()"
});
formatter.result({
  "duration": 165818860,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.Enter_name_and_Click_on_Search()"
});
formatter.result({
  "duration": 4256416988,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.click_on_advanced_serach_button_and_open_search_winodw()"
});
formatter.result({
  "duration": 59920471,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.Enter_brand_and_Click_on_Search()"
});
formatter.result({
  "duration": 3285293311,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.click_on_advanced_serach_button_and_open_search_winodw()"
});
formatter.result({
  "duration": 66528237,
  "status": "passed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.Enter_type_and_Click_on_Search()"
});
formatter.result({
  "duration": 259343289,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton _ngcontent-c30\u003d\"\" class\u003d\"common-form-submit mat-raised-button\" mat-raised-button\u003d\"\" type\u003d\"submit\"\u003e...\u003c/button\u003e is not clickable at point (727, 602). Other element would receive the click: \u003cspan class\u003d\"mat-option-text\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027K2ANNEX03\u0027, ip: \u0027192.168.2.147\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49801}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir6592_14299}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 39d1f8dbc9387a71a5e2d18a21ec0cbb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy29.click(Unknown Source)\r\n\tat com.qa.pages.Content_Advanced_SearchPage.enter_type_and_click_on_search(Content_Advanced_SearchPage.java:93)\r\n\tat com.qa.stepDefinitions.Content_Advanced_SearchPageSteps.Enter_type_and_Click_on_Search(Content_Advanced_SearchPageSteps.java:87)\r\n\tat ✽.And Enter type and Click on Search(D:/Divyata QA/ACTV8me/ACTV8meBDDFramework/src/main/java/com/qa/features/ACTV8meTest.feature:21)\r\n",
  "status": "failed"
});
});