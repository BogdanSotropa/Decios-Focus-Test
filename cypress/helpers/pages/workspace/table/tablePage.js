import BasePage from "../../../basePage"

class TablePage extends BasePage {
    constructor() {
        super();
        this.locators = {
            buttonPreview: '.hover-show',
            tableRow: '#376aaefd0d14787157516e9cdb4ad3b6',
            rowTitleContainer: '.sorting_1',
            dropdownValue: '.chosen-single'
        };
    };

    /**
     * Assert that form exist in table page
     * @param {String} formTitle 
     */
    assertFormExistInTablePage(formTitle) {
        this.getFormRow(formTitle)
            .should('exist');

        return this;
    }

    /**
     * Get Form Row and hover until appear Preview Button and click the that button
     * @param {String} formTitle - form title
     */
    clickPreviewButton(formTitle) {
        this.getFormRow(formTitle)
            .trigger('mouseover')
            .parent()
            .parent()
            .find(this.locators.buttonPreview)
            .click()

        return this;
    }
    clickButton() {
        cy
            .get(this.locators.buttonPreview)
            .click()

        return this;
    }

    /**
     * Assert that form title is correct 
     * @param {String} formTitle - form title
     */
    assertFormTitleIsCorrect(formTitle) {
        cy
            .get(this.basicLocators.formTitle)
            .should('have.value', formTitle);

        return this;
    }

    /**
     * Assert that form title is correct 
     * @param {String} dropdownListValue - form title
     */
    assertDropdownSelectorHaveCorrectValue(dropdownListValue) {
        cy
            .get(this.locators.dropdownValue)
            .first()
            .should('contain', dropdownListValue);

        return this;
    }

    /**
     * Assert that form description is correct 
     * @param {String} formDescription - form description
     */
    assertFormDescriptionIsCorrect(formDescription) {
        cy
            .get(this.basicLocators.textareaInput).first()
            .should('have.text', formDescription);

        return this;
    }
    assertNumbersInputFieldHaveCorrectValue(number) {
        cy
            .get(this.basicLocators.numberInputField)
            .last()
            .should('have.value', number);

        return this;
    }

    /**
     * Get Form Row
     * @param {String} formTitle - form title
     */
    getFormRow(formTitle) {
        return cy
            .get(this.locators.tableRow)
            .find(this.locators.rowTitleContainer)
            .contains(formTitle)
    }
}

export default TablePage;