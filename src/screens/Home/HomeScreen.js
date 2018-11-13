import React from 'react';
import { Container, Content, H1, Button, Text } from 'native-base';

// import HOME_SCREEN_NAME from '../../constants/homeScreenName';

const HomeScreen = ({ onPress }) => (
    <Container>
        <Content>
            <H1>Home</H1>
            <Button onPress={onPress}>
                <Text>
                    Test
                </Text>
            </Button>
        </Content>
    </Container>
);

export default HomeScreen;