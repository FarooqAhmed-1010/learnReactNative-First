import { View, Image, Text, TextInput, Button } from 'react-native';

export default function App() {
 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecb5db', padding: 20 }}>

      <View style={{ width: 120, height: 120, borderRadius: 60, overflow: 'hidden', marginBottom: 30, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/036/931/small/f-letter-wings-logo-design-with-black-bird-fly-wing-icon-vector.jpg' }}
        />
      </View>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#333' }}>Login</Text>

        <TextInput
        style={{
          width: '100%',
          height: 50,
          color: '#000',
          fontSize: 16,
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 15,
          marginBottom: 15,
          backgroundColor: '#fff',
        }}
        placeholder="Username"
        placeholderTextColor="#999"
      />
      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: '#000',
          fontSize: 16,
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 15,
          marginBottom: 25,
          backgroundColor: '#fff',
        }}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
        <Button title="Submit" />
    </View>
  );
}
