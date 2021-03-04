import React, {Component} from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'

class APICall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      currentPage: 1,
      maxPage: 2
    }
    this.initData(this.state.currentPage);
  }

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  }

  initData = async (currentPage) => {
    await fetch('https://reqres.in/api/users?page='+this.state.currentPage)
      .then(response=> response.json())
      .then(responseBody => responseBody.data)
      .then(apidata => setTimeout(() => {
        if(currentPage < this.state.maxPage) {
          this.setState({loading: false, data: apidata});  
        } else {
          this.setState({loading: false, data: [...this.state.data, ...apidata]});
        }
        }, 2000))
      .catch(error => console.error("An error has occurred: "+ error));
  }


  render() {
    const {data, loading, currentPage, maxPage} = this.state;
    if(loading) {
      return(
        <View style={styles.loader}>
          <ActivityIndicator size='large' color='orange' />
        </View>
      )
    }
    return(
      <ScrollView
        onScroll = {({nativeEvent}) => {
          if(this.isCloseToBottom(nativeEvent) && currentPage <= maxPage) {
            this.setState({currentPage: currentPage+1});
            this.initData(currentPage);
          }
        }}
      >
        <View>
          {data.map((data) => 
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
            )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
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
});

export default APICall;