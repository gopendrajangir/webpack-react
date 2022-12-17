import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import EmailLogin from 'components/Login/EmailLogin';

beforeEach(() => {
  render(
    <MemoryRouter>
      <EmailLogin />
    </MemoryRouter>
  );
});

describe('<EmailLogin />', () => {
  it('renders email and password input field', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwodInput = screen.getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwodInput).toBeInTheDocument();
  });

  it('renders forgot password link', () => {
    const forgotPasswordLink = screen.getByText('Forgot Password?', {
      selector: 'a',
    });
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  it('renders a button with text "Login"', () => {
    const loginButton = screen.getByText('Login', {
      selector: 'button',
    });
    expect(loginButton).toBeInTheDocument();
  });

  it('renders a link with text "Login via OTP"', () => {
    const loginViaOtpLink = screen.getByText('Login via OTP', {
      selector: 'a',
    });
    expect(loginViaOtpLink).toBeInTheDocument();
  });

  describe('Submit form', () => {
    it('renders an error message on invalid email', async () => {
      const emailInput = screen.getByPlaceholderText('Email');

      const form = screen.getByRole('form');

      await userEvent.type(emailInput, 'onestop');

      await fireEvent.submit(form);

      const errorElement = await screen.findByText(
        'Please provide a valid email'
      );

      expect(errorElement).toBeInTheDocument();
    });

    it('renders an error message on empty password', async () => {
      const form = screen.getByRole('form');

      await fireEvent.submit(form);

      const errorElement = await screen.findByText('Please provide a password');

      expect(errorElement).toBeInTheDocument();
    });
  });
});
