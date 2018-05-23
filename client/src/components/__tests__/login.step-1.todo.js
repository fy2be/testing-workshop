import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login';

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  const fakeUser = {
    username: 'kaktus',
    password: 'kaktus'
  };
  // create a jest.fn() for your submit handler
  const fakeSubmit = jest.fn();
  // render the Login component to a div
  const div = document.createElement('div');
  ReactDOM.render(<Login onSubmit={fakeSubmit} />, div);
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // const login = div.querySelector('input[name=username]');
  // const password = div.querySelector('input[name=password]');
  const form = div.querySelector('form');
  const { username, password } = form.elements;
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  username.value = fakeUser.username;
  password.value = fakeUser.password;
  //
  // Act
  // submit the form:
  const submitEvent = new window.Event('submit');
  form.dispatchEvent(submitEvent);
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
  expect(fakeSubmit).toHaveBeenCalledTimes(1);
  expect(fakeSubmit).toHaveBeenCalledWith(fakeUser);

})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
