
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
    selectItemFromTabelsList(item) {
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
    clickTabelsOption() {
        cy
            .get(this.locators.tablesOption)
            .click();

        return this;
    }
}

export default LeftSideMenu;