import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Container,
  Button,
  Notification,
} from 'react-bulma-components';

export default function Message({
  showMessage,
  message,
  hideMessageHandler,
}) {
  return (
    <Fragment>
      {showMessage && (
        <Section>
          <Container breakpoint="fullhd">
            <Notification color="info">
              <Button remove onClick={hideMessageHandler}>Hide</Button>
              {message}
            </Notification>
          </Container>
        </Section>
      )}
    </Fragment>
  );
}

Message.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  hideMessageHandler: PropTypes.func.isRequired,
};
