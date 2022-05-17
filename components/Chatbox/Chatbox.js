import styles from './Chatbox.module.scss'
import Image from 'next/image'
import PropTypes from 'prop-types'

Chatbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.node.isRequired,
  model: PropTypes.string,
  sent: PropTypes.number,
  created: PropTypes.number,
  imgUrl: PropTypes.string
}

function Chatbox (props) {
  return (
    <div
      id={props.id}
      style={{ display: 'flex', flexDirection: 'column-reverse' }}
    >
      <div className={styles.container}>
        {props.type === 'left' && (
          <Image
            src={props.imgUrl}
            alt='User Profile Picture'
            width={40}
            height={40}
            className={styles.icon}
          />
        )}
        <p
          className={`${styles.chatBubble} ${
            props.type === 'left' ? styles.left : styles.right
          }`}
        >
          {props.children}
        </p>
      </div>

      <div
        className={`${styles.infoContainer} ${
          props.type === 'left' ? styles.left : styles.right
        }`}
      >
        {props.sent && (
          <time className={styles.details}>
            {new Date(props.sent).toLocaleString()}
          </time>
        )}
        {props.model && (
          <span className={`${styles.details} ${styles.highlighted}`}>
            {props.model}
          </span>
        )}
        {props.created && (
          <time className={styles.details}>
            {new Date(props.created * 1000).toLocaleString()}
          </time>
        )}
      </div>
    </div>
  )
}

export default Chatbox
