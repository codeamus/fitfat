import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Login = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Login</Text>
      <Link href="/onboarding">
        <Text>Ir a Onboarding</Text>
      </Link>
    </View>
  );
};

export default Login;
