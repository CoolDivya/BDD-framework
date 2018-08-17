package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase{

	
	
	@FindBy(id="mat-input-0")
	WebElement username;
	
	@FindBy(id="mat-input-1")
	WebElement password;
	
	
	@FindBy(xpath="//button[@type='submit']")
	WebElement login_btn;
	
	
	@FindBy(xpath="//*[contains(text(),'Mobii')]")
	WebElement select_app;
	
	
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public void enters_username_and_password(String uname, String pwd)
	{
		username.sendKeys(uname);
		password.sendKeys(pwd);
	}
	
	
	public void click_on_login_button()
	{
		login_btn.click();
	}
	
	public Content_Advanced_SearchPage select_application() throws InterruptedException
	{
		select_app.click();
		return new Content_Advanced_SearchPage();
		
	}
}
