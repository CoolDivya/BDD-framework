package com.qa.stepDefinitions;

import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Content_Advanced_SearchPageSteps extends TestBase{

	Content_Advanced_SearchPageSteps search;
	
	@Given("^user is on Content page$")
	public void user_is_on_Content_page() throws Throwable {
	    
		search.user_is_on_Content_page();
		
	}

	@When("^click on advanced serach button and open search winodw$")
	public void click_on_advanced_serach_button_and_open_search_winodw() throws Throwable {
		
		search.click_on_advanced_serach_button_and_open_search_winodw();
	   
}
	
}
