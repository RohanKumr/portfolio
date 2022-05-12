import React from 'react'
import navAndFooterWrapper from '../../common/hoc/navAndFooterWrapper'
import { Container } from './style'

function Homepage() {
  return (
      <Container>Random texts</Container>
  )
}

export default navAndFooterWrapper(Homepage)