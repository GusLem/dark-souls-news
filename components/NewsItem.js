import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const NewsItem = ({item}) => {

    const {title, url, source, publishedAt, urlToImage} = item;

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.push('News',{url: url})}>
            <View style={styles.imghead}>
                <Image source={{uri: urlToImage}} style={styles.img} />
                <View style={styles.container2}>
                    <Text style={styles.headline}>{title}</Text>
                    <View style={styles.detail}>
                        <Text style={styles.src}>{source.name}</Text>
                        <Text>{moment(publishedAt).fromNow()}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 75,
        height: 75,
        marginRight: 15
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        padding: 15
    },

    container2: {
        flex: 1
    },

    headline: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
    },

    src: {
        fontWeight: 'bold',
        color: 'grey',
        marginRight: 20
    },

    imghead: {
        flexDirection: 'row',
    },

    detail: {
        flexDirection: 'row',
    },
})

export default NewsItem;