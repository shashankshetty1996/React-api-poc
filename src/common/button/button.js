import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button 
      className={props.className} 
      onClick={props.onClick}
      {...props}
      >{props.children}
    </button>
  )
};

Button.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: ''
};

export default Button;