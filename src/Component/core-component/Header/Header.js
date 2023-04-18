import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={[styles.container, styles.rightSpace]}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.leftSpace}>
        <Text style={[styles.textStyle, styles.boldFont]}>Sundar Singh</Text>
        <Text style={styles.textStyle}>ASXX-XX-XX</Text>
        <Text style={styles.textStyle}>985898-XXXX</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    border: 2,
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  leftSpace: {
    marginLeft: 10,
  },
  rightSpace: {
    marginRight: 10,
  },
  boldFont: {
    fontWeight: 'bold',
  },
  lgFont: {
    fontSize: '28',
  },
});

export default Header;
