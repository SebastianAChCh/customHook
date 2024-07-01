import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRickAndMorty } from '../hooks/useRickAndMorty';
import { Characters } from '../types/RickAndMorty';
import Card from '../components/Card';
import Error from '../components/Error';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    const [characters, setCharacters] = useState<Characters>();
    const { error, getCharacters, loading } = useRickAndMorty('');

    useEffect(() => {
        const getCharactersFetch = async () => {
            const response = await getCharacters();
            setCharacters(response);
        };

        getCharactersFetch();
    }, []);

    if (error) return (<Error error={error} />);

    if (loading) {
        return (
            <SafeAreaView>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <FlatList
                data={characters?.results}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card
                            name={item.name}
                            image={item.image}
                            location={item.location}
                            origin={item.origin}
                            navigation={navigator}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#1D2124'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7,
        marginTop: 7
    }
});

export default Index;
