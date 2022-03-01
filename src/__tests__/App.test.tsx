import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../react/renderer/App';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
