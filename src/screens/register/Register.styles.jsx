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
    marginTop: 40,
  },

  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#00d4ff',
    elevation: 10,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 8,
    color: '#fff',
  },

  subtitle: {
    fontSize: 13,
    color: '#00d4ff',
    marginBottom: 25,
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
    marginBottom: 16,
    backgroundColor: '#0f1423',
  },

  buttonContainer: {
    marginVertical: 20,
  },

  footerText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 15,
    marginBottom: 60,
  },

  termsText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 11,
    marginBottom: 20,
    lineHeight: 18,
  },
  
});
