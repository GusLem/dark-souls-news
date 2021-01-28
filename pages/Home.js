import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderNews from './components/HeaderNews';
import NewsItem from './components/NewsItem';

export default function Home() {

  const [items,setItem] = useState([])

  const url = 'http://newsapi.org/v2/everything?q=Dark+Souls&apiKey=49b2b9816a85459f8c26881cbb8a0195&pageSize=20';

  useEffect(() => {
    axios.get(url)
    .then((res) => {
        setItem(res.data.articles)
    });
  },[]);

  return (
    <View style={styles.hder}>
      <HeaderNews  />
      <FlatList data={items} renderItem={({item}) => <NewsItem item={item} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  hder: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: 'lightgrey'
  }
})

