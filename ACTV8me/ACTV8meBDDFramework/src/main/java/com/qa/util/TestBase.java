package com.qa.util;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	
	public static WebDriver driver;
	public static Properties prop;
	
	
	public TestBase()
	{
		Properties prop= new Properties();
	}
	
	
	
	public static void initialization(){
		
		System.setProperty("webdriver.chrome.driver", "D:\\Divyata QA\\chrome exe\\chromedriver.exe");
		driver= new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://dashboard-staging-v4.actv8technologies.com/#/login");
	}
}
