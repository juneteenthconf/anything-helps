import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import {default as theme} from './custom-theme.json';
import { ApplicationProvider, List, ListItem, Button} from '@ui-kitten/components';

export default function App() {

  const [volunteerOpportunities, setVolunteerOpportunities] = useState([]);

  useEffect(() => {
    //fetch('http://localhost:3000/opportunities')
    fetch('https://anythinghelpsapi.azurewebsites.net/opportunities')
      .then((response) => response.json())
      .then((json) => setVolunteerOpportunities(json))
      .catch((error) => console.log(error))
  }, []);

  return (
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <View style={styles.container}>
      <Button>HOME</Button>
        <List
          renderItem={
            ({ item }) =>
            <ListItem 
              title={`${item.title}`}
              description={`${item.description}`}/>
             /* 
             <View >
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.item}>{item.provider}</Text>
                <Text style={styles.item}>{item.location}</Text>
                <Text style={styles.item}>{item.description}</Text>
              </View>
              */
          }
          data={volunteerOpportunities} />
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#999',
    alignItems: 'left',
    height: 44,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  header: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    height: 44,
  },
  item: {
    fontSize: 18,
    margin: 5,
  }
});
