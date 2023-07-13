import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Aye, Sorry ;)</Heading>
      <Text>This Page is still under construction! Thank you for visiting though.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Stellar Space
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound