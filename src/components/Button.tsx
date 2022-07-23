import { Button, ButtonGroup } from '@chakra-ui/react'

<Button colorScheme='blue'>Button</Button>

<Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>

<Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
</Stack>

<Stack direction='column'>
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="url('https://bit.ly/2Z4KKcF')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
  >
    <ButtonGroup gap='4'>
      <Button colorScheme='whiteAlpha'>WhiteAlpha</Button>
      <Button colorScheme='blackAlpha'>BlackAlpha</Button>
    </ButtonGroup>
  </Box>

  <Wrap spacing={4}>
    <WrapItem>
      <Button colorScheme='gray'>Gray</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='red'>Red</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='orange'>Orange</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow'>Yellow</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green'>Green</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='teal'>Teal</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='blue'>Blue</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='cyan'>Cyan</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='purple'>Purple</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='pink'>Pink</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='linkedin'>Linkedin</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='facebook'>Facebook</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='messenger'>Messenger</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='whatsapp'>Whatsapp</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='twitter'>Twitter</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='telegram'>Telegram</Button>
    </WrapItem>
  </Wrap>
</Stack>

<Stack direction='row' spacing={4}>
  <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
</Stack>

<HStack>
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
  </Button>
</HStack>

<ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme='blue'>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>

// The size prop affects the height of the button
// It can still be overridden by passing a custom height
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>

// Button from facebook.com
<Box
  as='button'
  height='24px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Join Group
</Box>