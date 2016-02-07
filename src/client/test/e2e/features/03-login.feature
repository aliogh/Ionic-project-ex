@runThis
Feature: Login
  It let authenticate on the application

  Background:
    Given I go to the "PlayLists" page
      And the "titleHeader" should have the text "Playlists"
    When I click the "toggleMenu" button
    Then I should be on the "Menu" page
    When I click the "login" link
    Then I should be on the "Login" page
    And the "titleHeader" should have the text "Login"

  Scenario: I authentication on the application
    When I log on the application
    Then I should be on the "PlayLists" page
