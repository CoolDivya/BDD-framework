Feature: ACTV8me Application test


Scenario: Validate login page

    Given user opens browser
    When user enters username and password
    And user click on login button 
    Then user select an application
    Then user click Content and appears on content page
    Then click on advanced serach button and open search winodw
    And Enter Content id and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter name and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter brand and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter type and Click on Search 
   
   