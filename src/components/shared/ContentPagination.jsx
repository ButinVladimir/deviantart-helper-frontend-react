import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Pagination from 'react-bulma-components/lib/components/pagination';

export default function ContentPagination({
  page,
  pageCount,
  showPagination,
  loadPageHandler,
}) {
  return (
    <Section>
      <Container>
        {showPagination && (
          <Pagination
            // Pagination in Bulma starts from 1 while pagination on backend start from 0.
            current={page + 1}
            total={pageCount}
            delta={3}
            onChange={loadPageHandler}
          />
        )}
      </Container>
    </Section>
  );
}

ContentPagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  showPagination: PropTypes.bool.isRequired,
  loadPageHandler: PropTypes.func.isRequired,
};
