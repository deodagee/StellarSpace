import Head from 'next/head';
import Navbar from '../navbar.js';
import {Box, Container} from '@chakra-ui/react';
import VoxelDog from '../voxel-dog.js';
import styles from "/styles/main.module.css"



const Main = ({children, router}) => {
    return (
        <Box   as="main" pb={8}>
            <Head> 
                <meta name="viewport" content= "width=device-width, initial-scale=1" /> 
                <title> Astrum Stellar - Homepage</title>
            </Head>

            <Navbar path={router.asPath} /> 


            <Container className={styles.main} borderRadius={5} maxW="container.md" pt={14}>
                <VoxelDog /> 
                {children}
            </Container>
        </Box>
    )
}

export default Main