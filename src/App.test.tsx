import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('<App /> has a <h1> and a <p> element', () => {
  const { getByText } = render(<App />);

  const h1 = getByText('Webpack Setup');
  const p = getByText('This webpack setup is done by Gopendra.');

  expect(h1).toBeInTheDocument();
  expect(p).toBeInTheDocument();
});
