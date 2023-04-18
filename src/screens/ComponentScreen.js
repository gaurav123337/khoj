import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
      <Button
        style={styles.bottomSpace}
        title='Go to Registration'
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        style={styles.bottomSpace}
        title='Go to Header'
        onPress={() => navigation.navigate('Header')}
      />
      <Button
        style={styles.bottomSpace}
        title='Go to Scanner'
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  bottomSpace: {
    marginBottom: 15,
  },
});

export default ComponentScreen;
