import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'
import Textbox from '../components/Textbox/Textbox'
import ChatContainer from '../components/ChatContainer/ChatContainer'
import { getUserPrompt } from '../utils/getUserPrompt'
import { getAvailableEngines } from '../utils/getAvailableEngines'
import { useState, useEffect } from 'react'
import Selectbox from '../components/Selectbox/Selectbox'
import UserInfoBar from '../components/UserInfoBar/UserInfoBar'

export default function Home () {
  const [prompt, setPrompt] = useState('')
  const [chosenEngine, setChosenEngine] = useState('text-curie-001')
  const [isLoading, setIsLoading] = useState(false)

  const [messages, setMessages] = useState([])
  const [engines, setEngines] = useState([])

  const loadEngs = async () => {
    let engs = []
    try {
      engs = await getAvailableEngines()
    } catch (err) {
      console.log(err)
    }

    setEngines(engs)
  }

  useEffect(() => {
    const msgs = JSON.parse(localStorage.getItem('messages'))
    if (msgs) {
      setMessages(msgs)
    }
    loadEngs()
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('messages', JSON.stringify(messages))
    }
  }, [messages])

  const onTextboxChange = e => {
    setPrompt(e.target.value)
  }

  const onSelectChange = e => {
    setChosenEngine(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    const sent = Date.now()
    const reply = await getUserPrompt(prompt, chosenEngine)
    reply.prompt = prompt
    reply.sent = sent
    setPrompt('')
    setMessages(messages => [...messages, reply])
    setIsLoading(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopify OpenAI</title>
        <meta
          name='description'
          content='For Shopify Frontend Coding Challenge, Generated by create next app'
        />
        <link rel='icon' href='/shopify_logo.png' />
      </Head>

      <main className={styles.main}>
        <UserInfoBar name='Shopify OpenAI' imgUrl='/openai_logo.png' />

        <ChatContainer
          messages={
            isLoading
              ? [...messages, { prompt: prompt, sent: Date.now() }]
              : messages
          }
          imgUrl='/openai_logo.png'
          loading={isLoading}
        />

        <form className={styles.form} onSubmit={onSubmit}>
          {engines && engines.data && (
            <Selectbox
              id='Choose engine'
              options={engines.data}
              value={chosenEngine}
              onChange={onSelectChange}
            />
          )}
          <Textbox
            id='Enter message'
            placeholder={`Enter a message, e.g. 'write me a story about a puppy'`}
            value={prompt}
            onChange={onTextboxChange}
          />
          <Button
            id='Send'
            type='submit'
            value='Submit'
            title='Send'
            disabled={isLoading || !prompt}
          />
        </form>
      </main>
    </div>
  )
}
