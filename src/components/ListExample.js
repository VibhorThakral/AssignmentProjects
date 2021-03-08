import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  RefreshControl
} from 'react-native';

const Item = ({ data }) => { 
  return (
    <View style={styles.cardItem} key={data.id}>
      <View>
        <Image style={styles.avatar} source={{uri: `${data.avatar}`}}/>
      </View>
      <View style={styles.userDetails}>
        <Text style={styles.userName}>
          {`${data.first_name} ${data.last_name}`}
        </Text>
        <Text style={styles.userEmail}>
          {`${data.email}`}
        </Text>
      </View>
    </View>
  )
}

const ItemList = () => {
  const [initData, changeinitData] = useState([]);
  const [data, setData] = useState([]);
  const [pageNumber, changePageNumber] = useState(1);
  const [isRefreshing, refreshList] = useState(false);
  const renderItem = ({item}) => <Item data={item} />

  useEffect(() => {
    fetch('https://reqres.in/api/users?page='+ pageNumber)
    .then(response => response.json())
    .then(responseBody => responseBody.data)
    .then(apidata => {
        if (pageNumber > 1) {
            return setData([...data, ...apidata])
        } else if (isRefreshing && pageNumber == 1) {
            setData([])
            setData(initData)
        }
        else {
            changeinitData(apidata)
            return setData(apidata)
        }
    })
    .catch(error => console.error("An error has occurred: " + error));
  }, [pageNumber]);
  
  return (
    <SafeAreaView style= {styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => {
              setTimeout(() => {
                changePageNumber(2)
              }, 3000)
            }}
            refreshControl = {
              <RefreshControl 
                refreshing = {isRefreshing}
                onRefresh = {() => {
                  refreshList(true);
                  setTimeout(() => {
                    changePageNumber(1);
                    refreshList(false);
                  }, 3000);
                }}
              />
            }
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItem: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'orange',
    elevation: 10
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  userDetails: {
    justifyContent: 'center',
    alignItems: 'center'
  },  
  userName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
    color: 'white'
  },
  userEmail: {
    fontSize: 16,
    color: 'white'
  }
})

export default ItemList;

