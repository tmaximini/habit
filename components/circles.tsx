import React from 'react'

import Pie from './pie'

const Circles = ({ unix }) => {
  const requestRef: { current: number } = React.useRef()

  const [data, setData] = React.useState({
    years: null,
    months: null,
    weeks: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    savings: null,
    cents: null,
    dailyCost: 630, // cents
    time: unix * 1000
  })

  function update() {
    const now = new Date().getTime()
    const seconds = (now - unix * 1000) / 1000

    setData({
      ...data,
      years: seconds / 31556952,
      months: seconds / 2592000,
      weeks: seconds / 604800,
      days: seconds / 86400,
      hours: seconds / 3600,
      minutes: seconds / 60,
      time: unix * 1000,
      seconds: seconds,
      cents: (seconds / 86400) * data.dailyCost
    })
  }

  const animate: () => void = () => {
    update()
    // The 'state' will always be the initial value here
    requestRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [unix]) // Make sure the effect runs only once

  return (
    <div>
      <div className="hero">
        <Pie value={data['seconds']} name="seconds" />
        <Pie value={data['minutes']} name="minutes" />
        <Pie value={data['hours']} name="hours" />
        <Pie value={data['days']} name="days" />
      </div>
      <div className="hero">
        <Pie value={data['weeks']} name="weeks" />
        <Pie value={data['months']} name="months" />
        <Pie value={data['years']} name="years" />
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
      `}</style>
    </div>
  )
}

export default Circles
