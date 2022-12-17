

export const post = async ({ request }) => {
  const fd = await request.formData()

  const name = fd.get('name')
  const email = fd.get('email')
  const message = fd.get('message')
  const bestday = fd.get('bestday')

  const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
  const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN
  const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`

  let data = {
    records: [
      {
        fields: {
          name,
          email,
          message,
          bestday,
        },
      },
    ],
  }

  console.log(fd.get('name'))
  const res = await fetch(AIRTABLE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    return {
      status: 200,
      body: {
        message: 'success',
      },
    }
  } else {
    return {
      status: 404,
      body: {
        message: 'failed',
      },
    }
  }
}

