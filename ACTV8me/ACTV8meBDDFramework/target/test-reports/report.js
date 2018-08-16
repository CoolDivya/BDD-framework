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
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 57176987073,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 257990218,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 71768034,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_select_appliation()"
});
formatter.result({
  "duration": 2195929399,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate Advanced Search function for Content",
  "description": "",
  "id": "actv8me-application-test;validate-advanced-search-function-for-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is on Content page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "click on advanced serach button and open search winodw",
  "keyword": "When "
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.user_is_on_Content_page()"
});
formatter.result({
  "duration": 476737,
  "error_message": "java.lang.NullPointerException\r\n\tat com.qa.stepDefinitions.Content_Advanced_SearchPageSteps.user_is_on_Content_page(Content_Advanced_SearchPageSteps.java:15)\r\n\tat ✽.Given user is on Content page(D:/Divyata QA/ACTV8me/ACTV8meBDDFramework/src/main/java/com/qa/features/ACTV8meTest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Content_Advanced_SearchPageSteps.click_on_advanced_serach_button_and_open_search_winodw()"
});
formatter.result({
  "status": "skipped"
});
});