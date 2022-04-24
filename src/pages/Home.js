import { View, Text, StyleSheet,FlatList,Button } from 'react-native'
import React, { useState, useLayoutEffect} from 'react';
import { getClima  } from '../api/BaseAPI';
import CityInformatio from '../components/InfoCidade';
import axios from 'axios';

export default function Home({navigation}) {

    const code_city = ["4314100","4311809","4304705","4320800","4307005"]
    const [infoCity, setInfoCity] = useState()
    const lista = []
    
    useLayoutEffect(() => {
        code_city.map((item) => {
            getClima(item)
            .then((data) => {
                data["id"] = item
                lista.push(data)
                setInfoCity(lista)

            })
            .catch(erro => console.log(erro))
     })
    
    navigation.setOptions({
        headerLeft: () => (
          <Button onPress={() => navigation.navigate("Sobre")} title=" Sobre "  color='#4682B4'/>
        ),
      });
    }, []);

    return (
        <View style={styles.container}> 
            {/* {console.log(infoCity)} */}
        <View > 
            <FlatList
            data={infoCity}
            renderItem={ ({item}) => {
                return <CityInformatio
                    dados={item}
                    navigation={navigation}
                />
            }}
            keyExtractor={item => item.id}
            />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }, 
});