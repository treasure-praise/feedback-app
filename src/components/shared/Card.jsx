import PropTypes  from 'prop-types'
import React from 'react'


function Card({children,reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps ={
    reverse: true,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card