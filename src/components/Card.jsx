
import { Box, VStack, Text, Heading, HStack, Button, } from '@chakra-ui/react'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';

import { useContext } from 'react'
import { usercontext } from './Home'

function Card({ Title, Discription, ind }) {
    const { notes, setnotes, data, setdata } = useContext(usercontext);
    const deletenote = (index) => {
        const filtered = notes.filter((val, i) => {
            return (i !== index)
        })
        setnotes(filtered)
    }
    const send = `Title : ${Title} || Description : ${Discription}`;
    const editnote = (index) => {
        document.getElementById("myText").focus()
        const filtered = notes.filter((val, i) => {
            return (i === index)
        })
        const filtered2 = notes.filter((val, i) => {
            return (i !== index)
        })
        setnotes(filtered2)
        const a = filtered[0].Title
        const b = filtered[0].Discription
        setdata(
            {
                Title: a,
                Discription: b
            }

        )
        console.log(data)

    }
    return (
        <VStack
            w={['95%', "20rem"]}
            h={['15rem', "20rem"]}
            boxShadow='lg'
            p={"4"}
            bgColor={'purple.200'}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={['2', "4"]}
            _hover={{
                transform: "scale(1.05)"
            }}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
        >
            <Box m={'2'} h={"17rem"} overflow={'auto'} color={'purple'}>
                <Text>
                    <Heading color={'purple.400'} size={'8'} textDecoration={'underline'}>Title :</Heading>
                    <Text>{Title}</Text>
                </Text>
                <Text>
                    <Heading color={'purple.400'} size={'8'} textDecoration={'underline'}>Discription :</Heading>
                    <Text>{Discription}</Text>
                </Text>
            </Box>
            <HStack w={'full'} justifyContent={'space-evenly'}>
                <Button colorScheme='purple' onClick={() => editnote(ind)}><BiEdit /></Button>

                <Button colorScheme='purple' onClick={() => deletenote(ind)}><AiFillDelete /></Button>
                <a href={`whatsapp://send?text=${send}`} target='blank'>
                    <Button colorScheme='purple' ><FiShare /></Button>
                </a>
            </HStack>
        </VStack>
    )
}

export default Card
