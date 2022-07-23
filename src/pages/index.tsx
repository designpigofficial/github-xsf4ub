import {
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import SimpleSidebar from '../components/Sidebar'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>

      
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Created by Abner Development &copy; 2022</Text>
    </Footer>
  </Container>
)

export default Index
