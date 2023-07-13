import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';


import chatapp from '../public/images/works/chatapp.jpg';
import imageblog from '../public/images/works/imageblog.jpg';

import thumbnail from '../public/images/works/thumbnail.jpg';



const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading 
      as="h3" 
      fontSize={30} 
      mt={0}
      mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={0}>
          Apps
        </Heading>
      </Section>

        <Section>
          <WorkGridItem
          mb = {10} 
          id="private_chat_app" 
          title="Personal Private Chat App" 
          thumbnail={chatapp}
          quality={50}>
            Powered by Postgres
          </WorkGridItem>
          <WorkGridItem
          mb = {10} 
          id="imageblog" 
          title="Blog type Image Slider" 
          thumbnail={imageblog}
          quality={50}>
            Tailwind Css Styling
          </WorkGridItem>
        </Section>
        

        <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={0}>
          3D
        </Heading>
      </Section>

        <Section>
          <WorkGridItem
          mb = {10} 
            id="3dimages"
            title="3dimages"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
          </WorkGridItem>
        </Section>
      </SimpleGrid>



      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Videos
        </Heading>
      </Section>

        <Section delay={0.3}>
          <WorkGridItem 
          id="Videos"
          title="videos"
          thumbnail={thumbnail} 
          quality={50}>
          See Gallery
          </WorkGridItem>
        </Section>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Older Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem 
          id="miscellaneous"
          title="other"
          thumbnail={thumbnail}
          quality={50} >
          
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
