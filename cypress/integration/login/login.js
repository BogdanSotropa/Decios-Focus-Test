'use strict';

import Login from "../../helpers/pages/login/login";

describe('Login Settings', function () {

  const login = new Login();

  it('Verify that User is not able to login with empty email and empty password', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .pressSignInButton()
      .assertUserConnectionFailed();
  });

  it('Verify that User is able to login with valid email and valid password', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .performSignIn('catalin.cobzaru@spin-software.com', 'D3cision!!')
      .assertUserConnectionSuccessfully()
      .logoutUser();
  });

  it('Verify that User is not able to login with valid email and invalid password', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .performSignIn('catalin.cobzaru@spin-software.com', '3cihbjgg')
      .assertUserConnectionFailed();
  });

  it('Verify that User is not able to login with invalid email and invalid password', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .performSignIn('talin.cobzaru@spin-software.com', 'D3cion!!')
      .assertUserConnectionFailed();
  });

  it('Verify that User is not able to login with invalid email and valid password', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .performSignIn('talin.cobzaru@spin-software.com', 'D3cision!!')
      .assertUserConnectionFailed();
  });

  it('Verify that User is redirected to Forgot password module when clicking on Forgot Password link', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .pressForgotPasswordLink()
      .assertThatUserIsRedirectedToForgotPasswordModule();
  });

  it('Verify that User is redirected to Login module when clicking on Back to Login link', function () {
    login
      .visit()
      .pressSignInWithEmailOption()
      .pressForgotPasswordLink()
      .pressBacktoLoginLink()
      .assertThatUserIsInLoginModule();
  });
});

