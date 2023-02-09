// <reference types="cypress" />

import selectorLogin from "../pages/selectorLogin"
import selectorHome from "../pages/selectorHome"
// POM

describe('first test on tuesday', () => {
  before (function (){
    
  })
  // HAPPY PATH
   var selector = selectorLogin().dataLogin
  it('it has to validate website', () => {
    cy.visit('')
    cy.get(selector.selectorUser).type(selector.user)
    cy.get(selector.selectorPassword).type(selector.password)
    cy.get(selector.selectorButton).click()
    cy.get('#header_container>div>span').should('have.text','Products')
    cy.get('div:nth-child(1) > div> div.pricebar > div').should('have.text', "$29.99")
    cy.get('div:nth-child(1) > div> div.pricebar > div').contains("99")
  })
  // NEGATIVE TEST
  it('it has to validate negative test', () => {
    cy.visit('')
    cy.get(selector.selectorUser).type(selector.nameRandom())
    cy.get(selector.selectorPassword).type(selector.numberRandom())
    cy.get(selector.selectorButton).click()
    cy.get('form > div> h3').should('have.text','Epic sadface: Username and password do not match any user in this service')
    cy.get('form > div> h3').contains('Username and password do not match')
  })
})
