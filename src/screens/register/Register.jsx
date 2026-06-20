import { View, Image, Text, TextInput, Button } from 'react-native';
import { styles } from './Register.styles';

export default function Register() {
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

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us today</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button title="Sign Up" color="#00d4ff" />
        </View>

        <Text style={styles.termsText}>
          By signing up, you agree to our Terms of Service and Privacy Policy
        </Text>

        <Text style={styles.footerText}>
          <Text style={{ color: '#999' }}>Already have an account? </Text>
          <Text style={{ color: '#00d4ff', fontWeight: 'bold' }}>Sign In</Text>
        </Text>
        
      </View>
    </View>
  );
}
