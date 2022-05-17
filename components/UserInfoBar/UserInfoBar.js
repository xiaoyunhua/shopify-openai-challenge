import styles from './UserInfoBar.module.scss'
import Image from 'next/image'
import PropTypes from 'prop-types'

UserInfoBar.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}

function UserInfoBar (props) {
  return (
    <div className={styles.container}>
      <Image
        src={props.imgUrl}
        width={24}
        height={24}
        className={styles.icon}
        alt={'User Profile Picture'}
      />
      <h1>{props.name}</h1>
    </div>
  )
}

export default UserInfoBar
