'use strict';

import FormSettings from "../../helpers/pages/workspace/formSettings/formSettings";
import Login from "../../helpers/pages/login/login"
import LeftSideMenu from "../../helpers/pages/workspace/leftSideMenu/leftSideMenu";
import TablePage from "../../helpers/pages/workspace/table/tablePage";
import AssessmentForm from "../../helpers/pages/workspace/formSettings/assessmentForm";

describe('Form Settings', function () {

    const formSettings = new FormSettings(),
        login = new Login(),
        leftSideMenu = new LeftSideMenu(),
        tablePage = new TablePage(),
        assessmentForm = new AssessmentForm();

    beforeEach(function () {
        login
            .visit()
            .pressSignInWithEmailOption()
            .performSignIn('catalin.cobzaru@spin-software.com', 'D3cision!!')
    });

    it('Create New Form', function () {

        leftSideMenu
            .clickTabelsOption()
            .selectItemFromTabelsList('ADD')
        formSettings
            .clickFormContainers('empty header')
            .addFormTitle('Title Test')
            .addFormDescription('Description', 'Description Test')
            .clickFormContainers('header1')
            .dropFileContainer()
            .selectChoiceButtonsOption('Choice buttons', 'choice3')
            .addFormComment('Comments', 'Comment test')
            .addFormNumbers('Numbers', '2')
            .createForm();
        leftSideMenu
            .selectItemFromTabelsList('table');
        tablePage
            .assertThatFormExistInTablePage('Title Test', true);
    });

    it('Check the new created form contains the correct data', function () {
        leftSideMenu
            .clickTabelsOption()
            .selectItemFromTabelsList('table');
        tablePage
            .assertThatTitleExistInTableRow('Title Test')
            .assertThatDescriptionExistInTableRow('Title Test', 'Description Test')
            .assertThatCreatorExistInTableRow('Title Test', 'Catalin Cobzaru')
            .assertCreatedDateExistInTableRow('Title Test')
            .assertLastChangedDateExistInTableRow('Title Test')
            .assertLastChangedByExistInTableRow('Title Test', 'Catalin Cobzaru')
            .clickPreviewButton('Title Test')
        assessmentForm
            .assertFormTitle('Title Test')
            .assertFormDescription('Description', 'Description Test')
            .assertChoiceButtonsOption('Choice buttons', 'choice3')
            .assertFormFile('testFile.txt')
            .assertFormComment('Comments', 'Comment test')
            .assertFormNumbers('Numbers', '2')
    });

    it('Delete form and check that form was deleted from table page', function () {
        leftSideMenu
            .clickTabelsOption()
            .selectItemFromTabelsList('table');
        tablePage
            .clickPreviewButton('Title Test')
        formSettings
            .deleteForm()
        leftSideMenu
            .selectItemFromTabelsList('table');
        tablePage
            .assertThatFormExistInTablePage('Title Test', false)
    });

});

