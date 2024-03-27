'use client'

import Image from 'next/image';
import {
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Spacer,
    Stack,
    StackItem,
    Text,
} from "@chakra-ui/react";
import CircleIcon from "@/app/components/CircleIcon";
import {SuggestionCard} from "@/app/components/SuggestionCard";
import {useEffect, useState} from "react";
import {TagFilter} from "@/app/components/TagFilter";

export type SuggestionProps = {
    id: number
    name: string
    description: string
    tags: string[]
    votes: number,
    comments: string[],
}

export type RoadmapProps = {
    name: string
    color: string
    count: number
}

export type TagProps = {
    name: string
    active: boolean
}

const data = [
    {
        id: 1,
        name: "Add tags for solutions",
        description: "Easier to search for solutions based on a specific stack.",
        tags: ['Enhancement'],
        votes: 112,
        comments: [
            "I'd be happy to provide it as an option!", "I'd be happy to provide it as an option!",
        ]
    },
    {
        id: 2,
        name: "Add a dark theme option",
        description: "It would help people with light sensitivities and who prefer dark mode.",
        tags: ['Feature'],
        votes: 99,
        comments: [
            "I'd be happy to provide it as an option!", "I'd be happy to provide it as an option!",
            "I'd be happy to provide it as an option!", "I'd be happy to provide it as an option!",
        ]
    },
    {
        id: 3,
        name: "Q&A within the challenge hubs",
        description: "Challenge-specific Q&A would make for easy reference.",
        tags: ['Feature'],
        votes: 65,
        comments: [
            "I'd be happy to provide it as an option!"

        ]
    },
    {
        id: 4,
        name: "Allow image/video upload to feedback",
        description: "Images and screencasts can enhance comments on solutions.",
        tags: ['Enhancement'],
        votes: 52,
        comments: [
            "I'd be happy to provide it as an option!", "I'd be happy to provide it as an option!",
        ]
    },
    {
        id: 5,
        name: "Ability to follow others",
        description: "Stay updated on comments and solutions other people post.",
        tags: ['Feature'],
        votes: 42,
        comments: [
            "I'd be happy to provide it as an option!", "I'd be happy to provide it as an option!",
            "I'd be happy to provide it as an option!"
        ]
    },
    {
        id: 6,
        name: "Preview images not loading",
        description: "Challenge preview images are missing when you apply a filter.",
        tags: ['Bug'],
        votes: 3,
        comments: []
    }
];
const roadMapData = [
    {
        name: "Planned",
        color: "brand.800",
        count: 2
    },
    {
        name: "In-Progress",
        color: "brand.100",
        count: 3
    },
    {
        name: "Live",
        color: "brand.900",
        count: 2
    }

]
const tagsData = [
    {
        name: "All",
        active: true
    },
    {
        name: "UI",
        active: false
    },
    {
        name: "UX",
        active: false
    },

    {
        name: "Enhancement",
        active: false
    },
    {
        name: "Bug",
        active: false
    },
    {
        name: "Feature",
        active: false
    },
]
export default function Home() {
    const [suggestions, setSuggestions] = useState(data)
    const [roadmap] = useState(roadMapData)
    const [tags, setTags] = useState(tagsData)
    const [filter, setFilter] = useState("most_upvotes")

    const filterSuggestions = (filter: string): void => {
        if (filter === "most_upvotes") {
            setSuggestions(data.sort((a, b) => b.votes - a.votes))
        } else if (filter === "least_upvotes") {
            setSuggestions(data.sort((a, b) => a.votes - b.votes))
        } else if (filter === "most_comments") {
            setSuggestions(data.sort((a, b) => b.comments.length - a.comments.length))
        } else if (filter === "least_comments") {
            setSuggestions(data.sort((a, b) => a.comments.length - b.comments.length))
        }

        setFilter(filter)
    }
    const increaseVote = (id: number) => {
        setSuggestions(suggestions.map((suggestion) => {
            if (suggestion.id === id) {
                return {
                    ...suggestion,
                    votes: suggestion.votes + 1
                }
            } else {
                return suggestion
            }
        }))
    }
    const filterByTag = (tag: string) => {
        setTag(tag)
    }

    const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
    const [tag, setTag] = useState("All")

    useEffect(() => {
        if (tag !== "All") {
            const filteredData = suggestions.filter((suggestion) => suggestion.tags.includes(tag))
            setFilteredSuggestions(filteredData)
        } else {
            setFilteredSuggestions(data)
        }

        setTags(tags.map((t) => t.name === tag ? {...t, active: true} : {...t, active: false}))
    }, [suggestions, tag])

    return (
        <Container bg="brand.500" maxW="100%" minHeight="100vh" px={[48, 20]} py="20">
            <Grid
                templateColumns='repeat(4, 1fr)'
                gap={4}
            >
                <GridItem colSpan={1}>
                    <Card h={"140px"} mb={6}>
                        <CardBody borderRadius='lg'
                                  bgGradient="radial( circle at right, #E84D70, #A337F6, #28A7ED,)"
                                  pt={16}
                        >
                            <Heading size={"md"} color="brand.white" mb={1} fontWeight={"bold"}>Frontend
                                Mentor</Heading>
                            <Text color={"brand.white"} size={"sm"}>Feedback Board</Text>
                        </CardBody>
                    </Card>

                    <Card mb={6}>
                        <CardBody borderRadius='lg' p={8}>
                            <Flex gap={2} flexWrap={'wrap'} direction='row'>
                                {
                                    tags.map((tag: TagProps, key) =>
                                        <TagFilter key={`tag-${key}`} tag={tag} filterByTag={filterByTag}/>
                                    )
                                }

                            </Flex>
                        </CardBody>
                    </Card>

                    <Card mb={6}>
                        <CardBody borderRadius='lg'>
                            <Flex>
                                <Heading color="brand.600" size='sm'> Roadmap</Heading>
                                <Spacer/>
                                <Link href={"#"} fontSize="sm" textDecoration={"underline"} fontWeight="semibold"
                                      color="brand.300">
                                    View
                                </Link>
                            </Flex>
                            <Stack pt={2}>
                                {
                                    roadmap.map(({name, color, count}, key) =>
                                        <StackItem key={`roadmap-${key}`}>
                                            <Flex alignItems='center' gap={2}>
                                                <CircleIcon boxSize={3} color={color}/>
                                                <Text color="brand.700" size='4'> {name}</Text>
                                                <Spacer/>
                                                <Text fontSize="sm"
                                                      fontWeight="bold"
                                                      color="brand.700">
                                                    {count}
                                                </Text>
                                            </Flex>
                                        </StackItem>
                                    )
                                }
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem colSpan={3}>
                    {/*Filer card & Add Suggestions*/}
                    <Card h={"72px"} mb={6}>
                        <CardBody borderRadius='lg'
                                  bg="#373F68"
                        >

                            <Flex alignItems={"center"} gap={6}>
                                <HStack gap={"3"}>
                                    <Image
                                        priority
                                        src="/bulb.svg"
                                        alt="Picture of the author"
                                        width={24}
                                        height={24}
                                    />

                                    <Text color="brand.white" fontWeight={"bold"}
                                          fontSize={"18px"}>{suggestions.length ?? 0} Suggestions</Text>
                                </HStack>

                                <HStack>
                                    <Menu>
                                        <MenuButton textTransform={"capitalize"} fontSize={"14px"} color="brand.400"
                                        >
                                            Sort by : {filter.replace("_", " ")}
                                        </MenuButton>
                                        <MenuList mt={8} minWidth='240px'>
                                            <MenuOptionGroup defaultValue={filter}
                                                             onChange={filterSuggestions}
                                                             type='radio'>
                                                <MenuItemOption value='most_upvotes'>Most
                                                    Upvotes</MenuItemOption>
                                                <MenuDivider/>
                                                <MenuItemOption value='least_upvotes'>Least Upvotes</MenuItemOption>
                                                <MenuDivider/>
                                                <MenuItemOption value='most_comments'>Most Comments</MenuItemOption>
                                                <MenuDivider/>
                                                <MenuItemOption value='least_comments'>Least Comments</MenuItemOption>
                                            </MenuOptionGroup>
                                        </MenuList>
                                    </Menu>
                                </HStack>
                                <Spacer/>
                                <Button fontSize={"sm"} color="brand.white" bg="brand.100" _hover={{bg: "brand.100"}}>+
                                    Add
                                    Feedback</Button>
                            </Flex>
                        </CardBody>
                    </Card>

                    {/*Suggestions*/}
                    <Stack gap={4}>
                        {
                            filteredSuggestions.map((suggestion: SuggestionProps) =>
                                <SuggestionCard
                                    key={`suggestion-${suggestion.id}`}
                                    suggestion={suggestion}
                                    increaseVote={increaseVote}
                                />
                            )
                        }
                    </Stack>


                </GridItem>
            </Grid>
        </Container>
    );
}
