import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React,{useState }   from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import one from '../../assets/1m.jpg'
import axios from 'axios';
const Home = () => {


const [City, setCity] =useState("")
const [Whether , setWhether] = useState({})

const getWhether= async () =>{
    if(!City.trim()) return

    console.log("Herrer")

try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b82cbf9a50377558041a4846872b3624`)
setWhether(res.data )
} 

catch (error) {
alert("Wrongnnnn")
    
}
}


  return (
    
    <ImageBackground source={one} style={styles.image}>
        <SafeAreaView style={{flex:1}}>
            <View style={styles.textInputContainer}>
                <TextInput
                   style={styles.textInput} 
                   value={City}
                   placeholder="Your Contury"
                   onChangeText={(text)=> setCity(text )}
                />

<AntDesign 
onPress={getWhether}
name="check" size={24} color="black" /> 

            </View>
{Object.keys(Whether).length > 0 ?
<>
<View style={styles.LocationContainer}>
<Text style={styles.Location}>
    {Whether?.name} ,{Whether?.sys?.country}
</Text>

</View>


<View style={styles.WehtherContainer}>
    <Text style={styles.temp}>
        {Math.round( Whether.main.temp)} F
    </Text>
    <Text style={styles.weather}>{Whether.weather[0].main}</Text>
</View>
</> 
:null} 

     
        </SafeAreaView>
      

    </ImageBackground>
    
  )
}

export default Home

const styles = StyleSheet.create({

image:{
    flex: 1,
    width: '100%',
},

textInputContainer:{
backgroundColor: "rgba(255,255,255,0.7)",
flexDirection:'row',
alignItems: "center",
alignSelf: 'center',
borderRadius: 10,
paddingHorizontal: 10,
 width:"60%",
justifyContent: 'space-between', 
 marginTop: 60,


},

textInput:{
height: 40,
fontWeight:'600',
},

LocationContainer:{
    marginVertical: 15,
},
Location:{
     color: "#FFFFFF",
     fontSize: 35,
     fontWeight:"500",
     textAlign: 'center',
     textShadowColor:"rgba(0,0,0,0.55)",
     textShadowOffset:{width: -1, height:1},
     textShadowRadius: 5,
},

WehtherContainer:{
    alignItems: 'center',
},

temp:{
    color: "#FFFFFF",
     fontSize: 35,
     fontWeight:"800",
     textAlign: 'center',
     textShadowColor:"rgba(0,0,0,0.55)",
     textShadowOffset:{width: -1, height:1},
     textShadowRadius: 5,
     paddingVertical:20,
     paddingHorizontal:30,
     borderRadius:30,
     overflow:'hidden',
     marginTop: 10,
     textShadowColor:"rgba(0,0,0,0.75)",
     textShadowOffset:{width:-3 , height:3},
     textShadowRadius:10,

},

weather:{
    color: "#FFFFFF",
     fontSize: 35,
     fontWeight:"500",
     textAlign: 'center',
     textShadowColor:"rgba(0,0,0,0.55)",
     textShadowOffset:{width: -1, height:1},
     textShadowRadius: 5,
}



})