import { fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import PhoneLogin from 'components/Login/PhoneLogin';

let document;

beforeEach(() => {
  document = render(
    <MemoryRouter>
      <PhoneLogin />
    </MemoryRouter>
  );
});

describe('<PhoneLogin />', () => {
  it('renders the India flag svg', () => {
    const svg = document.container.querySelector('svg.india-flag');
    expect(svg).toBeInTheDocument();
  });

  it('renders +91 text', () => {
    const text91 = screen.getByText('+91');
    expect(text91).toBeInTheDocument();
  });

  it('renders phone input', () => {
    const phoneInput = screen.getByPlaceholderText('Phone number');
    expect(phoneInput).toBeInTheDocument();
  });

  it('renders Send OTP button', () => {
    const sendOTPButton = screen.getByText('Send OTP');
    expect(sendOTPButton).toBeInTheDocument();
  });

  it('renders a link with text "Login via Email"', () => {
    const loginViaEmailLink = screen.getByText('Login via Email', {
      selector: 'a',
    });
    expect(loginViaEmailLink).toBeInTheDocument();
  });

  describe('Submit Form', () => {
    it('renders an error message on empty phone number field', async () => {
      const form = screen.getByRole('form');

      await fireEvent.submit(form);

      const errorElement = await screen.findByText(
        'Please provide a phone number'
      );

      expect(errorElement).toBeInTheDocument();
    });

    it('renders an error message on phone number less than 10 digits', async () => {
      const form = screen.getByRole('form');
      const phoneInput = screen.getByPlaceholderText('Phone number');

      await userEvent.type(phoneInput, '9883847');
      await fireEvent.submit(form);

      const errorElement = await screen.findByText(
        'Phone number should be 10 digits long'
      );

      expect(errorElement).toBeInTheDocument();
    });
  });
});
