import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ModalGif from './ModalGif';
import dataJSON from '../data.json';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBar from './HeaderBar';
import DataList from './DataList';

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      load: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setData();
    }, 5000);
  }

  setData() {
    const data = dataJSON.reduce((acc, currentContent) => {
      let title = currentContent.primaryCategory.categoryName;
      let product = currentContent.productName;

      const section = acc.findIndex(
        (contentData) => contentData.title === title,
      );
      if (section === -1) {
        acc = [...acc, {title, data: [product]}];
      } else {
        acc[section].data = [...acc[section].data, product];
      }
      return acc;
    }, []);
    this.setState({data: data, load: false});
  }

  render() {
    if (this.state.load) {
      return <ModalGif />;
    } else {
      return (
        <>
          <LinearGradient
            style={styles.headerView}
            colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <SafeAreaView />
            <HeaderBar />
          </LinearGradient>
          <DataList data={this.state.data} />
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    paddingBottom: 15,
  },
});

export default ContactScreen;
