import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

<Link>Chakra UI</Link>

<Link href='https://chakra-ui.com' isExternal>
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link>

<Text>
  Did you know that{' '}
  <Link color='teal.500' href='#'>
    links can live inline with text
  </Link>
</Text>

// 1. import { Link as ReachLink } from "@reach/router"

// 2. Then use it like this
<Link as={ReachLink} to='/home'>
  Home
</Link>

// 1. import NextLink from "next/link"

// 2. Then use it like this
<NextLink href='/home' passHref>
  <Link>Home</Link>
</NextLink>