
import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Box, Image, Heading, Container, Stack, Text} from '@chakra-ui/react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'


const headingOptions = {
    pos:"absolute",
    left: "50%",
    top: "50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={"container.xl"} minH={'100vh'} p='16'>
                <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m={'auto'}>
                    Servises
                </Heading>

                <Stack

                h="full"
                p={"4"}
                alignItems={'center'}
                direction={['column', 'row']}
                >
                    <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']}/>

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '6']} textAlign={'centre'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat pariatur facilis ducimus nobis eligendi illo est ad asperiores eius itaque veniam, incidunt architecto delectus aperiam esse facere nesciunt perferendis quod ab culpa. Adipisci facilis necessitatibus, reprehenderit provident magni nemo consequatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, beatae? Sunt, iusto. Eveniet illo consectetur cum! Officiis, harum dolorum porro commodi facere similique, nostrum odio distinctio delectus maxime earum accusamus iure, nobis pariatur dolores libero nulla officia sequi. Fugit, voluptas.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maxime saepe aut animi adipisci! Exercitationem quisquam eius facere, odio totam eaque? Repellendus beatae rerum perspiciatis, quaerat minus, tempore quis ad totam cumque laborum facilis incidunt esse, ipsam sunt illo quas!
                    </Text>
                </Stack>

            </Container>
        </Box>
    )
}

const MyCarousel = () =>(
    <Carousel autoplay infiniteLoop interval = {1000} showThumbs={false} showStatus={false} showArrows={false}>

        <Box w="full" h={"100vh"} > 
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
            Watch the Future
        </Heading>
        </Box>

        <Box w="full" h={"100vh"} > 
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingOptions}>
            Gaming is Future
        </Heading>
        </Box>

        <Box w="full" h={"100vh"} > 
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingOptions}>
            Bang On
        </Heading>
        </Box>
     
        <Box w="full" h={"100vh"} > 
        <Image src={img4} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingOptions}>
            Gaming on Console
        </Heading>
        </Box>
    </Carousel>
)

export default Home;
