import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout 
    title="Chat App">
      <Container>
        <Title>
        Personal Chat App <Badge>July 2023-</Badge>
        </Title>
        <P>
        &quot;This Web Chat app was built using 
        Next.js, and provides a user-friendly interface
         for accessing real-time chat information. If you
         would like your own copy of this app, let me know. 
         Currently it's set upfor you to log in with your 
         Github account, however with a personal request I can 
         change that to whatever form of login you perfer; whether 
         it's through google, reddit, youtube, or even a personal 
         database login that is secure and private. You can use this app 
         for a multitude of things, but I personally think it's great 
         for privacy seeking indivuals and necessary group chats of all types.
         The app is designed to be fast, 
           efficient, using the latest tools in web and data management.&quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://real-time-chatapp-updated.vercel.app/">
              Deployed On Vercel <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>web App</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJs + React</span>
          </ListItem>

        </List>


        
      </Container>
    </Layout>
  )
  
  export default Work
