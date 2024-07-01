import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'

type Prop = {
    error: string
}

const Error = ({ error }: Prop) => {
    return (
        <SafeAreaView style={styles.safeAreaErrorContainer}>
            <View style={styles.errorContainer}>
                <Text style={styles.error}>{error}</Text>
                <Image
                    style={styles.errorImg}
                    source={{
                        uri: '../assets/error.png',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaErrorContainer: {
        flex: 1,
        backgroundColor: '#1D2124'
    },
    errorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#1D2124'
    },
    error: {
        color: 'rgb(255,0,0)',
        textAlign: 'center',
        fontSize: 30,
    },
    errorImg: {
        width: '50%',
        height: '70%'
    },
});



export default Error