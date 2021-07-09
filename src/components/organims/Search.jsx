import React from 'react';
import styled from 'styled-components';
const Search = ({ search, className, containerStyle }) => {
  return (
    <div style={containerStyle}>
      <p className={className}>You're looking for: {search}</p>
    </div>
  );
}
export const StyledSearch = styled(Search).attrs({
    containerStyle: {
      border: '1px solid #eee',
      borderRadius: 10,
      padding: 10
    },
  })`
    color: #333;
    font-size: 40px;
  `;