import { Box, Heading, HStack, } from '@chakra-ui/react'
import React, { useState } from 'react'
import Card from './Card';
import Add from './Add';

export const usercontext = React.createContext()

const initial = 'TAKING NOTE IS THE PRACTICE OF RECORDING INFORMATION FROM DIFFERENT SOURCES AND PLATFORMS. BY TAKING NOTES, THE WRITER RECORDS THE ESSENCE OF THE INFORMATION, FREEING THEIR MIND FROM HAVING TO RECALL EVERYTHING.NOTES ARE COMMONLY DRAWN FROM A TRANSIENT SOURCE, SUCH AS AN ORAL SUCH AS COLLEGE LECTURES, THE MAIN PURPOSE OF TAKING NOTES MAY BE TO IMPLANT THE MATERIAL IN THE MIND, THE WRITTEN NOTES THEMSELVES BEING OF SECONDARY IMPORTANCE.'
function Home() {
    
    const [notes, setnotes] = useState([{ Title: 'SAMPLE NOTE', Discription: initial }]);
    const [check, setcheck] = useState(1);
    const [data, setdata] = useState({ Title: '', Discription: '' });
    const changehandler = (e) => {
        setdata(
            {
                ...data,
                [e.target.name]: e.target.value

            }
        )
        console.log(data)
    }
    const rewrite = (title, discription) => {
        setdata(
            {
                ...data,
                Title: { title },
                Discription: { discription },
            }
        )
    }
    return (
        <usercontext.Provider value={{ data, setdata, notes, setnotes, check, setcheck }}>
            <Box display={'flex'} flexDirection={['column', 'row']} alignItems={['center', 'flex-start']} bgColor={'purple.100'}>
                <Box w={['100%', '52%']} minH={['10vh', '120vh']} bgColor={'purple.100'} p={'8'} >

                    <Heading color={'purple.300'} w={'full'} pl={'2'}>YOUR NOTES</Heading>
                    <HStack w={'full'} flexWrap={'wrap'} justifyContent={'flex-start'}>
                        {
                            notes.map((i, index) => <Card Title={i.Title} Discription={i.Discription} key={index} ind={index} rewrite={rewrite} />)
                        }

                    </HStack>


                </Box>
                <Box w={['full', '48%']} minH={['40vh', '120vh']} bgColor={'purple.100'} position={'sticky'} top={['0', '3']} right={['0', '3']}>
                    <Add title={data.Title} discription={data.Discription} onChange={changehandler} />
                </Box>
            </Box>
        </usercontext.Provider>

    )
}

export default Home
