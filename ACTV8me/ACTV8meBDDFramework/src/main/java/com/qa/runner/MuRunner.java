package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features={"D:\\Divyata QA\\ACTV8me\\ACTV8meBDDFramework\\src\\main\\java\\com\\qa\\features\\ACTV8meTest.feature"},
 glue={"com"},
plugin = { "pretty", "html:target/test-reports" }
//monochrome=true, //display console output in readable format
//strict=true, //check if any step not defined instep definition file
//dryRun=true //check mapping is proper between feature file and step file
)
public class MuRunner {

}

