import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList,Text, View } from 'react-native';
import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

export default function App() {
  let volunteerOpportunities= [...new Array(5)].map(i=>{
    return {
      title: faker.lorem.words(5),
      provider: faker.company.name(),
      location: faker.address.city(),
      description: faker.lorem.words(20)
    }
  }); 
  return (
    <View style={styles.container}>
      <FlatList
      renderItem={
          ({ item }) =>
            <View style={styles.listItem}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.item}>{item.provider}</Text>
              <Text style={styles.item}>{item.location}</Text>
              <Text style={styles.item}>{item.description}</Text>
            </View>
    } 
      data={volunteerOpportunities}></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#999',
    alignItems: 'left',
    height:44,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  header: {
    padding:10,
    fontSize:24,
    fontWeight:"bold",
    height:44,
  },
  item: {
    fontSize:18,
    margin: 5,
  }
});
