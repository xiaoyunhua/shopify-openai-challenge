import Chatbox from '../Chatbox/Chatbox'
import styles from './ChatContainer.module.scss'
import PropTypes from 'prop-types'

ChatContainer.propTypes = {
  messages: PropTypes.array,
  imgUrl: PropTypes.string
}

function ChatContainer (props) {
  const chats = props.messages
    .map(msg => {
      const prompt = msg.prompt
      const model = msg.model
      const created = msg.created
      const sent = msg.sent
      const reply = msg.choices?.length > 0 ? msg.choices[0].text : null
      return (
        <div
          key={created}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
        >
          {reply && (
            <Chatbox
              id={`${created} reply`}
              type='left'
              model={model}
              created={created}
              imgUrl={props.imgUrl}
            >
              {reply}
            </Chatbox>
          )}
          {sent && (
            <Chatbox id={`${sent} sent`} type='right' sent={sent}>
              {prompt}
            </Chatbox>
          )}
        </div>
      )
    })
    .reverse()
  const empty = (
    <div className={styles.placeholder}>Enter a prompt to begin chat</div>
  )
  return (
    <div className={styles.container}>
      {props.messages.length > 0 ? chats : empty}
    </div>
  )
}

export default ChatContainer
