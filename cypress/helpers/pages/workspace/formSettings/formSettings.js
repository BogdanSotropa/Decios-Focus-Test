import BasePage from "../../../basePage";

class FormSettings extends BasePage {
    constructor() {
        super();
        this.locators = {
            dropContainer: '#drop',
            createButton: '#updateElement',
            createButtonContainer: '.container-fluid',
            dropdownContainer: '.chosen-container',
            formContainers: '.section-header',
            formDescription: '.note-editing-area',
            formModule: '#aside-container',
            labelChoiceButton: '.value-spacer',
            nummberContainer: '.form-control',
            deleteButton: '.btn-danger'
        };
    };

    /**
     * Add form comment
     * @param {String} selectorName - name of selector
     * @param {String} text - comment
     */
    addFormComment(selectorName, text) {
        const parent = this.getSelectorElementFromContainer(selectorName)
        this.addTextInTextarea(parent, text)

        return this;
    }

    /**
    * Add form description
    * @param {String} selectorName - name of selector
    * @param {String} text - description
    */
    addFormDescription(selectorName, text) {
        const parent = this.getSelectorElementFromContainer(selectorName)
        this.addTextInTextarea(parent, text)

        return this;
    }

    /**
     * Add form numbers
     * @param {String} selectorName - name of selector
     * @param {Number} number
     */
    addFormNumbers(selectorName, number) {
        const parent = this.getSelectorElementFromContainer(selectorName)
        this.addNumber(parent, number)

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

    /**
     * Add numbers in numbers container
     * @param parent - web element
     * @param {Number} number
     */
    addNumber(parent, number) {
        parent
            .find(this.locators.nummberContainer)
            .type(number)

        return this;
    }

    /**
     * Add text in textarea 
     * @param parent - web element
     * @param {String} text - text
     */
    addTextInTextarea(parent, text) {
        parent
            .find(this.basicLocators.textareaContainer)
            .type(text)

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
     * Click on form container
     */
    clickFormContainers(containerName) {
        cy
            .get(this.locators.formContainers)
            .contains(containerName)
            .click()

        return this;
    }

    /**
     * Drop a file 
     */
    dropFileContainer() {
        const fileName = 'testFile.txt';
        cy.fixture(fileName).then(fileContent => {
            cy.get(this.locators.dropContainer).upload(
                { fileContent, fileName, mimeType: 'cypress/txt' },
                { subjectType: 'drag-n-drop' },
            );
        });

        return this;
    }

    /**
     * Get Form Container
     * @param {String} containerName - name of container
     */
    getFormContainer(containerName) {
        return cy
            .get(this.locators.formModule)
            .contains(this.locators.formModule, containerName)
    }

    /**
     * Get selector element from container
     * @param parent - web element
     * @param {String} selectorName - name of selector
     */
    getSelectorElementFromContainer(selectorName) {
        return cy
            .get(this.locators.formModule)
            .contains(selectorName)
            .parent()
    }

    /**
     * Select Choice Buttons dropdown option
     * @param {String} selectorName - name of selector
     * @param {String} option - option from dropdown
     */
    selectChoiceButtonsOption(selectorName, option) {
        const parent = this.getSelectorElementFromContainer(selectorName)
        super.selectItemFromDropdownList(parent, option)

        return this;
    }

    /**
     * Delete form by pressing for 5 seconds click on Delete button
     */
    deleteForm() {
        cy
            .get(this.locators.deleteButton)
            .trigger('mousedown')
            .wait(5000)

        return this;
    }
}

export default FormSettings;