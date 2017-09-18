import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from 'native-base';

import { Header, PageView } from './common/index';

const styles = {
  titles: {
    color: '#0d67a2',
    fontSize: 20,
  }
}
class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected: 'tutoring',
      results: {
        items: []
      }
    }
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <PageView>
        <Header headerText="Make A Post" />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.titles}>Category: </Text>
            </View>
            <View style={{ width: '75%', marginTop: -10, }}>
              <Picker iosHeader="Select" mode="dropdown" selectedValue={this.state.selected} onValueChange={this.onValueChange.bind(this)}>
                <Picker.item label='Tutoring' value='tutoring'/>
                <Picker.item label='For Sale' value='for-sale'/>
                <Picker.item label='Housing' value='housing'/>
                <Picker.item label='Employment' value='employment'/>
                <Picker.item label='Miscellaneous' value='misc' />
              </Picker>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ textAlign: 'center' }}>
              <Text style={styles.titles}>Title: </Text>
            </View>
            <View style={{ width: 62 }} />
            <View style={{ width: '70%', marginTop: 3 }}>
              <TextInput placeholder="Post title" />
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.titles}>Price: </Text>
            </View>
            <View style={{ width: 55 }} />
            <View style={{ width: '70%', marginTop: 10 }}>
              <TextInput placeholder="Place" />
            </View>
          </View>

        </View>

      </PageView>
    );
  }
}

export default Sell;
