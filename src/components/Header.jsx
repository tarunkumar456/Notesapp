import {  HStack,Image,Heading } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/1.png'


function Header() {

  return (
    <HStack w={'full'} h={['10vh','15vh']}  pl={['3','10']} bgColor={'purple.200'} alignItems={'center'} borderBottom={'1px solid purple'}>
        <Image src={img1} alt={'loading'} w={['10','20']} h={['7','20']} ></Image>
        <Heading fontSize={['3xl','6xl']} color={'purple.500'} textTransform={'uppercase'}>Note-it</Heading>
    </HStack>
  )
}

export default Header
