import PropTypes from 'prop-types'

function Letter(props) {
    
    return <span style={{color: props.color}}>{props.value}</span>
}

Letter.propTypes = {
    value: PropTypes.symbol,
    color: PropTypes.string,
}
Letter.defaultProps = {
    value: ' ',
    color: '#3c3836',
}
export default Letter
