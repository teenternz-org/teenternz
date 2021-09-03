import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function Time_Ago({ date, Twitter }) {
  return (
    <div>
      <ReactTimeAgo date={date} timeStyle={Twitter} locale="en-US"/>
    </div>
  )
}