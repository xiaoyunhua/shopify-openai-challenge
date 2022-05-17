import styles from './Button.module.scss'
import PropTypes from 'prop-types'

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

function Button (props) {
  return (
    <button
      id={props.id}
      aria-label={props.id}
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  )
}

export default Button
