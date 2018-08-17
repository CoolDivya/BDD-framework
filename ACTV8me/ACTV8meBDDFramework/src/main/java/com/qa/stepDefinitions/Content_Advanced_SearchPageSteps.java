package com.qa.stepDefinitions;

import com.qa.pages.Content_Advanced_SearchPage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class Content_Advanced_SearchPageSteps extends TestBase{

	
	LoginPage loginpage=new LoginPage();
	Content_Advanced_SearchPage search;
	
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	   TestBase.initialization();
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String uname, String pwd) throws Throwable {
		
		loginpage=new LoginPage();
		loginpage.enters_username_and_password(uname, pwd);
	    
	}

	@And("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	    
		loginpage.click_on_login_button();
	}
	
	
	@Then("^user select an application$")
	public void user_select_appliation() throws Throwable {
		
	search=loginpage.select_application();
	    
	}
	
	
	@Then("^user click Content and appears on content page$")
	public void user_is_on_Content_page() throws Throwable {
	    
		
		search.user_is_on_Content_page();
		
	}

	@Then("^click on advanced serach button and open search winodw$")
	public void click_on_advanced_serach_button_and_open_search_winodw() throws Throwable {
		
		search.click_on_the_Advanced_Search_button();
	   
    }
	
	
	@And("^Enter Enter contactID \"(.*)\" and Click on Search$")
	public void enter_contentId_and_click_on_search(String contactID) throws InterruptedException
	{
		search.enter_contentId_and_click_on_search(contactID);
	}
	
	
	@And("^Enter Name \"(.*)\" and Click on Search$")
	public void Enter_name_and_Click_on_Search(String Name) throws InterruptedException
	{
		search.enter_name_and_click_on_search(Name);
	}
	
	
	@And("^Enter Brand \"(.*)\" and Click on Search$")
	public void Enter_brand_and_Click_on_Search(String Brand) throws InterruptedException
	{
		search.enter_brand_and_click_on_search(Brand);
	}
	
	
	@And("^Enter Type \"(.*)\" and Click on Search$")
	public void Enter_type_and_Click_on_Search(String Type)
	{
		search.enter_type_and_click_on_search(Type);
	}
	
	
}
