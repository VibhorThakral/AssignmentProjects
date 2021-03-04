import React, {Component} from 'react';
import { 
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  Image
} from 'react-native'


class ProblemC extends Component {
  state = {
    loading: true,
    display: 'none'
  }

  onLoadEnd = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
        display: 'flex'
      })
    }, 3000);
  }


  render() {
    const url = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={[styles.img, {display:this.state.display}]}
            onLoadEnd={this.onLoadEnd}
            source={{ uri: url }}
          />
          <ActivityIndicator 
            size="large"
            color="#00f"
            animating={this.state.loading}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: 250,
    width: 250,
  }
});

export default ProblemC;