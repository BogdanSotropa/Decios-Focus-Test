'use strict';

import Login from "../../helpers/pages/login/login";

describe('Login Settings', function () {

  const login = new Login();


  it('Verify that User is able to login with valid email and valid password', function () {

    login
      .visit()
      .selectSingnIn()
      .assertUserIsAbleToSignInWithValidData('catalin.cobzaru@spin-software.com', 'D3cision!!');
  });

  xit('Verify that User is not able to login with empty email and empty password', function () {

    login
      .visit()
      .selectSingnIn()
      .assertUserIsNotAbleToSignInWithInvalidData(" ", " ");
  });

  it('Verify that User is not able to login with invalid email and invalid password', function () {

    login
      .visit()
      .selectSingnIn()
      .assertUserIsNotAbleToSignInWithInvalidData('talin.cobzaru@spin-software.com', 'D3cion!!');
  });

  it('Verify that User is not able to login with invalid email and valid password', function () {

    login
      .visit()
      .selectSingnIn()
      .assertUserIsNotAbleToSignInWithInvalidData('talin.cobzaru@spin-software.com', 'D3cision!!');
  });

  xit('Verify that User is not able to login with valid email and invalid password', function () {

    login
      .visit()
      .selectSingnIn()
      .assertUserIsNotAbleToSignInWithInvalidData('catalin.cobzaru@spin-software.com', '3cihbjgg');
  });

  it('Verify that User is redirected to Forgot password modal when clicking on Forgot Password link', function () {

    login
      .visit()
      .selectSingnIn()
      .selectForgotPassword()
      .assertThatUserIsRedirectedToForgotPasswordModal();
  });

  it('Verify that User is redirected to Login modal when clicking on Back to Login link', function () {

    login
      .visit()
      .selectSingnIn()
      .assertThatUserIsInLoginModal();
  });
});

