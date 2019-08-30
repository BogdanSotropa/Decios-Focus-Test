
class Login {
    constructor() {

        this.url = "https://next.decisionfocus.com/";
    }

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

    assertThatUserIsInWorspacePage() {
        cy
            .get('.main-left-menu')
            .find('.list-header')
            .first()
            .should('exist')
            .and('have.text', 'Administrate')

        return this;
    }

    assertThatUserIsInLoginModal() {
        cy
            .get('#loginForm')
            .find('#email-label')
            .should('exist')
            .and('have.text', 'Email')

        return this;
    }

    assertThatUserIsRedirectedToForgotPasswordModal() {
        cy
            .get('.btn-reset-link')
            .should('exist')
            .and('have.text', 'Send Reset Link')

        return this;
    }

    selectBacktoLogin() {
        cy
            .get('.btn-link')
            .last()
            .click()

        return this;
    }

    selectForgotPassword() {
        cy
            .get('.btn-link')
            .first()
            .click()

        return this;
    }

    selectSingnIn() {
        cy
            .get('.btn-success')
            .click();

        return this;
    }

    signInButton() {
        cy
            .get('.btn-login')
            .click();

        return this;
    }

    typeEmail(email) {
        cy
            .get('#email')
            .type(email);

        return this;
    }

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