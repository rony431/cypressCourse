import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { recurse } from 'cypress-recurse'

Given("Go to blazedemo website", () => {
  cy.visit("/");
});
var user = `kitty2233${Math.floor(Math.random() * 100000)}`

When("create new user in sign up", () => {
  cy.get('#signin2').click()
  recurse(() => cy.get('#sign-username').clear().type(user),
    ($input) => $input.val() === user,
  )
  cy.get('#sign-password').type('123456')
  cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.')
  })
  cy.wait(2000)
});

When("login with valid user", () => {
  cy.get('#login2').click()
  cy.get('#loginusername').type('ronald123456')
  cy.get('#loginpassword').type('123456')
  cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  cy.get('#nameofuser').should('have.text' , 'Welcome' + ' ' + 'ronald123456')

});
When("send a message to contact us", () => {
  cy.get('#navbarExample > ul > li:nth-child(2) > a').click()
  cy.get('#recipient-email').type('pinguas@gmail.com')
  cy.get('#recipient-name').type('jogegualdo')
cy.get('#message-text').type('cabrooooooooooooo')
cy.get('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary').click()
});
Then("validate login and user", () => {
  // Jorge
  cy.get('#login2').click()
  cy.get('#loginusername').type(user)
  cy.get('#loginpassword').type('123456')
  cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  cy.get('#nameofuser').should('have.text' , 'Welcome' + ' ' + user)
  
});
Then("validate logout and user", () => {
  cy.get('#logout2').click()
  cy.get('#signin2').should('have.text', 'Sign up')
});

Then("validate browse main products", () => {
  cy.get('#itemc').click()
  cy.get('#tbodyid > div:nth-child(1) > div > div > h5').should('have.text' , '$360')
cy.get('#itemc:nth-child(3)').click()
cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('have.text' , 'Sony vaio i5')
cy.get('#itemc:nth-child(4)').click()
cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').should('have.text' , 'MacBook air')
});
Then("validate about us video", () => {
  cy.get('#navbarExample > ul > li:nth-child(3) > a').click()
  cy.get('#example-video > button').click()
  cy.wait(3600)
  cy.get('#videoModal > div > div > div.modal-header > button > span').click()
 
});
Then("message is sent correctly", () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Thanks for the message!!')
  })
});
When("add items to cart", () => {
  cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
  cy.get('#tbodyid > div.row > div > a').click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added')
  })
  cy.get('#cartur').click()
  cy.get('#page-wrapper > div > div.col-lg-1 > button').click()
});
Then("do checkout process", () => {
  cy.get('#name').type('Luisa E')
  cy.get('#country').type('Colombia')
  cy.get('#city').type('Bogota')
  cy.get('#card').type('546576372299')
  cy.get('#month').type('12')
  cy.get('#year').type('26')
  cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').should('have.text' , 'Thank you for your purchase!')
  cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click()
 
});