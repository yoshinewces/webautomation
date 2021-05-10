export class PipeForm {
    typeName(name) {
        cy.get('[name="customFields.your_name"]').type(name)
    }

    typeWhyWorkAtPipefy(why) {
        cy.get('[name="customFields.why_do_you_want_to_work_at_pipefy"]').type(why)
    }

    checkOption(option) {
        let element = '[id="publicForm_customFields.check_b_option_' + option + '"]'
        cy.get(element).check({force: true})
    }

    selectAnyUser(user) {
        let element = '[title="' + user + '"]'
        cy.get('[name="customFields.select_any_user"]').click()
        cy.get(element).click()
        cy.get('[name="customFields.what_time_is_it_now"]').type('{esc}')
    }

    pickDate(date) {
        let day = date.getDate()

        cy.get('[id="fake-pipe-field-publicForm-customFields_select_today_s_date-input"]').click()
        cy.get('[data-day]').contains(day).click()
        cy.get('[title="Salvar"]').click()
    }

    selectOption(option) {
        let element = '[name="customFields.select_option_' + option.toLowerCase() + '"]'
        cy.get(element).select(option)
    }

    typeTime(date) {
        let hour = date.toLocaleTimeString('pt-br', { hour: '2-digit' })
        let minute = date.toLocaleTimeString('pt-br', { minute: '2-digit' })
        let time = hour.substring(0,2) + minute
        cy.get('[name="customFields.what_time_is_it_now"]').type(time)
    }

    placePhoneNumber(countryCode, phoneNumber) {
        let element = '[data-country-code="' + countryCode + '"]'

        cy.get('[class="flag-container"]').click()
        cy.get('[class="country-list"]').children(element).click()

        cy.get('[name="customFields.place_a_phone_number_from_spain_country"]').type(phoneNumber)
    }

    submitFields() {
        cy.get('[data-pp-button="submit-fields"]').click()
    }

    typeCreatorEmail(email) {
        cy.get('[name="creatorEmail"]').type(email)
    }

    submitCreatorEmail() {
        cy.get('[data-pp-button="collect-creator-email"]').click()
    }

    assertSuccessMessage(message) {
        cy.get('[class="pp-new-public-form-success-message"]').should( ($h2) => {
            expect($h2.first()).to.contain(message)
        })
    }
}

export const onPipeForm = new PipeForm()
