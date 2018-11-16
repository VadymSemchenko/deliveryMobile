import React from 'react';
import { Container, Content, H1, Button, Text, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

const HomeScreen = ({ message }) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={styles.container}>
                <Text>
                    {message}
                </Text>
            </Container>
        </StyleProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;