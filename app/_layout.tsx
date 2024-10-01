import '../global.css';

import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  initialRouteName: '/',
};

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
