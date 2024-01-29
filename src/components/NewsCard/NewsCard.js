import React from 'react';
import {
    Text,
    View,
    Image,
  } from 'react-native';

  import styles from "./NewsCard.style";

const NewsCard = ({news}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image style={styles.image} source={{uri: news.imageUrl}}></Image>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{news.title}</Text>
                    <Text style={styles.price}>{news.price}</Text>
                    <Text style={styles.inStock} >{news.inStock ? "" : "STOKTA YOK"}</Text>
                </View>
            </View>
        </View>
    );  
};

export default NewsCard;