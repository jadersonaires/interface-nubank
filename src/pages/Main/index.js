import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation} from './styles'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
         <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
         </CardHeader>
         <CardContent>
           <Title>Salto disponível</Title>
           <Description>R$ 210.456,01</Description>
         </CardContent>
         <CardFooter>
           <Annotation>
             Transferência feita para Banco do Brasil 300,00 as 19:00 horas.
           </Annotation>
         </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
