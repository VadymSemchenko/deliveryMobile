import React from 'react';
import { Container, Content, H1, Button, Text, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

const HomeScreen = ({ signIn, signOut, checkAuth }) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={styles.container}>
                <View>
                    <GoogleSigninButton
                        style={{ width: 48, height: 48 }}
                        size={GoogleSigninButton.Size.Icon}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn}
                    />
                <Button onPress={checkAuth} danger>
                    <Text>
                        CheckAth
                    </Text>
                </Button>
                <Button onPress={signOut} primary>
                    <Text>
                        signOut
                    </Text>
                </Button>
                </View>
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