Feature: ACTV8me Application test


Scenario Outline: Validate login page

    Given user opens browser
    When user enters "<username>" and "<password>"
    And user click on login button 
    Then user select an application
    Then user click Content and appears on content page
    Then click on advanced serach button and open search winodw
    And Enter contactID"<Content id>" and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter Name "<name>" and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter Brand "<brand>" and Click on Search
    
    Then click on advanced serach button and open search winodw
    And Enter Type "<type>" and Click on Search 
    
    
   Examples:
   
   |     username           | password | Content id | name                        | brand | type |
   | superadmin@app.com     | password | 123        | $1 Off Cherry Berry Chiller | Sperry| Offer|
   
   
   