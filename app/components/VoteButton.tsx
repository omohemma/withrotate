import {Box, Flex} from "@chakra-ui/react";
import {IconUp} from "@/app/components/IconUp";

export const VoteButton = ({id, votes, increaseVote}: {
    id: number,
    votes: number,
    increaseVote: (id: number) => void
}) => {
    return (
        <Box
            onClick={() => increaseVote(id)}
            as='button'
            height='53px'
            width='40px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            p='8px'
            borderRadius='xl'
            fontSize='13px'
            fontWeight='bold'
            bg='brand.400'
            color='brand.600'
            _hover={{bg: '#CFD7FF'}}
            _active={{
                bg: 'brand.200',
                transform: 'scale(0.98)',
                color: "brand.white"
            }}
        >

            <Flex direction='column' gap={2} alignItems={"center"}>
                <IconUp
                    width="11px"
                    height="7px"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    _active={{
                        bg: 'brand.200',
                        transform: 'scale(0.98)',
                        color: "brand.white"
                    }}
                />

                {votes}
            </Flex>

        </Box>
    );
}