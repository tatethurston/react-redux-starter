import React from 'react';

const Flash = ({ message, onDismiss }) =>
  <div style={{ display: message ? 'initial': 'none' }}>
    <span>{ message }</span>
    <span style={{ cursor: 'pointer' }} onClick={onDismiss}>X</span>
  </div>

export default Flash;


