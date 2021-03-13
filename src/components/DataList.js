import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SectionList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      checkedCount: 0,
    };
  }

  Item = (title) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <CheckBox
        lineWidth={2}
        onCheckColor={'white'}
        onFillColor={'#4f8080'}
        style={styles.checkBox}
        onValueChange={(checkboxCount) =>
          checkboxCount
            ? this.setState({checkedCount: this.state.checkedCount + 1})
            : this.setState({checkedCount: this.state.checkedCount - 1})
        }
      />
    </View>
  );

  showBtn = () => {
    return (
      <View style={styles.FooterView}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueBtnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {data, checkedCount} = this.state;
    return (
      <>
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => this.Item(item)}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
        {checkedCount === 0 ? null : this.showBtn()}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  checkBox: {
    height: 20,
  },
  FooterView: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtn: {
    backgroundColor: '#4f8080',
    alignItems: 'center',
    width: '90%',
    padding: 5,
    marginBottom: 30,
    borderRadius: 10,
  },
  continueBtnTxt: {
    marginVertical: 5,
    fontSize: 24,
    color: 'white',
  },
});

export default DataList;
