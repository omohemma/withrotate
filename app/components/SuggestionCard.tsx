import {Card, CardBody, Flex, Heading, HStack, Spacer, Stack, Tag, Text} from "@chakra-ui/react";
import {VoteButton} from "@/app/components/VoteButton";
import {SuggestionProps} from "@/app/page";

export const SuggestionCard = (
    {
        suggestion: {
            id,
            name,
            description,
            tags,
            votes,
            comments,
        },
        increaseVote
    }: { suggestion: SuggestionProps, increaseVote: (id: number) => void }) => {

    return (
        <Card minH={"150px"}>
            <CardBody borderRadius='lg'
                      bg="brand.white"
                      px={"32px"}
                      py={"28px"}
            >
                <Flex alignItems={"center"} gap={"12"}>
                    <VoteButton votes={votes} increaseVote={increaseVote} id={id}/>

                    <Stack gap={2}>
                        <Heading fontSize={"18px"} color="brand.600" fontWeight={"bold"}>{name}</Heading>
                        <Text color={"brand.700"} size={"md"}>{description}</Text>

                        <HStack>
                            {
                                tags.length > 0 && tags.map((tag: string) => (
                                    <Tag key={`suggestion-tag-${tag}`} p={"2"} fontSize={"13px"} borderRadius={"lg"}
                                         maxW={"max-content"}
                                         color="brand.300"
                                         bg="brand.400">{tag}
                                    </Tag>
                                ))
                            }
                        </HStack>

                    </Stack>

                    <Spacer/>

                    <HStack>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.62074 16.5H1.34534L2.24718 15.5895C2.73344 15.0986 3.0371 14.4601 3.11873 13.7674C1.03637 12.3878 0 10.3892 0 8.29388C0 4.42832 3.51913 0.5 9.0305 0.5C14.8692 0.5 18 4.11479 18 7.95522C18 11.821 14.8361 15.4333 9.0305 15.4333C8.0135 15.4333 6.95226 15.2963 6.00478 15.0448C5.10787 15.9735 3.89262 16.5 2.62074 16.5Z"
                                fill="#CDD2EE"/>
                        </svg>

                        <Text fontSize="md"
                              fontWeight="bold"
                              color="brand.600">
                            {comments.length ?? 0}
                        </Text>
                    </HStack>


                </Flex>
            </CardBody>
        </Card>
    )
}