import { Image,Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{fontSize:20, fontWeight:'700', fontFamily: 'Arial'}}>Presentación</Text>
        <Image 
        source={require('../../assets/images/Foto2x2~2.jpg')}
        style={styles.photo}
      ></Image>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textBold}>
            Nombre  :{'\n'}
            Apellido  :{'\n'}
            E-mail     : {'\n'}
          </Text>
          <Text style={styles.text}>
            César Antonio{'\n'}
            Aybar Vargas{'\n'}
            20240096@itla.edu.do{'\n'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'peru',
  },
  photo: {
    width:200,
    height:200,
    borderRadius:20,
    margin: 20
  },
  textBold:{
    textAlign: 'justify',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize:16
  },
  text:{
    textAlign: 'justify',
    fontFamily: 'Arial',
    fontSize: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 20
  }
});
