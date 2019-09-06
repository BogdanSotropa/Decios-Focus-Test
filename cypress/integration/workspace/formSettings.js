'use strict';

import CreateForm from "../../helpers/pages/workspace/createFormModal/createForm";
import Login from "../../helpers/pages/login/login"
import LeftSideMenu from "../../helpers/pages/workspace/leftSideMenu/leftSideMenu";
import TablePage from "../../helpers/pages/workspace/table/tablePage";

describe('Main Form Settings', function () {

    const createForm = new CreateForm(),
        login = new Login(),
        leftSideMenu = new LeftSideMenu(),
        tablePage = new TablePage();

    beforeEach(function () {
        login
            .visit()
            .pressSignInWithEmailOption()
            .performSignIn('catalin.cobzaru@spin-software.com', 'D3cision!!')
    });

    xit('Create New Form', function () {
        leftSideMenu
            .clickTablesOption()
            .selectItemFromTablesList('ADD')
        createForm
            .addFormTitle('Title Test')
            .addFormDescription('Description', 'Description Test')
            .selectChoiceButtonsOption('Choice buttons', 'choice3')
            .addFormComment('Comments', 'Comment test')
            .addFormNumber('Numbers', '2')
            .createForm();
        leftSideMenu
            .selectItemFromTablesList('table');
        tablePage
            .assertFormExistInTablePage('Title Test');
    });

    it('Check the new created form contains the correct data', function () {
        leftSideMenu
            .clickTablesOption()
            .selectItemFromTablesList('table');
        tablePage
            .clickPreviewButton('Title Test')
            // .clickButton()
            .assertFormTitleIsCorrect('Title Test')
            .assertFormDescriptionIsCorrect('Description Test')
            .assertDropdownSelectorHaveCorrectValue('choice3')
            .assertNumbersInputFieldHaveCorrectValue('2')
    });

});

