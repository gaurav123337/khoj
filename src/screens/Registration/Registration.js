import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import Scanner from '../../Component/core-component/Scanner/Scanner';

const Registration = ({ navigatoin }) => {
  const [scan, setScan] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.bottomBorderOnField,
          styles.paddingOnField,
          styles.bottomSpace,
        ]}
        placeholder='user name'
      />
      <TextInput
        style={[
          styles.bottomBorderOnField,
          styles.paddingOnField,
          styles.bottomSpace,
        ]}
        placeholder='email'
      />
      <TextInput
        style={[
          styles.bottomBorderOnField,
          styles.paddingOnField,
          styles.bottomSpace,
        ]}
        placeholder='password'
      />
      <TextInput
        style={[
          styles.bottomBorderOnField,
          styles.paddingOnField,
          styles.bottomSpace,
        ]}
        placeholder='phone no.'
      />
      <Button style={styles.bottomSpace} title='Register' onPress={() => {}} />
      <Button
        style={styles.bottomSpace}
        title='Scan'
        onPress={() => setScan(true)}
      />
      {scan && <Scanner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    padding: 5,
  },
  bottomBorderOnField: {
    borderBottomWidth: 2,
  },
  paddingOnField: {
    padding: 5,
  },
  leftSpace: {
    marginLeft: 10,
  },
  rightSpace: {
    marginRight: 10,
  },
  bottomSpace: {
    marginBottom: 10,
  },
  boldFont: {
    fontWeight: 'bold',
  },
  lgFont: {
    fontSize: '28',
  },
});

export default Registration;
