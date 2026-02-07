
import { Image, StyleSheet, View,Text } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';


export default function Videoviewer(){

    return (
        <View style={style.container}>
            <View style={style.card}>
                <Text
                    style={style.text}
                >Video de mí experiencia de Desarrollo</Text>
                <YoutubePlayer
                    height={200}
                    width={350}
                    videoId={'1fDxeAUe4o4'}
                />
            </View>

            <View style={style.card}>
                <Text style={style.text}>
                    Código QR del Vídeo en YT
                </Text>
                <Image
                    source={require('../../assets/images/videoQR.png')}
                    style={{
                        height: 200,
                        width: 200

                    }}>
               </Image>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#8ec5a8',
    },
    card:{    
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        margin: 20
    },
    text:{
        textAlign: 'justify',
        fontFamily: 'Arial',
        fontWeight: '800',
        fontSize: 20
    }

})