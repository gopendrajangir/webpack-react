import { fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import OTPForm from 'components/Login/OTPForm';

let document;

beforeEach(() => {
  document = render(
    <MemoryRouter initialEntries={[{ state: { phoneNumber: '7230989157' } }]}>
      <OTPForm />
    </MemoryRouter>
  );
});

describe('<OTPForm />', () => {
  it('renders a back arrow icon', () => {
    const svg = document.container.querySelector('svg.arrow-back');
    expect(svg).toBeInTheDocument();
  });

  it('renders a message for sent OTP on phone number', async () => {
    const message = /We have sent a 6-digit otp code on the phone number/;

    const p = screen.getByText(message);
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent(/7230989157/);
  });

  it('renders label for otp input', async () => {
    const p = screen.getByText('Enter the OTP', { selector: 'p' });
    expect(p).toBeInTheDocument();
  });

  it('renders 6 input field for otp', async () => {
    const inputs = screen.getAllByLabelText(/Character/);
    expect(inputs).toHaveLength(6);
  });

  it('renders a button with "Verify OTP" text', async () => {
    const button = screen.getByText('Verify OTP', { selector: 'button' });
    expect(button).toBeInTheDocument();
  });

  it('renders an error message on submitting form with empty otp input fields', async () => {
    const form = screen.getByRole('form');

    await fireEvent.submit(form);

    const error = await screen.findByText('Please enter the otp', {
      selector: 'p',
    });

    expect(error).toBeInTheDocument();
  });

  it('renders an error message on submitting form with any otp input field left empty', async () => {
    const inputs = screen.getAllByLabelText(/Character/);
    const form = screen.getByRole('form');

    inputs.forEach(async (input, i) => {
      if (i != 5) await userEvent.type(input, i.toString());
    });

    fireEvent.submit(form);

    const error = await screen.findByText('OTP should be 6-digit long');

    expect(error).toBeInTheDocument();
  });
});
