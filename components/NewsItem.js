import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const NewsItem = ({item}) => {

    const {title, source, publishedAt, urlToImage} = item;

    return (
        <TouchableOpacity style={styles.container}>
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