import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/onboarding">
        <Text>Ir a Onboarding</Text>
      </Link>
    </View>
  );
};

export default Login;
