Feature: Test Yahoo.com website

  @suite
  Scenario: As a user, i should visit yahoo.com website on browser
    Given I visit "https://www.yahoo.com/" page
    Then I am on "Yahoo" Page
    When I click on "News" link on page
    Then I am on "Yahoo News UK" Page

  @suite
  Scenario: As a user, i should visit yahoo.com website on browser
    Given I visit "https://www.yahoo.com/" page
    Then I am on "Yahoo" Page
