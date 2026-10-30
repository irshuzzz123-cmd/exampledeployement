import React from 'react'
import{ headers} from 'next/headers'
import { cookies } from 'next/headers'

async function page() {

    const cookieStore =await cookies()
    const username=cookieStore.get('username')?.value
    const headerList=await headers()
    const browserinfo=headerList.get('user-agent')
    const language=headerList.get('accept-language')
  return (
    <div>
      <p>Username: {username}</p>
      <p>Browser Info: {browserinfo}</p>
      <p>Language: {language}</p>
    </div>
  )
}

export default page