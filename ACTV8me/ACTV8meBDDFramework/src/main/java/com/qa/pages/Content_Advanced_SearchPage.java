package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class Content_Advanced_SearchPage extends TestBase{
	
	@FindBy(xpath="/html[1]/body[1]/app-root[1]/app-navigation[1]/mat-sidenav-container[1]/mat-sidenav[1]/mat-nav-list[1]/a[3]/mat-list-item[1]/div[1]/div[3]")
    WebElement content;
	
	@FindBy(xpath="//span[contains(text(),'Advanced Search')]")
    WebElement advanced_search;
	
	
	public Content_Advanced_SearchPage()
	{
		PageFactory.initElements(driver, this);
	}

	public void user_is_on_Content_page() throws InterruptedException
	{
		Thread.sleep(3000);
		content.click();
	}
    public void click_on_the_Advanced_Search_button(){
	   
		
    	advanced_search.click();
		
	}
}
