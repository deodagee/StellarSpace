import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article2'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Front End">
      <Container>
        <Title>
          Front End <Badge>Web Dev</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/Deo.jpg" alt="icon" />
        </Center>
        <P>
        Front-end development involves creating and implementing the visual and interactive elements of a website or web application, utilizing technologies such as HTML, CSS, and JavaScript to enhance user experience.        </P>
        <P>
        I specialize in small business-type apps because I prefer to focus on delivering high-quality and user-friendly solutions for smaller-scale projects, allowing me to provide personalized attention to each client&apos;s unique needs and goals. I believe that this specialization allows me to deliver the best possible results for my clients in a timely and efficient manner.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>User-friendly and visually appealing design</ListItem>
          <ListItem>Mobile responsiveness</ListItem>
          <ListItem>
          Fast page load speeds
          </ListItem>
          <ListItem>
          Search engine optimization (SEO)
          </ListItem>
          <ListItem>
          Ease of use for updating and maintaining the site
          </ListItem>
          <ListItem>
          Security features to protect sensitive information
          </ListItem>
          <ListItem>Integration with other tools and platforms</ListItem>
          <ListItem>
          Customizable features and scalability for future growth.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Coding Ides/Frameworks</Meta>
            <span>Atom,</span>Visual Studio Code, Figma
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html Css3 Javascript</span>
          </ListItem>
          <ListItem>
            <Meta>Other</Meta>
            <span>Dreamweaver</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>More On Web Designing</Center>
        </Heading>
        <span>Coming up with an effective layout for a website or application requires a deep understanding of user experience, design principles, and the goals of the project. It can be a challenging task as it involves making decisions about the placement of elements, the use of color, typography, and imagery to create an aesthetically pleasing and functional design. This is why designers and web developers are needed, as they bring technical skills, creativity, and experience to the table to create layouts that not only look good, but also meet the needs of the users and the goals of the project.
          </span>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://www.hostgator.com/">
              <Badge mr={2}>Hosting</Badge>
              website hosting options &nbsp; 
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid 
        ml="35%"
        columns={2} 
        gap={2}>
          <WorkImage src="/images/works/thumbnail3.png" alt="amembo" />

        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
