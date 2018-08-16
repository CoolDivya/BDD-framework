package com.qa.stepDefinitions;

import com.qa.pages.Content_Advanced_SearchPage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginPageSteps extends TestBase{

	LoginPage loginpage;
	Content_Advanced_SearchPage search;
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	   TestBase.initialization();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		
		loginpage=new LoginPage();
		loginpage.enters_username_and_password();
	    
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	    
		loginpage.click_on_login_button();
	}
	
	
	@Then("^click on application$")
	public void user_select_appliation() throws Throwable {
		
	search= loginpage.select_application();
	    
	}

}
