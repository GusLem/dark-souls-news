import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderNews = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text} >Dark Souls News</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'darkslateblue',
  },

  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default HeaderNews;