import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Code,
  Container,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { CellData, Piece } from '../../constants';

type EditorProps = {
  board: CellData[];
};

const Editor = ({ board }: EditorProps) => {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  useEffect(() => {
    const newPieces: Piece[] = [];

    board.forEach((cell) => {
      const { piece } = cell;
      if (piece && !newPieces.find((eachCell) => eachCell.label === piece.label)) {
        newPieces.push(piece);
      }
    });

    setPieces(newPieces);
  }, [board]);

  board.forEach((cell) => {
    const { piece } = cell;
    if (piece && !pieces.find((eachCell) => eachCell.label === piece.label)) {
      pieces.push(piece);
    }
  });

  return (
    <Box
      w="100%"
      backgroundColor="gray.900"
      borderTop="solid 2px"
      borderTopColor="gray.700"
      px={3}
      py={4}
      color="gray.300"
    >
      <Container maxW="container.lg">
        <Heading size="sm" mb={4}>
          Piece behavior
        </Heading>

        {pieces.map((piece) => (
          <Button
            key={piece.label}
            colorScheme={piece.label === selectedPiece?.label ? 'blue' : undefined}
            mb={2}
            mr={2}
            onClick={() => setSelectedPiece(piece)}
          >
            {piece.label}
          </Button>
        ))}

        <Divider my={4} />

        {selectedPiece && (
          <Box textAlign="left">
            <Code w="100%">
              <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {selectedPiece.move.toString()}
              </SyntaxHighlighter>
            </Code>
          </Box>
        )}

        <Box my={10}>
          <Alert>
            <AlertIcon />
            <AlertTitle>
              Soon you will be able to edit the behavior of any piece by just editing the code
              above.
            </AlertTitle>
          </Alert>
        </Box>
      </Container>
    </Box>
  );
};

export default Editor;
