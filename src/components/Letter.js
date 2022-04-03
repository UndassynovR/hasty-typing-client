import React from 'react'
import PropTypes from 'prop-types'

function Letter(props) {
  return <span>{props.value}</span>
}

Letter.propTypes = {
    value: PropTypes.symbol.isRequired,
//    color: PropTypes.color,
}

export default Letter
