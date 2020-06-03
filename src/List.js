import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width, height} = Dimensions.get('window');
export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => 
                        <View style={styles.card}>
                            <View style={styles.colum1}>
                              <View style={{flex:1, flexDirection:'row'}}>
                                  <Image source={item.image_usa}  style={styles.usa}/>
                                  <Text style={{marginLeft:10,marginTop:22}}>{item.country_usa}</Text>
                              </View>
                              <View style={{flex:1, flexDirection:'row'}}>
                                  <Image source={item.image_turkey}  style={styles.usa}/>
                                  <Text style={{marginLeft:10,marginTop:22}} >{item.country_usa}</Text>
                              </View>
                              <View style={{justifyContent:'center', marginTop:6, marginRight:8}}>
                                <Ionicons name="ios-arrow-forward" size={24} style={{color:'#000',}}></Ionicons>
                              </View>
                            </View>
                          <View style={styles.colum2}>
                             <View style={{flex:1, flexDirection:'row',marginTop:12, marginLeft:14}}>
                                <Text style={styles.dolar}>{item.dolar}</Text>
                                <Text style={styles.tl}>{item.lira}</Text>
                                <Text style={styles.weight}>{item.weight}</Text>
                             </View>
                             <View style={styles.buttonCard}> 
                               <TouchableOpacity>
                                 <Text style={styles.text}>Matching items</Text>
                               </TouchableOpacity>
                             </View>

                          </View>
                        </View>
                }
                keyExtractor={item => item.id} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    height:height,
  },
  card:{
    backgroundColor:'white',
    height:100,
    margin:5,
    borderRadius:10
  },
  usa:{
    width:45,
    height:40,
    borderRadius:11,
    marginLeft:15,
    marginTop:10
  },
  colum1:{
    flexDirection:'row',
  },
  colum2:{
    flexDirection:'row',
  },
  dolar:{
    fontSize:16,
    fontWeight:'300'
  },
  tl:{
    fontSize:16,
    fontWeight:'300',
    marginLeft:10
  },
  weight:{
    fontSize:16,
    fontWeight:'300',
    marginLeft:10
  },
  buttonCard:{
    position: 'absolute',
    right:20,
    top:7,
    width:130,
    backgroundColor:'#FFF9ED',
    height:30,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6
  },
  text:{
    fontSize:16,
    color:'#FBB522',
    fontWeight:'600'
  }
})
