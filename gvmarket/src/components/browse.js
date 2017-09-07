import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, ListItem, Button } from 'native-base';
import { SearchBar } from 'react-native-elements';

import { Header, PageView, Card, ColumnGrid, SmallCard } from './common/index';

const styles = {
  buttonText: {
    fontSize: 24,
    color: '#0d67a2',
    fontWeight: '700',
  },
  listText: {
    fontSize: 17,
  },
  categories: {
    paddingBottom: 1,
  },
  images: {
    flex: 1,
    height: 100,
    width: null,

  },
  phoneImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  smCard: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class Browse extends Component {
  render() {
    return (
      <PageView>
        <View style={{ paddingTop: 20 }}>
          <SearchBar
            lightTheme
            placeholder="Type Here..." />
          </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.categories}>
              <Button large full light><Text style={styles.buttonText}>For Sale</Text></Button>
              <ScrollView horizontal={true}>
                <SmallCard><Button full transparent><Text style={styles.listText}>Textbooks</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Computers</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Electronics</Text></Button></SmallCard>
              </ScrollView>
            </View>
            <View style={styles.categories}>
              <Button large full light><Text style={styles.buttonText}>Tutoring</Text></Button>
              <ScrollView horizontal={true}>
                <SmallCard><Button full transparent><Text style={styles.listText}>Biology</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Computer Science</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Data Science</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Physics</Text></Button></SmallCard>
              </ScrollView>
            </View>
            <View style={styles.categories}>
              <Button large full light><Text style={styles.buttonText}>Housing</Text></Button>
              <ScrollView horizontal={true}>
                <SmallCard><Button full transparent><Text style={styles.listText}>Apartments / Housing</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Roomates</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Subletting</Text></Button></SmallCard>
              </ScrollView>
            </View>
            <View>
              <Button large full light><Text style={styles.buttonText}>Jobs</Text></Button>
              <ScrollView horizontal={true}>
                <SmallCard><Button full transparent><Text style={styles.listText}>Part-time</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Full-time</Text></Button></SmallCard>
                <SmallCard><Button full transparent><Text style={styles.listText}>Internships</Text></Button></SmallCard>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </PageView>
    );
  }
}

export default Browse;
