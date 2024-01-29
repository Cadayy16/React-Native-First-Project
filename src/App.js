/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  View,
  Dimensions,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsCard from './components/NewsCard';
import news_data from "./news_data.json";

function App() {
  const renderNews = ({item}) => <NewsCard news={item}/>
  const [text, setText] = useState('Ara.. ');

  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} 
      onChangeText={onChangeText} 
      value={text} />

        <FlatList
          keyExtractor={item => item.id.toString()} 
          data={news_data} 
          renderItem={renderNews}
          numColumns={2}
          />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    headerText:{
      fontWeight:"bold",
      fontSize:50,
      color:"#800080",
      margin:15,
      marginBottom:2
    },
    input:{
      backgroundColor:"#eceff1",
      borderRadius:10,
      margin:15,
      marginBottom:5,
      padding:15,
      fontSize:22,
      height:60
    }
});

export default App;
