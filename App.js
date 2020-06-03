import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, FlatList } from 'react-native'
import List from './src/List';



class App extends Component {
  state  = {
    data: [
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$12.32',
        Lira:'₺82,81',
        weight:'16kg' 
      },
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$9.12',
        Lira:'₺61,30',
        weight:'1.43kg'        
      },
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$34.00',
        Lira:'₺228,54',
        weight:'40kg'        
      },
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$22.12',
        Lira:'₺148,68',
        weight:'11kg'        
      }, 
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$11.50',
        Lira:'₺77,30',
        weight:'15kg'        
      },
      {
        TR_name: 'Turkey',
        TR_ımage: require('./src/ımage/TR.jpg'),
        USA_name: 'USA',
        USA_ımage: require('./src/ımage/USA.jpg'),
        Dolar:'$100.50',
        Lira:'₺676,32',
        weight:'112kg'        
      },       
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <List  data={this.state.data}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  }
});

export default App;
