import { View, Image, Text, TextInput, Button} from 'react-native';

export default function App() {
 

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1a1f36', padding: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 60 }}>
        <View style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden', marginBottom: 25, backgroundColor: '#00d4ff', elevation: 10, shadowColor: '#00d4ff', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8 }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/036/931/small/f-letter-wings-logo-design-with-black-bird-fly-wing-icon-vector.jpg' }}
          />
        </View>
        <Text style={{ fontSize: 32, fontWeight: '900', marginBottom: 10, color: '#fff' }}>Welcome</Text>
        <Text style={{ fontSize: 14, color: '#00d4ff', marginBottom: 40 }}>Sign in to your account</Text>
      </View>

      <View style={{ width: '100%' }}>
        <TextInput
          style={{
            width: '100%',
            height: 55,
            color: '#fff',
            fontSize: 16,
            borderColor: '#00d4ff',
            borderWidth: 2,
            borderRadius: 12,
            paddingHorizontal: 18,
            marginBottom: 18,
            backgroundColor: '#0f1423',
          }}
          placeholder="Username"
          placeholderTextColor="#666"
        />
        <TextInput
          style={{
            width: '100%',
            height: 55,
            color: '#fff',
            fontSize: 16,
            borderColor: '#00d4ff',
            borderWidth: 2,
            borderRadius: 12,
            paddingHorizontal: 18,
            marginBottom: 30,
            backgroundColor: '#0f1423',
          }}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />

          <Button title="Sign In" style={{ width: '100%', height: 55, backgroundColor: '#00d4ff', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }} titleStyle={{ fontSize: 18, fontWeight: 'bold', color: '#1a1f36' }} /> 


        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 80 }}>
          <Text style={{ color: '#999' }}>Don't have an account? </Text>
          <Text style={{ color: '#00d4ff', fontWeight: 'bold' }}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}
