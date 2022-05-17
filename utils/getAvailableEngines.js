export async function getAvailableEngines () {
  const response = await fetch('https://api.openai.com/v1/engines', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_SECRET}`
    }
  })

  return await response.json()
}
