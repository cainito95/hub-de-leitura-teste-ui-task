import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let phone = faker.phone.number()
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type('teste123')
        cy.get('#confirm-password').type('teste123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should('contain', name)
        cy.loginUsuarioCadastrado(email, name)
    });
});