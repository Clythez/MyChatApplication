import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login: React.FC<{name: String}> = ({name}) => {
  return (
    <View style={styles.layout}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Login;
