Feature: Registration

    This feature registers the user to Azurewebapp

    Scenario: User Registration
    Given I open ecommerce page
    When I enter details of registration
    And click register
    Then User should be registered  