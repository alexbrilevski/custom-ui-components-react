import { render } from '@testing-library/react';
import Message from './Message';

let messageData = {
  avatar: '',
  name: '',
  text: '',
  time: '',
};

beforeEach(() => {
  messageData = {
    avatar: '',
    name: '',
    text: '',
    time: '',
  };
});

test('Find text "test message name"', () => {
  messageData.name = 'test message name';

  const { getByText } = render((
    <Message messageData={messageData} />
  ));
  const linkElement = getByText(/test message name/i);
  expect(linkElement).toBeInTheDocument();
});

test('Find text "test message"', () => {
  messageData.text = 'test message';

  const { getByText } = render((
    <Message messageData={messageData} />
  ));
  const linkElement = getByText(/test message/i);
  expect(linkElement).toBeInTheDocument();
});

test('Find text "test message time"', () => {
  messageData.time = 'test message time';

  const { getByText } = render((
    <Message messageData={messageData} />
  ));
  const linkElement = getByText(/test message time/i);
  expect(linkElement).toBeInTheDocument();
});
