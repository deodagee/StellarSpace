import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import thumbnail2 from '../public/images/works/thumbnail2.jpg';
import thumbnail3 from '../public/images/works/thumbnail3.jpg';


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Gallery
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Cycles Render"
            thumbnail={thumbnail3}>
            High Poly Render
          </GridItem>
          <GridItem
            title="Cycles Render"
            thumbnail={thumbnail2}>
            High Poly Render
          </GridItem>
          <GridItem
            title="Cycles Render"
            thumbnail={thumbnail3}>
            High Poly Render
          </GridItem>
                  <GridItem
            title="Cycles Render"
            thumbnail={thumbnail2}>
            High Poly Render
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Cycles Render"
            thumbnail={thumbnail3}>
            High Poly Render
          </GridItem>
          <GridItem
            title="Cycles Render"
            thumbnail={thumbnail2}>
            High Poly Render
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Cycles Render"
            thumbnail={thumbnail3}>
            High Poly Render
          </GridItem>
                  <GridItem
            title="Cycles Render"
            thumbnail={thumbnail2}>
            High Poly Render
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
