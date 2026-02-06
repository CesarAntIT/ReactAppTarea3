import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function NumLetter(){

    const [inputNumber,setInputNumber] = useState("12345")
    const [letterTranslation, setTranslation] = useState("Doce mil trecientos cuarenta y cinco")
    const [showResult, setShowResult] = useState(false)
    const NaLService = new NumeroALetras()

    function GetResults(){
        let res = NaLService.Operacion(inputNumber) ?? "Error";
        setTranslation(res);
        setShowResult(true);
    }

    function Clear(){
        setShowResult(false)
        setInputNumber("")
    }

    return (
        <View style={style.container}>
            <Text
                style={style.text}
            >Introduzca el Numero</Text>
            <TextInput
                style={style.inputs}
                value={inputNumber}
                onChangeText={setInputNumber}
                keyboardType="numeric"
                />
            <View style={style.button}>
                <Button
                    title="Mostrar"
                    color={'#d49802'}
                    onPress={GetResults}
                />
                <Button
                    title="Reset"
                    onPress={Clear}
                />
            </View>           

            {showResult && 
            <View>
                <Text
                    style={style.text}
                >Resultado:</Text>
                <View style={style.card}>
                    <Text
                        style={style.result}
                    >{letterTranslation}</Text>    
                </View>
            </View>
            }

           
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffd0008f',
        alignItems:'stretch',
    },
    inputs: {
        backgroundColor: 'white',
        fontSize: 25,
        margin: 20,
        padding: 10,
        borderRadius: 10
    },
    text:{
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 700,
        fontFamily: 'Arial',
        paddingTop: 20,
        paddingLeft: 10
    },
    result:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Arial',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10
    },
    button:{
        marginEnd: 60,
        marginStart: 60,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})

class NumeroALetras {

    CeroA29 = [
    " cero", " uno", " dos", " tres", " cuatro", " cinco", " seis", " siete", " ocho", " nueve",
    " diez", " once", " doce", " trece", " catorce", " quince", " dieciséis", " diecisiete", " dieciocho", " diecinueve",
    " veinte", " veintiuno", " veintidós", " veintitrés", " veinticuatro", " veinticinco", " veintiséis", " veintisiete", " veintiocho", " veintinueve"]

    TreintaA90 = [" treinta"," cuarenta", " cincuenta", " sesenta"," setenta"," ochenta"," noventa"]

    CienA900 = ["cien", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos",
                "seiscientos", "setecientos", "ochocientos", "novecientos"]

  DobleDigito(numero: string){
    const valorNumero = parseInt(numero);

    if (isNaN(valorNumero)){
        return ("Valor ingresado no es un número")
    }
    else if (valorNumero < 30){
        return this.CeroA29[valorNumero]
    }
    else if (valorNumero >= 30){
        let res = ""
        const numString = valorNumero.toString();
        switch(numString.slice(0,1)){
            case "3": 
                res = res+ this.TreintaA90[0];
                break;
            case "4": 
                res = res+ this.TreintaA90[1];
                break;
            case "5": 
                res = res+ this.TreintaA90[2];
                break;            
            case "6": 
                res = res+ this.TreintaA90[3];
                break;
            case "7": 
                res = res+ this.TreintaA90[4];
                break;
            case "8": 
                res = res+ this.TreintaA90[5];
                break;             
            case "9": 
                res = res+ this.TreintaA90[6];
                break;     
            default:
                break;
        }
        if (numString.slice(1) !== "0"){
            res = res + " y" + this.CeroA29[parseInt(numString.slice(1))]
        }
        return res;
    }

    return "Numero no pudo ser mostrado"
  }
  
  TripleDigitio(numero: string){
    const trueNum = parseInt(numero);
    if (isNaN(trueNum)){
        return "!!!!!!!!!!!!!"
    }
    const OpNum = trueNum.toString();
    let res = "";
    switch(OpNum.slice(0,1)){
        case "1":
            if (trueNum === 100 )
                return this.CienA900[0]
                res = res + this.CienA900[1] + this.DobleDigito(OpNum.slice(1))
            return res;
        case "2":
            res = res + this.CienA900[2] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "3":
            res = res + this.CienA900[3] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "4":
            res = res + this.CienA900[4] + this.DobleDigito(OpNum.slice(1))
            return res;
          case "5":
            res = res + this.CienA900[5] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "6":
            res = res + this.CienA900[6] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "7":
            res = res + this.CienA900[7] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "8":
            res = res + this.CienA900[8] + this.DobleDigito(OpNum.slice(1))
            return res;
         case "9":
            res = res + this.CienA900[9] + this.DobleDigito(OpNum.slice(1))
            return res; 
       
    }

  }

  Operacion(numero: string){
    const opNum = parseInt(numero)
    if (isNaN(opNum))
        return ("Dato Ingresado No es Un Numero")
    
    switch(numero.length){
        case 1:
            return this.DobleDigito(numero);
        case 2: 
            return this.DobleDigito(numero);
        case 3:
            return this.TripleDigitio(numero);
        default:
            return "Numero no Soportado (Mayor a Un Millón)"
    }
  }
}