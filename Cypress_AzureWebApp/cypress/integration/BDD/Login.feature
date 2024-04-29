Feature: Login 

    Login feature
    Scenario: Positive Login
    Given User has navigated to Application
    When User enters login credentials 
    And Clicks on Login Button
    Then User should be logged in to application
    
    