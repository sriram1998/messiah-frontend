import React, { Component } from 'react';
import { Text, View, ScrollView , StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';


//saloni IP
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: (<View></View>)
    }
  }

  componentWillMount() {
    // for(let day=1;day<=7;day++) {
    //   for(let meal_type=1;meal_type<=3;meal_type++) {
    //     axios({
    //       method: 'post',
    //       url: 'http://192.168.43.80:80/user/allMenu',
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //       },
    //       data: {messID: , mealType: 1, day: },
    //     })
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       Toast.show(error.message);
    //     });
    //   }http://192.168.43.217:80
    // }
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], mealtype = ["Breakfast", "Lunch", "Dinner"];
    this.setState({
      content: days.map((item1, index1) => {
        return
        {
          mealtype.map((item2, index2) => {
            return (
              <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 0.5, flexDirection: "column" }}>
                  <Text style={{ flex: 1 }}>item1</Text>
                  <Text>item2</Text>
                </View>
                <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
                <View style={{ flex: 1, padding: 10 }}>
                  {axios({
                    method: 'post',
                    url: 'http://192.168.43.217:80/user/allMenu',
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                    },
                    data: { messID: 1, day: index1+1 },
                  })
                    .then(response => {
                      console.log(response.data);
//                       _storeData("mess", response.data.mess);
//                       _storeData("name", response.data.name);
//                       _storeData("rollNum", response.data.rollNum);
                      this.props.navigation.navigate('CatererLanding');
                    })
                    .catch(function (error) {
                      console.log(error);
                    })}
                  <Text>Pongal</Text>
                </View>
              </Card>
            )
          })
        }
      })
    })
  }

  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Monday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>Pongal, Vada</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Monday</Text>
              <Text>Lunch</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>Rice, sambhar, chappathi, Aloo, Dal</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Monday</Text>
              <Text>Dinner</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>Rice, wheel chips</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Tuesday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Tuesday</Text>
              <Text>Lunch</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Tuesday</Text>
              <Text>Dinner</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Wednesday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Wednesday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Wednesday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Thursday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Thursday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Thursday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Friday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Friday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Friday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Saturday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Saturday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Saturday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Sunday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Sunday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5, flexDirection: "column" }}>
              <Text style={{ flex: 1 }}>Sunday</Text>
              <Text>Break fast</Text>
            </View>
            <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
            <View style={{ flex: 1, padding: 10 }}>
              <Text>MM1</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
