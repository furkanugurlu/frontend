import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, FlatList } from 'react-native'
import List from './src/List';



class App extends Component {
  state  = {
    data: [
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$12.32',
        lira:'₺82,81',
        weight:'16kg' 
      },
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$9.12',
        lira:'₺61,30',
        weight:'1.43kg'        
      },
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$34.00',
        lira:'₺228,54',
        weight:'40kg'        
      },
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$22.12',
        lira:'₺148,68',
        weight:'11kg'        
      }, 
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$11.50',
        lira:'₺77,30',
        weight:'15kg'        
      },
      {
        country_turkye: 'Turkey',
        image_turkey: require('./src/ımage/TR.jpg'),
        country_usa: 'USA',
        image_usa: require('./src/ımage/USA.jpg'),
        dolar:'$100.50',
        lira:'₺676,32',
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
