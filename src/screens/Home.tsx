import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

interface HomeProps {
  onLogin: () => void;
}

const Home: React.FC<HomeProps> = ({ onLogin }) => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThan62 ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? 'row' : 'column'}
      h="100vh"
    >
      <Box>
        <Image
          src="https://res.cloudinary.com/dr65y8z0b/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1708270392/rope_knot_shapelogo_xkldrn.jpg?_s=public-apps"
          alt="SafeChain Logo"
          w="120px"
          h="100px"
          mb="4"
        />

        <Text
          fontSize={isLargerThan62 ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          SafeChain -- Your HealthCare passport!
        </Text>

        <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
          Ensure the confidentiality and integrity of your health records on the blockchain-based SafeChain system, enjoy cross-border insurance and health management powered by the internet-computer.
        </Text>
        <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
          Manage your health records globally with our advanced features and cutting-edge technology.
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThan62 ? 'lg' : 'md'}
          mb={isLargerThan62 ? '0' : '10'}
          onClick={onLogin}
        >
          GET STARTED
        </Button>
      </Box>

      <Spacer />

      <Flex
        w={isLargerThan62 ? '50%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src='https://res.cloudinary.com/dr65y8z0b/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1708270906/Boy_always_wear_your_mask_upn9n2.jpg?_s=public-apps'
          alt="SafeChain Illustration"
        />
      </Flex>
    </Flex>
  );
};

export default Home;
