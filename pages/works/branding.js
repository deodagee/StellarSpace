import {
    Container,
    Badge,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article2'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="branding">
      <Container>
        <Title>
          Branding <Badge>Visuals</Badge>
        </Title>
        <P>
        Effective branding leverages digital creativity to effectively communicate a company&apos;s unique identity and values to its target audience through various digital channels.        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Target Audience</Meta>
            <span>All</span>
          </ListItem>
          <ListItem>
            <Meta>services</Meta>
            creating, maintaining, influencing{' '}
              <ExternalLinkIcon mx="2px" />
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>More on Branding</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
              <Badge mr={2}>Layouts</Badge>
              from the logo and color palette to textures and materials.             <ExternalLinkIcon mx="2px" />
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>Flexible</Badge>
              flexibility to evolve an idea over time, while still maintaining a core identity.
              <ExternalLinkIcon mx="2px" />
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>Differentiation</Badge>
              Ensure that the branding sets the company apart from its competitors and positions it as a unique and recognizable brand in the market.
            <ExternalLinkIcon mx="2px" />
          </ListItem>
  
          <ListItem>
            <Badge mr={2}>Integration</Badge>
            Ensures that the branding accurately reflects the company&apos;s values, personality, and culture, and that it is genuine and authentic.
            <ExternalLinkIcon mx="2px" />
          </ListItem>
        </UnorderedList>
  
  
        <SimpleGrid
        ml="35%"
         columns={2} 
         gap={2}>
          <WorkImage src="/images/works/thumbnail3.jpg" alt="branding" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
