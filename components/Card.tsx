import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
    name: string,
    image: string,
    location: { name: string },
    origin: { name: string },
    navigation: any
}

const Card = ({ name, image, location, origin, navigation }: Props) => {

    return (
        <View style={styles.card} >
            <Image
                style={styles.Image}
                source={{
                    uri: image,
                }}
            />
            <View style={styles.informationContainer}>
                <Text style={styles.information}>Name: {name}</Text>
                <Text style={styles.information}>Location: {location.name}</Text>
                <Text style={styles.information}>Origin: {origin.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2e2e2e',
        height: 120,
        width: '30%',
        padding: 5,
        paddingLeft: 15,
        borderRadius: 10
    },
    Image: {
        height: 100,
        width: '35%',
        borderRadius: 10,
        marginRight: 13
    },
    informationContainer: {
        display: 'flex',
    },
    information: {
        color: '#fff'
    }
})

export default Card;