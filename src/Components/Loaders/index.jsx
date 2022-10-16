import PropTypes from 'prop-types';

 const InlineLoader = (props) => {
  return (
    <div className="inline">{props.text}</div>
  )
}

InlineLoader.propTypes = {
  text: PropTypes.string
}

export default InlineLoader