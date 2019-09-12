import BasePage from "../../../basePage";
import FormModule from "../formSettings/assessmentForm";

class TablePage extends BasePage {
    constructor() {
        super();
        this.locators = {
            previewButton: '.hover-show',
            tableRow: '.odd, .even',
            titleContainer: '.sorting_1',
        };
    };

    /**
     * Assert that form exist in table page
     * @param {String} formTitle - form title
     * @param status - boolean, checked or not
     */
    assertThatFormExistInTablePage(formTitle, status) {
        this.getTableRow(formTitle)
            .should(status ? 'exist' : 'not.exist');

        return this;
    }

    /**
     * Assert created date exist in table row
     * @param {String} formTitle - form title
     */
    assertCreatedDateExistInTableRow(formTitle) {
        const createdDate = Cypress.moment().format('YYYY-MM-DD')
        this.getTableRow(formTitle)
            .find('td')
            .eq(3)
            .should('contain', createdDate)

        return this;
    }

    /**
     * Assert last changed date exist in table row
     * @param {String} formTitle - form title
     */
    assertLastChangedDateExistInTableRow(formTitle) {
        const lastChangedDate = Cypress.moment().format('YYYY-MM-DD')
        this.getTableRow(formTitle)
            .find('td')
            .eq(4)
            .should('contain', lastChangedDate)

        return this;
    }

    /**
     * Assert last changed by exist in table row
     * @param {String} formTitle - form title
     * @param {String} lastChangedBy
     */
    assertLastChangedByExistInTableRow(formTitle, lastChangedBy) {
        this.getTableRow(formTitle)
            .find('td')
            .eq(5)
            .should('contain', lastChangedBy)

        return this;
    }

    /**
     * Assert that form creator exist in table row
     * @param {String} formTitle - form title
     * @param {String} formCreator - form creator
     */
    assertThatCreatorExistInTableRow(formTitle, formCreator) {
        this.getTableRow(formTitle)
            .find('td')
            .eq(2)
            .should('contain', formCreator)

        return this;
    }

    /**
     * Assert that form description exist in table row
     * @param {String} formTitle - form title
     * @param {String} formDescription - form description
     */
    assertThatDescriptionExistInTableRow(formTitle, formDescription) {
        this.getTableRow(formTitle)
            .find('td')
            .eq(1)
            .should('contain', formDescription)

        return this;
    }

    /**
     * Assert that form title exist in table row
     * @param {String} formTitle - form title
     */
    assertThatTitleExistInTableRow(formTitle) {
        this.getTableRow(formTitle)
            .find('td')
            .eq(0)
            .contains(formTitle)

        return this;
    }

    /**
     * Get Form Row and hover until appear Preview Button and click the button
     * @param {String} formTitle - form title
     */
    clickPreviewButton(formTitle) {
        this.getTableRow(formTitle)
            .trigger('mouseover')
            .find(this.locators.previewButton)
            .click()

        return new FormModule();
    }

    /**
     * Get Form Row
     * @param {String} formTitle - form title
     */
    getTableRow(formTitle) {
        return cy
            .get(this.locators.titleContainer)
            .contains(this.locators.titleContainer, formTitle)
            .parent()
    }

}

export default TablePage;