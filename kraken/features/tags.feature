Feature: Tags

  @web @user1
  Scenario: Authenticate in ghost and should be redirected to admin dashboard
    Given I navigate to page "<GHOST_URL>"
    And I wait for 2 seconds
    And I authenticate using the credentials "<USERNAME>" and "<PASSWORD>" and go to "<GHOST_URL>"
    And I wait for 2 seconds
    Then I should see the title "Dashboard"

  @web @user2
    Scenario: Create a new valid tag
    Given I navigate to page "<GHOST_URL>"
    And I wait for 2 seconds
    And I authenticate using the credentials "<USERNAME>" and "<PASSWORD>" and go to "<GHOST_URL>"
    And I wait for 2 seconds
    And I navigate to tags list page
    And I wait for 2 seconds
    Then I should see the title "Tags"
    Then I should see a create new tag button
    And I click on create new tag
    And I wait for 2 seconds
    Then I should see the title containing "New tag"
    Then I should see input with name "name"
    Then I should see input with name "accent-color"
    And I enter random tag name
    And I enter random tag accent color
    And I click on save new tag
    And I wait for 1 seconds
    Then I should have see new tag being saved

  @web @user3
  Scenario: Create a new tag without accent color
    Given I navigate to page "<GHOST_URL>"
    And I wait for 2 seconds
    And I authenticate using the credentials "<USERNAME>" and "<PASSWORD>" and go to "<GHOST_URL>"
    And I wait for 2 seconds
    And I navigate to tags list page
    And I wait for 2 seconds
    Then I should see the title "Tags"
    Then I should see a create new tag button
    And I click on create new tag
    And I wait for 2 seconds
    Then I should see the title containing "New tag"
    Then I should see input with name "name"
    And I enter random tag name
    And I click on save new tag
    And I wait for 1 seconds
    Then I should have see new tag being saved

  @web @user4
  Scenario: Create a new tag without title
    Given I navigate to page "<GHOST_URL>"
    And I wait for 2 seconds
    And I authenticate using the credentials "<USERNAME>" and "<PASSWORD>" and go to "<GHOST_URL>"
    And I wait for 2 seconds
    And I navigate to tags list page
    And I wait for 2 seconds
    Then I should see the title "Tags"
    Then I should see a create new tag button
    And I click on create new tag
    And I wait for 2 seconds
    Then I should see the title containing "New tag"
    And I click on save new tag
    And I wait for 1 seconds
    Then I should see a validation error when no title specified

  @web @user5
  Scenario: Create a new tag but cancel creation process
    Given I navigate to page "<GHOST_URL>"
    And I wait for 2 seconds
    And I authenticate using the credentials "<USERNAME>" and "<PASSWORD>" and go to "<GHOST_URL>"
    And I wait for 2 seconds
    And I navigate to tags list page
    And I wait for 2 seconds
    Then I should see the title "Tags"
    Then I should see a create new tag button
    And I click on create new tag
    And I wait for 2 seconds
    Then I should see the title containing "New tag"
    And I wait for 1 seconds
    And I navigate to tags list page
    And I wait for 2 seconds
    Then I should see the title "Tags"

