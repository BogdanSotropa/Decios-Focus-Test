
class BasePage {
    static get generalLocators() {
        return {
            dropdownContainer: '.chosen-container',
            dropdownUser: '#dropdown-user',
            formTitle: '#title',
            listLeftMenu: '.list-header',
            logoutButton: '.logout-button-li',
            mainLeftMenu: '.main-left-menu',
            textareaInput: '.note-editable',
            numberInputField: '.form-control'
        };
    }

    constructor() {
        this.basicLocators = BasePage.generalLocators;
    }

    /**
     * Select Item from Dropdown List
     * @param parent - web element
     * @param {String} option - item from dropdown list
     */
    selectItemFromDropdownList(parent, option) {
        parent
            .find(BasePage.generalLocators.dropdownContainer)
            .first()
            .click()
        parent
            .contains(option)
            .click();
        return this;
    }
}

export default BasePage;
