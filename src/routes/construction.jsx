import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react'

export default function Construction() {
  return (
    <div className='buil-page'>
        <Card align='center'>
            <CardHeader>
                <Heading size='md' as='h1'> Feliciano Castro</Heading>
            </CardHeader>
            <CardBody>
                <Text>Sitio en Construcción</Text>
            </CardBody>
            <CardFooter>
            <Text>Contactános: contacto@felicianocastro.org</Text>
            </CardFooter>
        </Card>
    </div>
  );
}