import Logo from './logo';
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu, 
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({href, path, children}) => {
    const active = path === href 
    const inactiveColor = useColorModeValue ('gray200.', 'whiteAlpha.900')

    return(
        <NextLink href= {href}>
        <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023': inactiveColor}>
            {children}
        </Link>
        </NextLink> 
    )

}

const Navbar = props => {
    const {path} = props

    return (
        <Box 
        position= "fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff98', '#292d3a30')}
        style = {{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}>
            <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between">

                <Flex 
                align="center"
                mr={5}>
                    <Heading 
                    as="h1"
                    size= "lg"
                    letterSpacing={'tightre'}>
                        <Logo />
                    </Heading>
                    </Flex> 
                    <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, md: 0}}>
                        <LinkItem 
                        href="https://astrumstellar.com"
                        path= {path}>
                        Home
                        </LinkItem>

                        <LinkItem 
                        href="/services"
                        path= {path}>
                        Services
                        </LinkItem>
                        
                        <LinkItem 
                        href="/projects"
                        path= {path}>
                        Projects
                        </LinkItem>
                        
                        <LinkItem 
                        href="/contact"
                        path= {path}>
                        Contact
                        </LinkItem>

                        <LinkItem 
                        href="https://github.com/deodagee/greenrepo"
                        path= {path}>
                        Code
                        </LinkItem>

                    </Stack>
                    <Box
                    flex={1}
                    align="right">
                        <ThemeToggleButton />

                        <Box
                        ml={2}
                        display={{base: 'inline-block',  md: 'none'}}>
                            <Menu>
                            <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />} 
                            variants="outline" 
                            aria-label="Options"/> 
                            <MenuList>

                            <NextLink href="https://astrumstellar.com" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>

                                <NextLink href="/services" passHref>
                                    <MenuItem as={Link}>Services</MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>

                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>

                                <NextLink href="https://github.com/deodagee/greenrepo" passHref>
                                    <MenuItem as={Link}>Source Code</MenuItem>
                                </NextLink> 
                            </MenuList>
                            </Menu>
                            </Box>
                    </Box>
            </Container>
            </Box> 

    )
}
export default Navbar