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
    title="Image Blog">
      <Container>
        <Title>
        Image Slider Type Blog<Badge>June 2023-</Badge>
        </Title>
        <P>
        &quot;This is an image slider web app designed to fit in the Blogger 
        category, built with a grid system to provide asthetic information.  
        If you like this ui, send me a request through the contact page, I 
        any modification requests are accepeted. &quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ai-generated-images-nine.vercel.app/">
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
