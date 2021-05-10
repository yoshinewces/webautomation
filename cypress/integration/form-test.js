/// <reference types="cypress" />

import { onPipeForm, PipeForm } from "../support/pipeform"

describe('Test form submit', () => {

    beforeEach('Open form', () => {
        cy.visit('public/form/6qhKljB1')
    })

    it('Submit form success', () => {
        let date = new Date()

        //filling Form
        onPipeForm.typeName('Jose da Silva')
        onPipeForm.typeWhyWorkAtPipefy('Lorem ipsum dolor sit amet')
        onPipeForm.checkOption('B')
        onPipeForm.selectAnyUser('felipe fantoni')
        onPipeForm.pickDate(date)
        onPipeForm.selectOption('B')
        onPipeForm.typeTime(date)
        onPipeForm.placePhoneNumber('es', '987654321')
        onPipeForm.submitFields()
        onPipeForm.typeCreatorEmail('josedasilva@blabla.com')
        onPipeForm.submitCreatorEmail()

        //Test assertion
        onPipeForm.assertSuccessMessage('Verifique seu email')

    })

})