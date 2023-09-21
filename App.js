import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {

  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <View style={styles.container}>
      <Text>YO YO!</Text>
      <StatusBar style="auto" backgroundColor='#ff0000' translucent={true}/>
      <Button title='Click Me' onPress={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
