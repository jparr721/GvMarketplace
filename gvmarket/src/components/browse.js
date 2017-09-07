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

  },
  listText: {
    fontSize: 17,
  },
  categories: {
    paddingBottom: 1,
  }
};

class Browse extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Browse" />
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.categories}>
              <Button large full light style={styles.button}><Text style={styles.buttonText}>For Sale</Text></Button>
              <List>
                <ListItem><Button full transparent><Text style={styles.listText}>Textbooks</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Computers</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Electronics</Text></Button></ListItem>
              </List>
            </View>
            <View style={styles.categories}>
              <Button large full light style={styles.button}><Text style={styles.buttonText}>Tutoring</Text></Button>
              <List>
                <ListItem><Button full transparent><Text style={styles.listText}>Biology</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Computer Science</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Physics</Text></Button></ListItem>
              </List>
            </View>
            <View style={styles.categories}>
              <Button large full light style={styles.button}><Text style={styles.buttonText}>Housing</Text></Button>
              <List>
                <ListItem><Button full transparent><Text style={styles.listText}>Apartments / Housing</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Roomates</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Subletting</Text></Button></ListItem>
              </List>
            </View>
            <View>
              <Button large full light style={styles.button}><Text style={styles.buttonText}>Jobs</Text></Button>
              <List>
                <ListItem><Button full transparent><Text style={styles.listText}>Part-time</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Full-time</Text></Button></ListItem>
                <ListItem><Button full transparent><Text style={styles.listText}>Internships</Text></Button></ListItem>
              </List>
            </View>
          </ScrollView>
        </View>
      </PageView>
    );
  }
}

export default Browse;
