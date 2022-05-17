export async function getUserPrompt (prompt, engine) {
  const data = {
    prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }

  const response = await fetch(
    `https://api.openai.com/v1/engines/${engine}/completions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`
      },
      body: JSON.stringify(data)
    }
  )

  return await response.json()
}
