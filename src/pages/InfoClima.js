import { View, Text, StyleSheet , ScrollView, Image} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
const date = require('date-and-time')
import InfoOpen from '../components/InfoMTN'

export default function InfoClima
(props) {

    const data = props.route.params
    const id = data.id
    const [nameCity, setNameCity] = useState("")
    const [uf, setUf] = useState("")
    const [resume, setResume] = useState()
    const [day_week, setDay_week] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()
    const [humidityMax, setHumidityMax] = useState()
    const [humidityMin, setHumidityMin] = useState()

    const now  =  new Date();
    const dateformat = date.format(now,'DD/MM/YYYY');
    const hourformat = date.format(now, 'HH')
   

    useLayoutEffect(() => {
        props.navigation.setOptions({
          title: data[id][dateformat].manha.entidade
        })

        setNameCity(data[id][dateformat].manha.entidade)

        if (hourformat >= 1 && hourformat <= 12 ){
          setUf(data[id][dateformat].manha.uf)
          setResume(data[id][dateformat].manha.resumo)
          setDay_week(data[id][dateformat].manha.dia_semana)
          setMax(data[id][dateformat].manha.temp_max)
          setMin(data[id][dateformat].manha.temp_min)
          setHumidityMax(data[id][dateformat].manha.umidade_max)
          setHumidityMin(data[id][dateformat].manha.umidade_min)

        }else if (hourformat > 12 && hourformat <= 18) {
          setUf(data[id][dateformat].tarde.uf)
          setResume(data[id][dateformat].tarde.resumo)
          setDay_week(data[id][dateformat].tarde.dia_semana)
          setMax(data[id][dateformat].tarde.temp_max)
          setMin(data[id][dateformat].tarde.temp_min)
          setHumidityMax(data[id][dateformat].tarde.umidade_max)
          setHumidityMin(data[id][dateformat].tarde.umidade_min)
  


        } else if (hourformat > 18 && hourformat <= 24) {
          setUf(data[id][dateformat].noite.uf)
          setResume(data[id][dateformat].noite.resumo)
          setDay_week(data[id][dateformat].noite.dia_semana)
          setMax(data[id][dateformat].noite.temp_max)
          setMin(data[id][dateformat].noite.temp_min)
          setHumidityMax(data[id][dateformat].noite.umidade_max)
          setHumidityMin(data[id][dateformat].noite.umidade_min)
          }

    
      }, [])


  return (
    <View style={styles.container}>

      <View style={styles.columnbox}> 
          <Text style={{fontSize: 35, fontWeight: 'bold',}}>{nameCity}, {uf}</Text>
          <Text style={{fontSize: 16,textAlign: 'center'}}>{day_week}  |  {dateformat}</Text>
          <Text style={{fontSize: 60,textAlign: 'center'}}>{max}º</Text>
          <Text style={{fontSize: 8}}></Text>

      </View>

      <View style={{flex: 3}}>

        <ScrollView> 

          <InfoOpen 
          title="00:00 às 12:00"
          data={data[id][dateformat].manha}
          />

          <InfoOpen
          title="12:00 às 18:00"
          data={data[id][dateformat].tarde}
          />

          <InfoOpen 
          title="18:00 às 24:00"
          data={data[id][dateformat].noite}
          />

        </ScrollView>   
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }, 
  linebox: {
    flexDirection: "row",
    padding:20,
    shadowColor: "black",
    borderRadius: 4,

  },
  line:{
    flex:1
  },
  columnbox: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  column:{
    flex:1
  }

})