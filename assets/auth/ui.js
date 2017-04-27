'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signup success')
}

const signUpFailure = (error) => {
  console.error('signUp failure ran.  error is :', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in success')
}

const signInFailure = (error) => {
  console.error('signInfailure ran.  error is :', error)
}

const signOutSuccess = (data) => {
  store.user = null
  console.log('sign out success')
}

const signOutFailure = (error) => {
  console.error('signOut failure ran.  error is :', error)
}

const changePasswordSuccess = (data) => {
  console.log('Password change success')
}

const changePasswordFailure = (error) => {
  console.error('changePassword failure ran.  error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
