import BasePage from "../../../basePage";
import FormSettings from "./formSettings";

class AssessmentForm extends BasePage {
    constructor() {
        super();
        this.locators = {
            dropdownValue: '.chosen-single',
            commentList: '.chat-list',
            fileForm: '.filesElement'


        };
        this.formSettings = new FormSettings();
    };

    /**
     * Assert that Choice and Buttons dropdown has correct option
     * @param {String} dropdownListValue - form title
     */
    assertChoiceButtonsOption(selectorName, dropdownListValue) {
        this.formSettings.getSelectorElementFromContainer(selectorName)
            .find(this.locators.dropdownValue)
            .should('contain', dropdownListValue);

        return this;
    }

    assertFormFile(filleName) {
        cy
            .get(this.locators.fileForm)
            .should('contain', filleName)

        return this;
    }

    /**
     * Assert that form comment is correct 
     * @param {String} formComment - form comment
     */
    assertFormComment(selectorName, formComment) {
        this.formSettings.getSelectorElementFromContainer(selectorName)
            .find(this.locators.commentList)
            .should('contain', formComment)

        return this;
    }

    /**
     * Assert that form description is correct 
     * @param {String} formDescription - form description
     */
    assertFormDescription(selectorName, formDescription) {
        this.formSettings.getSelectorElementFromContainer(selectorName)
            .find(this.basicLocators.textareaContainer)
            .should('contain', formDescription);

        return this;
    }

    /**
     * Assert that form title is correct 
     * @param {String} formTitle - form title
     */
    assertFormTitle(formTitle) {
        cy
            .get(this.basicLocators.formTitle)
            .should('have.value', formTitle);

        return this;
    }

    /**
     * Assert that form numbers has correct value
     * @param {String} formDescription - form description
     */
    assertFormNumbers(selectorName, number) {
        this.formSettings.getSelectorElementFromContainer(selectorName)
            .find(this.basicLocators.numberInputField)
            .should('have.value', number);

        return this;
    }

}

export default AssessmentForm;