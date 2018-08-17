package com.qa.pages;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.qa.util.TestBase;
import com.qa.util.TestUtil;

public class Content_Advanced_SearchPage extends TestBase{
	
	@FindBy(xpath="/html[1]/body[1]/app-root[1]/app-navigation[1]/mat-sidenav-container[1]/mat-sidenav[1]/mat-nav-list[1]/a[3]/mat-list-item[1]/div[1]/div[3]")
    WebElement content;
	
	@FindBy(xpath="//div[@class='ng-star-inserted']//button[@type='button']")
    WebElement advanced_search;
	
	@FindBy(name="contentId")
	WebElement contentid;
	
	@FindBy(name="byName")
	WebElement name;
	
	@FindBy(name="byBrand")
	WebElement brand;
	
	
	@FindBy(name="selectedByType")
    WebElement type;
	
	@FindBy(xpath="//button[@type='submit']")
	WebElement search;
	
	
	
	
	
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
	   
    	TestUtil.javascript_button_click(driver, advanced_search);
    	
		
	}
    
    public void enter_contentId_and_click_on_search(String contactID) throws InterruptedException
     {
    	TestUtil.javascript_button_click(driver, contentid);
    	contentid.sendKeys(contactID);
    	search.click();
    	
    	Thread.sleep(3000);
     }
    
    
    public void enter_name_and_click_on_search(String Name) throws InterruptedException
    {
    	TestUtil.javascript_button_click(driver, name);
    	name.sendKeys(Name);
    	search.click();
    	
    	Thread.sleep(3000);
    }

	public void enter_brand_and_click_on_search(String Brand) throws InterruptedException {
		
		TestUtil.javascript_button_click(driver, brand);
		
    	brand.sendKeys(Brand);
    	search.click();
    	Thread.sleep(3000);
	}

	public void enter_type_and_click_on_search(String Type) {
		
		
		TestUtil.javascript_button_click(driver, type);
		
List<WebElement> e1= driver.findElements(By.xpath("//span[@class='mat-option-text']"));
		
JavascriptExecutor executor = (JavascriptExecutor)driver;
executor.executeScript("arguments[0].click();", e1.get(0));
    	search.click();
		
	}
    
    
}
