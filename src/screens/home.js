import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Plan</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <View style={styles.box} />
            <Text style={styles.text}>Cleaner</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box} />
            <Text style={styles.text}>Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}></View>
            <Text style={styles.text}>Cleaner1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}></View>
            <Text style={styles.text}>Appointment2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'column',
  },
  header: {
    height: 100,
    backgroundColor: '#0020F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#6a76f5',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default Home;
