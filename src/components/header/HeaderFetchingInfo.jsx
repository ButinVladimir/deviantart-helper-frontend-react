import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Button from 'react-bulma-components/lib/components/button';

export default function HeaderFetchingInfo({
  revokeLoading,
  revokeHandler,
}) {
  return (
    <Navbar.Menu>
      <Navbar.Container position="end">
        <Navbar.Item>
          <Button.Group>
            <Button id="revoke-button" color="danger" loading={revokeLoading} onClick={revokeHandler}>Log out</Button>
          </Button.Group>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  );
}

HeaderFetchingInfo.propTypes = {
  revokeLoading: PropTypes.bool.isRequired,
  revokeHandler: PropTypes.func.isRequired,
};
