Feature: Menu
  It shows the options of the application

  Background:
    Given I go to the "PlayLists" page
      And the "titleHeader" should have the text "Playlists"
    When I click the "toggleMenu" button
    Then I should be on the "Menu" page

  Scenario: I click the login option
    When I click the "login" link
    Then I should be on the "Login" page
      And the "titleHeader" should have the text "Login"

  Scenario: I click the search option
    When I click the "search" link
    Then I should be on the "Search" page
      And the "titleHeader" should have the text "Search"

  Scenario: I click the browse option
    When I click the "browse" link
    Then I should be on the "Browse" page
      And the "titleHeader" should have the text "Browse"

  Scenario: I click the playlists option
    When I click the "playLists" link
    Then I should be on the "PlayLists" page
      And the "titleHeader" should have the text "Playlists"
