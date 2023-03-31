import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar backgroundColor="#009387" barStyle='light-content' />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
          Drawer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Crops')}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
          Crops
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    width: 150,
    margin: 5,
  },
});

export default Home;
