import { Container, VStack, Input, FormControl, FormLabel, Textarea, Button, Heading } from '@chakra-ui/react'
import React from 'react'

import { IoMdAdd } from 'react-icons/io';
import { useContext } from 'react'
import { usercontext } from './Home'

function Add() {
    const { notes, setnotes, data, setdata, check, setcheck } = useContext(usercontext);
    console.log(check)
    const submithandler = (e) => {
        e.preventDefault();
        setnotes([...notes,
        {
            ...data
        }]
        )
        setdata({ Title: '', Discription: '' })
        setcheck(0)
    }
    const changehandler = (e) => {
        setdata(
            {
                ...data,
                [e.target.name]: e.target.value

            }

        )
        console.log(data)
    }
    

    return (<Container minW={'full'} bgColor={'purple.100'} minH={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={['0', '2']} pb={'2'}>
        <VStack bgColor={'purple.200'} w={['full', '95%']} h={'95%'} borderRadius={'2rem'} p={'3rem'} >
            <Heading fontSize={['1.5rem', '3rem']} color={'purple.300'} w={'full'} pl={['1', '2']} mb={'1'}>ADD NEW NOTE</Heading>
            <FormControl>
                <VStack alignItems={'flex-start'}>
                    <FormLabel color={'purple.500'} fontSize={'20'} textDecoration={'underline'}>Title :</FormLabel>
                    <Input id={'myText'} name={'Title'} onChange={changehandler} value={data.Title} type='text' borderColor={'purple.300'} borderWidth={'2px'} focusBorderColor={'purple.500'}></Input>
                </VStack>
                <VStack alignItems={'flex-start'} mt={'6'}>
                    <FormLabel color={'purple.500'} fontSize={'20'} textDecoration={'underline'}>Discription :</FormLabel>
                    <Textarea name={'Discription'} onChange={changehandler} value={data.Discription} minH={'40vh'} borderColor={'purple.300'} borderWidth={'2px'} focusBorderColor={'purple.500'}></Textarea>
                </VStack>

                <Button onClick={submithandler} colorScheme='purple' mt={'6'} w={'3.5rem'} h={'3.5rem'} fontSize={'3rem'} borderRadius={'100%'}><IoMdAdd /></Button>
                {/* <Button colorScheme='purple' onClick={updatehandler} display={() => { return (check ? 'flex' : 'none') }} mt={'6'} w={'3.5rem'} h={'3.5rem'} fontSize={'3rem'} borderRadius={'100%'}><IoMdAdd /></Button> */}
            </FormControl>

        </VStack>

    </Container>
    )

}

export default Add
