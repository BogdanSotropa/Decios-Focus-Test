
class Login {
    constructor() {

        this.url = "https://next.decisionfocus.com/workspace/fb35bafe4e88d618e852bf985f00f892/dashboard/fb35bafe4e88d618e852bf985f00f892/fb35bafe4e88d618e852bf985f0d0e1e";
    }

    selectSingnIn() {
        cy.get('.btn-success').click();

        return this;
    }

    typeEmailAndPassword(email, password) {
        cy
            .get('#email')
            .type(email)
            .get('#password')
            .type(password)

        return this;
    }

    selectSingnIn() {
        cy.get('.btn-success').click();

        return this;
    }

    visit() {
        cy.visit(this.url);

        return this;
    }
}

export default Login;