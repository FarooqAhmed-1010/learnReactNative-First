import { View, Image, Text, TextInput, Button } from 'react-native';
import { styles } from './Login.styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/036/931/small/f-letter-wings-logo-design-with-black-bird-fly-wing-icon-vector.jpg'
            }}
          />
        </View>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
        

        <Button title="Sign In" />

        <Text style={styles.footerText}>
          <Text style={{ color: '#999' }}>Don't have an account? </Text>
          <Text style={{ color: '#00d4ff', fontWeight: 'bold' }}>Register</Text>
        </Text>
      </View>
    </View>
  );
}