Feature: PlayLists
  List of playlists

  Scenario: I am on PlayLists feature
    Given I go to the "PlayLists" page
      And the "titleHeader" should have the text "Playlists"
    Then the "playlistFirstLink" should have the text "Reggae"

  Scenario: I select first playlist of list
    Given I am on the "PlayLists" page
      And the "titleHeader" should have the text "Playlists"
    When I click the "playlistFirst" link
    Then I should be on the "PlayList" page
      And the "titleHeader" should have the text "Playlist"
      And the "detailPlayListTitle" should have the text "Playlist"

  Scenario: I click toggle Menu
    Given I am on the "PlayLists" page
    When I click the "toggleMenu" button
    Then I should be on the "Menu" page
      And the "titleMenu" should have the text "App Ionic 1.0.0"
