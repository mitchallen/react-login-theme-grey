import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import LoginThemeGrey from '../src/index';

function validateForm() {
  console.log('validateForm()');
  return true;
}

function handleChange(event) {
  console.log( event.target.id, event.target.value );
}

async function handleSubmit (event) {
  event.preventDefault();
  console.log('handleSubmit()');
}

describe('LoginThemeGrey', () => {

  const renderer = new ShallowRenderer();

  renderer.render(<LoginThemeGrey 
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    validateForm={validateForm}
    status='testing'
    isLoading={true}
    username='John'
    password='Smith'
  />);

  const result = renderer.getRenderOutput();

  it('root element should be a div', () => {
    // console.log(JSON.stringify(result));
    expect(result.props.children.type).to.eql('div');
  });

});