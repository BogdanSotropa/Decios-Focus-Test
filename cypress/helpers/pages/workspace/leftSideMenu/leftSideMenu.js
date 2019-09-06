
import BasePage from "../../../basePage";

class LeftSideMenu extends BasePage {
    constructor() {
        super();
        this.locators = {
            tablesOption: '#left-configured-menu'
        }
    };

    /**
     * Select option from Tables dropdown list
     */
    selectItemFromTablesList(item) {
        cy
            .get(this.locators.tablesOption)
            .contains(item)
            .wait(1000)
            .click()

        return this;
    }

    /**
     * Click on Tables from left side menu
     */
    clickTablesOption() {
        cy
            .get(this.locators.tablesOption)
            .click();

        return this;
    }
}

export default LeftSideMenu;