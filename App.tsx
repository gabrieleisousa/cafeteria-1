import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <View id='header-text'>
          <Text>Café do Código</Text>
          <Text>Seu café, uma linha por vez.</Text>
        </View>

        <View id='header-perfil'>
          <Ionicons name='person' size={20} color='#2f2d2c'></Ionicons>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'purple'
  },
  header:{
    width: '100%',
    paddingTop:60,
    paddingHorizontal: 24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})