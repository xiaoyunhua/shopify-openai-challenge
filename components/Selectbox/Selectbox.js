import styles from './Selectbox.module.scss'
import PropTypes from 'prop-types'

Selectbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(Object).isRequired
}

function Selectbox (props) {
  return (
    <div className={styles.container}>
      <label for={props.id}>
        {props.id}
      </label>
      <select
        id={props.id}
        name={props.id}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map(engine => {
          if (engine.ready) {
            return (
              <option value={engine.id} key={engine.id}>
                {engine.id}
              </option>
            )
          }
        })}
      </select>
    </div>
  )
}

export default Selectbox
