import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const onboardingscreen = () => {
  const navigation = useNavigation();

  const handlehome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clean Room</Text>
      <Text style={styles.text}>Clean Life</Text>
      <Image source={require('../images/clean.jpeg')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handlehome}>
        <Text style={styles.btntxt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a76f5',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  image: {
    height: 400,
    width: 400,
    resizeMode: 'cover',
  },
  button: {
    width: 335,
    borderRadius: 14,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
  },
  btntxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5864f5',
    textAlign: 'center',
  },
});

export default onboardingscreen;
