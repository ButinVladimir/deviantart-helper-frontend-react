import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';
import Notification from 'react-bulma-components/lib/components/notification';

export default function Message({
  showMessage,
  messageColor,
  message,
  hideMessageHandler,
}) {
  return (
    <>
      {showMessage && (
        <Section>
          <Container breakpoint="fullhd">
            <Notification color={messageColor}>
              <Button remove onClick={hideMessageHandler}>Hide</Button>
              {message}
            </Notification>
          </Container>
        </Section>
      )}
    </>
  );
}

Message.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  messageColor: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hideMessageHandler: PropTypes.func.isRequired,
};
