// <reference types="cypress" />

import selectorLogin from "../pages/selectorLogin"
import selectorHome from "../pages/selectorHome"
// Page Object Model
// repositorio de objetos y selectores

describe('first test on tuesday', () => {
  // before describe quiero visitar la url
  // HOOKS 
  var selector = selectorLogin().dataLogin

  before ( function () {
    cy.log('before solo')
  })
  beforeEach( function () {
    cy.visit('')
    cy.log('Before each test log')
  })
  after ( function (){
    cy.log('Test finalizados')
    cy.log(' it ha sido completado')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    // reporte 
  })
  afterEach ( function () {
    cy.log('test afterEach')
  })
 
  // NEGATIVE TEST
  it('it has to validate negative test', () => {
    cy.get(selector.selectorUser).type(selector.nameRandom())
    cy.get(selector.selectorPassword).type(selector.numberRandom())
    cy.get(selector.selectorButton).click()
    cy.get(selector.selectorError).should('have.text',selector.messageError)
    cy.get(selector.selectorError).contains(selector.messageErrorContain)
  })
   // HAPPY PATH
   it('it has to validate website', () => {
    cy.get(selector.selectorUser).type(selector.user)
    cy.get(selector.selectorPassword).type(selector.password)
    cy.get(selector.selectorButton).click()
    cy.get(selector.productSelector).should('have.text','Products')
    cy.get(selector.price).should('have.text', "$29.99")
    cy.get(selector.price).contains("99")
  })
})
