import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem, Button } from 'native-base';

import { Header, PageView, Card } from './common/index';

const styles = {
  buttonText: {
    fontSize: 26,
    color: '#34495e',
  },
  button: {
    borderBottomWidth: 0.5,
    borderColor: '#34495e',
  },
};

class Browse extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Browse" />
        <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Button large full light style={styles.button}><Text style={styles.buttonText}>For Sale</Text></Button>
            <List>
              <ListItem><Button full transparent><Text>Textbooks</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Computers</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Electronics</Text></Button></ListItem>
            </List>
          </View>
          <View>
            <Button large full light style={styles.button}><Text style={styles.buttonText}>Tutoring</Text></Button>
            <List>
              <ListItem><Button full transparent><Text>Biology</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Computer Science</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Physics</Text></Button></ListItem>
            </List>
          </View>
          <View>
            <Button large full light style={styles.button}><Text style={styles.buttonText}>Housing</Text></Button>
            <List>
              <ListItem><Button full transparent><Text>Apartments / Housing</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Roomates</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Subletting</Text></Button></ListItem>
            </List>
          </View>
          <View>
            <Button large full light style={styles.button}><Text style={styles.buttonText}>Jobs</Text></Button>
            <List>
              <ListItem><Button full transparent><Text>Part-time</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Full-time</Text></Button></ListItem>
              <ListItem><Button full transparent><Text>Internships</Text></Button></ListItem>
            </List>
          </View>
        </ScrollView>
        </View>
      </PageView>
    );
  }
}

export default Browse;
