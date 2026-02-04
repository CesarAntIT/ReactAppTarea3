import { StyleSheet, TextInput, View, Button, Modal, Text,ScrollView} from "react-native";
import{ useState } from "react";


export default function TablaMultiplicar(){



    const [tableVisible, setTableVisible] = useState(false)
    const [inputNumber,setInputNumber] = useState("00")
    const [multResults, setMultResults] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])

    function GetTableValues(){
        let resArray = [0,0,0,0,0,0,0,0,0,0,0,0,0]

        for (let i = 1; i < 14;i++){
            const res = parseInt(inputNumber)*i
            resArray[i-1] = res
        }

        setMultResults(resArray)
    }

    return(
        

        <View style = {style.container}>
            <Text style={{fontSize:20, fontWeight:'700', fontFamily: 'Arial'}}>
                Multiplicación de 1 al 13
            </Text>

            <TextInput
                style={style.textInput}
                placeholder="00"
                onChangeText={setInputNumber}
                keyboardType="numeric"
            />
            <Button
                title="Mostrar Tabla"
                onPress={() => {
                     GetTableValues();
                    setTableVisible(true)                   
                }}
            />

            <Modal
                animationType="slide"
                onRequestClose={() => setTableVisible(false)}
                visible={tableVisible}
            >
                <ScrollView contentContainerStyle={style.card}>

                   {multResults.map((item,index) => 
                   (
                    <View style={{flexDirection: 'row'}} key={index} >
                        <Text style={style.tableCell}> {index+1}</Text><Text style={style.tableCell}>{item}</Text>
                    </View>
                   ))} 

                    <View style= {{margin: 10, width: 100, alignItems: 'center'}}>
                        <Button
                            title="Cerrar"
                            color={'red'}
                            onPress={() => setTableVisible(false)}
                        />    
                    </View>
               </ScrollView>
            </Modal>
        </View>



        
    )
}

const style = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'lightcoral',
        alignItems: 'stretch',
        padding: 20
    },
    textInput: {
        backgroundColor: 'white',
        fontSize: 25,
        margin: 20,
        padding: 20,
        borderRadius: 10,
        textAlign: 'center'
    },
    showTable: {
        backgroundColor: 'grey',
        padding: 20,
        margin: 50,
        alignItems: 'center',
        borderRadius: 50,
    },
      card: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center'
  },
  tableCell:  {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 175,
    padding: 20,
    fontSize: 25
  }
})