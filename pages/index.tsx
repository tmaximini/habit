import React, { useState } from 'react'
import Head from 'next/head'

import { withApollo } from '../lib/apollo'

import Nav from '../components/nav'
import Circles from '../components/circles'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Home = () => {
  const [since, setSince] = useState(new Date())
  const [unixTime, setUnixTime] = useState(since.getTime() / 1000)

  const onChange: (date: Date) => void = (date: Date) => {
    date.setHours(20)
    date.setMinutes(0)
    setSince(date)
    setUnixTime(date.getTime() / 1000)
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <h3>Since when are you sober?</h3>

      <DatePicker selected={since} onChange={onChange} maxDate={new Date()} />

      <h1 className="title">Welcome to Next.js!</h1>

      <Circles unix={unixTime} />
    </div>
  )
}

export default withApollo(Home)
