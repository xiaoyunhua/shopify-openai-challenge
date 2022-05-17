import styles from './Textbox.module.scss'
import PropTypes from 'prop-types'

Textbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

function Textbox (props) {
  return (
    <textarea
      id={props.id}
      className={styles.container}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      aria-label={props.id}
    />
  )
}

export default Textbox
