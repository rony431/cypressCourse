Feature: Account creation

    Feature sign up blazedemo
    Background:
        Given Go to blazedemo website
    Scenario: sign up account creation
        When create new user in sign up
        Then validate login and user
        Then validate logout and user 
     Scenario: Browsing Phones, Laptops, Monitors
        When login with valid user
        Then validate browse main products
    Scenario: About us validation
        When login with valid user
        Then validate about us video  
    Scenario: Send a message through Contact
        When send a message to contact us
        Then message is sent correctly
    Scenario: validate Shopping cart and checkout
        When add items to cart
        Then do checkout process  
    