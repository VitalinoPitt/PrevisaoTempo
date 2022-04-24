import { View, Text,StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';

export default function InfoOpen(props) {

    const data = props.data
    const title = props.title
    const [modalVisible, setModalVisible] = useState(false);
    var bitmap = (base64str) =>  fs.readFileSync('./your-image.png', 'base64');

    useLayoutEffect(() => {
        if(modalVisible == false){
        }
    }, [])
    return (
        
    <TouchableOpacity onPress={ () =>{setModalVisible(!modalVisible)}}> 
            {modalVisible == true ?
            <View style={styles.box1}>
                <View style={styles.line}>
                    <View style={{flex:2, flexDirection: "row", alignItems: 'center'}}>
                        <Image
                            style={{width:140, height:40}}
                                source={{uri:data.icone}}
                        />
                        <Text style={{marginStart:10, fontWeight: 'bold'}}>{title}</Text>
                    </View>

                    <Text style={{textAlign:'left',marginEnd: 20}}>></Text>
                </View>
            </View>
            :
            <View style={styles.box2}>
                    <View style={{flexDirection: "row", marginBottom:10, paddingHorizontal: 8, alignItems: 'center'}}>
                        <View style={{flex:2, flexDirection: "row", alignItems: 'center'}}>
                            <Image
                                style={{width:140, height:62}}
                                    source={{uri:data.icone}}
                            />
                            <Text style={{marginStart:10, fontWeight: 'bold'}}>{title}</Text>
                        </View>
                        <Text style={{textAlign:'left',marginEnd: 20}}></Text>
                    </View>
                    <View style={{paddingHorizontal: 8}}> 
                    <Text>Temperatura:  Minima: {data.temp_min}º    |    Máxima:  {data.temp_max}º</Text>
                    <Text>Estação: {data.estacao}      |      Sol: {data.nascer} às {data.ocaso}</Text>
                    <Text>Vento: {data.int_vento} - {data.dir_vento}   |   Umidade: {data.umidade_min}% à {data.umidade_max}%</Text>
                    <Text>{data.resumo}</Text>
                    </View>
            </View>
        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex:1,
    }, 
    box1:{
        marginHorizontal:30,
        marginBottom: 30,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#4682B4",

    },
    box2:{
        marginHorizontal:20,
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingBottom:10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#4682B4",
    },
    line:{
        flexDirection: "row",
        paddingHorizontal: 4,
        alignItems: 'center'
    }
  })