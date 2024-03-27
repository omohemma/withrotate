import {Box} from "@chakra-ui/react";
import {TagProps} from "@/app/page";

export const TagFilter = ({tag: {name, active}, filterByTag}: {
    tag: TagProps,
    filterByTag: (tag: string) => void
}) => {
    return (
        <Box
            as='button'
            height='36px'
            width='max-content'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            px='16px'
            py="0"
            borderRadius='xl'
            fontSize='13px'
            fontWeight='bold'
            bg={active ? 'brand.200' : 'brand.400'}
            color={active ? "brand.white" : "brand.200"}
            _hover={{bg: '#CFD7FF'}}
            _active={{
                bg: 'brand.200',
                transform: 'scale(0.98)',
                color: "brand.white"
            }}
            onClick={() => filterByTag(name)}
        >
            {name}
        </Box>
    );
}