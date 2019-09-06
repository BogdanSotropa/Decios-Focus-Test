import BasePage from "../../../basePage"

class CreateForm extends BasePage {
    constructor() {
        super();
        this.locators = {
            createButton: '#updateElement',
            createButtonContainer: '.container-fluid',
            formDescription: '.note-editing-area',
            formContainer: '#aside-container',
            dropdownContainer: '.chosen-container',
            labelChoiceButton: '.value-spacer',
            numberInputField: '.form-control'
        };
    };

    /**
     * Get Select Element From Container
     * @param parent - web element
     * @param {String} selectorName - name of selector
     */
    addDatatInTextarea(parent, data) {
        parent
            .find(this.basicLocators.textareaInput)
            .click()
            .clear()
            .type(data)

        return this;
    }

    /**
     * Add form comment
     * @param parent - web element
     * @param {Number} number
    */
    addNumberInInputField(parent, number) {
        parent
            .find(this.locators.numberInputField)
            .click()
            .clear()
            .type(number)

        return this;
    }

    /**
     * Create form by pressing click on Create Form button
    */
    createForm() {
        cy
            .get(this.locators.createButtonContainer)
            .find(this.locators.createButton)
            .click()

        return this;
    }

    /**
     * Get Form Container
     * @param {String} containerName - name of container
     */
    getFormContainer(containerName) {
        return cy
            .get(this.locators.formContainer)
            .contains(this.locators.formContainer, containerName)
    }

    /**
     * Get Select Element From Container
     * @param parent - web element
     * @param {String} selectorName - name of selector
     */
    getSelectElementFromContainer(selectorName) {
        return cy
            .get(this.locators.formContainer)
            .contains(selectorName)
            .parent()
    }

    /**
     * Select Choice Buttons dropdown option
     * @param {String} selectorName - name of selector
     * @param {String} option - option from dropdown
     */
    selectChoiceButtonsOption(selectorName, option) {
        const parent = this.getSelectElementFromContainer(selectorName)
        super.selectItemFromDropdownList(parent, option)

        return this;
    }

    /**
     * Add form comment
     * @param {String} selectorName - name of selector
     * @param {Number} number
     */
    addFormNumber(selectorName, number) {
        const parent = this.getSelectElementFromContainer(selectorName)
        this.addNumberInInputField(parent, number)

        return this;
    }

    /**
     * Add form comment
     * @param {String} selectorName - name of selector
     * @param {String} data - comment
     */
    addFormComment(selectorName, data) {
        const parent = this.getSelectElementFromContainer(selectorName)
        this.addDatatInTextarea(parent, data)

        return this;
    }

    /**
     * Add form description
     * @param {String} selectorName - name of selector
     * @param {String} data - description
     */
    addFormDescription(selectorName, data) {
        const parent = this.getSelectElementFromContainer(selectorName)
        this.addDatatInTextarea(parent, data)

        return this;
    }

    /**
     * Add form title
     * @param {String} formTitle - form title
     */
    addFormTitle(formTitle) {
        cy
            .get(this.basicLocators.formTitle)
            .type(formTitle)

        return this;
    }
}

export default CreateForm;