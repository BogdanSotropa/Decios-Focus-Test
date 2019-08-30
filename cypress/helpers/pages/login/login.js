
class Login {
    constructor() {

        this.url = "https://next.decisionfocus.com/";
    }

    /**
     * Verify that user is able to connect with valid data
     * @param email - user email
     * @param password - user password
     */
    assertUserIsAbleToSignInWithValidData(email, password) {
        this.typeEmail(email)
        this.typePassword(password)
        this.signInButton()
        this.assertThatUserIsInWorspacePage()
        cy
            .url()
            .should('eq', 'https://next.decisionfocus.com/myworkspaces')

        return this;
    }

    /**
     * Verify that user is not able to connect with invalid data
     * @param email - user email
     * @param password - user password
     */
    assertUserIsNotAbleToSignInWithInvalidData(email, password) {
        this.typeEmail(email)
        this.typePassword(password)
        this.signInButton()
        this.assertThatUserIsInLoginModal()
        cy
            .url()
            .should('eq', 'https://next.decisionfocus.com/')

        return this;
    }

    /**
    * Verify that user is in Workspace Page
    */
    assertThatUserIsInWorspacePage() {
        cy
            .get('.main-left-menu')
            .find('.list-header')
            .first()
            .should('exist')
            .and('have.text', 'Administrate')

        return this;
    }

    /**
     * Verify that user is in Login Page
     */
    assertThatUserIsInLoginModal() {
        cy
            .get('#loginForm')
            .find('#email-label')
            .should('exist')
            .and('have.text', 'Email')

        return this;
    }

    /**
     * Verify that user is in Forgot Password Modal
     */
    assertThatUserIsRedirectedToForgotPasswordModal() {
        cy
            .get('.btn-reset-link')
            .should('exist')
            .and('have.text', 'Send Reset Link')

        return this;
    }

    /**
     * Go back to Login Page by pressing Back to Login link
     */
    selectBacktoLogin() {
        cy
            .get('.btn-link')
            .last()
            .click()

        return this;
    }

    /**
     * Go to Forgot Password modal by pressing Forgot Password link
     */
    selectForgotPassword() {
        cy
            .get('.btn-link')
            .first()
            .click()

        return this;
    }

    /**
     * Select SignIn by pressing Sign In button
     */
    selectSignIn() {
        cy
            .get('.btn-success')
            .click();

        return this;
    }

    /**
     * Sign In by pressing Sign In button
     * 
     */
    signInButton() {
        cy
            .get('.btn-login')
            .click();

        return this;
    }

    /**
     * Type user email
     * @param email - user email
     */
    typeEmail(email) {
        cy
            .get('#email')
            .type(email);

        return this;
    }

    /**
     * Type user password
     * @param password - user password
     */
    typePassword(password) {
        cy
            .get('#password')
            .type(password);

        return this;
    }

    visit() {
        cy
            .visit(this.url)

        return this;
    }
}

export default Login;