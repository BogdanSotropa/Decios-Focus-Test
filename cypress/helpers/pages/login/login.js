import BasePage from '../../basePage';

class Login extends BasePage {
    constructor() {
        super();
        this.locators = {
            emailInput: '#email',
            emailLabel: '#email-label',
            helpLink: '.btn-link',
            optionSignIn: '.btn-success',
            loginButton: '.btn-login',
            loginForm: '#loginForm',
            passwordInput: '#password',
            resetLink: '.btn-reset-link'
        };

        this.url = 'https://demo.decisionfocus.com/workspace/fb35bafe4e88d618e852bf985f00f892/dashboard/fb35bafe4e88d618e852bf985f00f892/fb35bafe4e88d618e852bf985f0d0e1e';
    }

    /**
     * Assert user connection successfully
     */
    assertUserConnectionSuccessfully() {
        this.assertThatUserIsInWorspacePage()
        cy
            .url()
            .should('eq', 'https://demo.decisionfocus.com/workspace/fb35bafe4e88d618e852bf985f00f892/dashboard/fb35bafe4e88d618e852bf985f00f892/fb35bafe4e88d618e852bf985f0d0e1e')

        return this;
    }

    /**
     * Assert user connection failed
     */
    assertUserConnectionFailed() {
        this.assertThatUserIsInLoginModule()
        cy
            .url()
            .should('eq', 'https://demo.decisionfocus.com/')

        return this;
    }

    /**
     * Assert that user is in Workspace Page
     */
    assertThatUserIsInWorspacePage() {
        cy
            .get(this.basicLocators.mainLeftMenu)
            .find(this.basicLocators.listLeftMenu)
            .first()
            .should('exist')
            .and('have.text', 'Administrate')

        return this;
    }

    /**
     * Verify that user is in Login Page
     */
    assertThatUserIsInLoginModule() {
        cy
            .get(this.locators.loginForm)
            .find(this.locators.emailLabel)
            .should('exist')
            .and('have.text', 'Email')

        return this;
    }

    /**
     * Verify that user is in Forgot Password Module
     */
    assertThatUserIsRedirectedToForgotPasswordModule() {
        cy
            .get(this.locators.resetLink)
            .should('exist')
            .and('have.text', 'Send Reset Link')

        return this;
    }

    /**
     * Logout user from workspace page
     */
    logoutUser() {
        cy
            .get(this.basicLocators.dropdownUser)
            .click()
            .find(this.basicLocators.logoutButton)
            .click()

        return this;
    }

    /** Perform SignIn by typing email paasword and press Sign In button
     * @param email - user email
     * @param password - user password
     */
    performSignIn(email, password) {
        this.typeEmail(email)
            .typePassword(password)
            .pressSignInButton()

        return this;
    }

    /**
     * Go back to Sign In Page by pressing Back to Login link
     */
    pressBacktoLoginLink() {
        cy
            .get(this.locators.helpLink)
            .last()
            .click()

        return this;
    }

    /**
     * Go to Forgot Password module by pressing Forgot Password link
     */
    pressForgotPasswordLink() {
        cy
            .get(this.locators.helpLink)
            .first()
            .click()

        return this;
    }

    /**
     * Select Sign In by pressing Sign In button
     */
    pressSignInWithEmailOption() {
        cy
            .get(this.locators.optionSignIn)
            .click();

        return this;
    }

    /**
     * Sign In by pressing Sign In button
     */
    pressSignInButton() {
        cy
            .get(this.locators.loginButton)
            .click();

        return this;
    }

    /**
     * Type user email
     * @param email - user email
     */
    typeEmail(email) {
        cy
            .get(this.locators.emailInput)
            .type(email);

        return this;
    }

    /**
     * Type user password
     * @param password - user password
     */
    typePassword(password) {
        cy
            .get(this.locators.passwordInput)
            .type(password);

        return this;
    }

    visit() {
        cy
            .visit(this.url);

        return this;
    }
}

export default Login;