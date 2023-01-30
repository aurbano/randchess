import { Box } from '@chakra-ui/react';

const Editor = () => {
  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      w="300px"
      h="100%"
      backgroundColor="gray.900"
      zIndex={1}
      borderLeft="solid 2px"
      borderLeftColor="gray.700"
      px={3}
      py={2}
      color="gray.300"
    >
      Edit piece behavior
    </Box>
  );
};

export default Editor;
