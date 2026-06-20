import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#1a1f36',
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginTop: 60,
  },

  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#00d4ff',
    elevation: 10,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 10,
    color: '#fff',
  },

  subtitle: {
    fontSize: 14,
    color: '#00d4ff',
    marginBottom: 40,
  },

  form: {
    width: '100%',
  },

  input: {
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
  },

  footerText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    marginBottom: 80,
  },
  
});
