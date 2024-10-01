import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const FirstStep = () => {
  return (
    <View>
      <Link href="/onboarding/firststep">
        <Text>Ir a Primer paso</Text>
      </Link>
    </View>
  );
};

export default FirstStep;
