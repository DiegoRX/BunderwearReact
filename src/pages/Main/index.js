import React from 'react'
import Body from '../Body'
import Stats from '../Stats'
import Redeem from '../Redeem';

export default function Main({ stats, redeem }) {

  return stats ? (
    <Stats />
  ) : redeem ? (
    <Redeem />
  ) :(
    <Body />
  )
}