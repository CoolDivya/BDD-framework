Feature: ACTV8me Application test


Scenario: Validate login page

    Given user opens browser
    Then user enters username and password
    Then user click on login button
    Then click on application
 
Scenario: Validate Advanced Search function for Content

   Given user is on Content page
   When click on advanced serach button and open search winodw
   
   
   