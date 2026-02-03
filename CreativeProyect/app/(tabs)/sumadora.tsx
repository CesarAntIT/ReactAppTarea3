import { View, StyleSheet,Text, TextInput, Button} from "react-native";
import {useState} from "react";

export default function Sumadora(){

    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")

    const [result, setResult] = useState("")

    function Calcular(){
        const res = parseInt(n1) + parseInt(n2)
        setResult(res.toString())
    }

    function Clear(){
        setN1("")
        setN2("")
        setResult("")
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputs}
                keyboardType="numeric"
                value={n1}
                onChangeText={setN1}
            />
            <Text style={styles.text}>
                +
            </Text>
            <TextInput style={styles.inputs}
                keyboardType="numeric"
                value={n2}
                onChangeText={setN2}
            />
            <Text style={styles.text}>
                =
            </Text>
            <Text style= {styles.result}>
                {result}
            </Text>
            <View style={{flexDirection: "row", alignSelf: "center"}}>
                <Button title='calcular'
                onPress={Calcular}
                />
                <Button title='Clear'
                onPress={Clear}
                color={'grey'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems:'stretch',
    },
    inputs: {
        backgroundColor: 'white',
        fontSize: 25,
        margin: 20
    },
    text:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Arial'
    },
    result:{
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 700,
        fontFamily: 'Arial',
    }
})

