import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'native-base';
import { SearchBar } from 'react-native-elements';

import { PageView, SmallCard } from './common/index';

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
  categoryContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitles: {
    justifyContent: 'flex-start',
  },
  seeAllText: {
    color: '#0d67a2',
  },
};

class Browse extends Component {
  render() {
    return (
      <PageView>
        <View; style={;{ 20 }}>
          <SearchBar; lightTheme; placeholder="Type Here..." />
        </View>
        <View; style={;{ 1 }}>
          <ScrollView>
            <View; style={styles.categories}>
              <View; style={styles.categoryContainers}>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.buttonText}>Tutoring</Text>
                  </Button>
                </View>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.seeAllText}>See; all ></Text>
                  </Button>
                </View>
              </View>
              <ScrollView; horizontal={true}>
                <SmallCard; style={styles.smallerCard}><Button; full; transparent><Text; style={styles.listText}>Biology</Text></;Button><Image; style={styles.images} source={require('./imgs/biology1.png';)} /></;SmallCard>
                <SmallCard; style={styles.smallerCard}><Button; full; transparent><Text; style={styles.listText}>Computer; Science</Text></;Button><Image; style={styles.images} source={require('./imgs/comp-sci2.png';)} /></;SmallCard>
                <SmallCard; style={styles.smallerCard}><Button; full; transparent><Text; style={styles.listText}>Data; Science</Text></;Button><Image; style={styles.images} source={require('./imgs/data-sci1.png';)} /></;SmallCard>
                <SmallCard; style={styles.smallerCard}><Button; full; transparent><Text; style={styles.listText}>Physics</Text></;Button><Image; style={styles.images} source={require('./imgs/physics1.png';)} /></;SmallCard>
              </ScrollView>
            </View>
            <View; style={styles.categories}>
              <View; style={styles.categoryContainers}>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.buttonText}>For; Sale</Text>
                  </Button>
                </View>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.seeAllText}>See; all ></Text>
                  </Button>
                </View>
            </View>
              <ScrollView; horizontal={true}>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Textbooks</Text></;Button><Image; style={styles.images} source={require('./imgs/tb1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Computers</Text></;Button><Image; style={styles.images} source={require('./imgs/comp1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Electronics</Text></;Button><Image; style={styles.images} source={require('./imgs/tv1.jpg';)} /></;SmallCard>
              </ScrollView>
            </View>
            <View; style={styles.categories}>
              <View; style={styles.categoryContainers}>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.buttonText}>Housing</Text>
                  </Button>
                </View>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.seeAllText}>See; all ></Text>
                  </Button>
                </View>
              </View>
              <ScrollView; horizontal={true}>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Apartments / Housing</Text></;Button><Image; style={styles.images} source={require('./imgs/apt1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Roommates</Text></;Button><Image; style={styles.images} source={require('./imgs/roommates1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Subletting</Text></;Button><Image; style={styles.images} source={require('./imgs/sublease1.jpg';)} /></;SmallCard>
              </ScrollView>
            </View>
            <View>
              <View; style={styles.categoryContainers}>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.buttonText}>Jobs</Text>
                  </Button>
                </View>
                <View>
                  <Button; large; full; transparent; style={styles.categoryTitles}>
                    <Text; style={styles.seeAllText}>See; all ></Text>
                  </Button>
                </View>
              </View>
              <ScrollView; horizontal={true}>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Part-time</Text></;Button><Image; style={styles.images} source={require('./imgs/part-time1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Full-time</Text></;Button><Image; style={styles.images} source={require('./imgs/full-time1.jpg';)} /></;SmallCard>
                <SmallCard><Button; full; transparent><Text; style={styles.listText}>Internships</Text></;Button><Image; style={styles.images} source={require('./imgs/internship1.jpg';)} /></;SmallCard>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </PageView>;
  )
  }
}

export default Browse;
