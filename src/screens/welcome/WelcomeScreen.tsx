import React from 'react'
import Header from 'RoyalAutomobileClub/src/components/Header'
import Container from 'RoyalAutomobileClub/src/components/Container'
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors'
export default function WelcomeScreen () {
  return (
    <>
      <Container>
        <>
          <Header
            greenHeader={false}
            titleColor={Colors.BLACK}
            title='Create New Product'
          />
        </>
      </Container>
    </>
  )
}
