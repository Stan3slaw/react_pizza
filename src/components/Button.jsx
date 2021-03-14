import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// class Button extends React.Component {
//     render() {
//         return <button class={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>;
//     }
// }

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={ClassNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
