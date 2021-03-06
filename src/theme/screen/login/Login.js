// import React, {Component} from 'react';
// import {
//     View, Text, TouchableOpacity, TextInput,
//     StyleSheet, Image, KeyboardAvoidingView,
//     CheckBox, SafeAreaView, StatusBar, Keyboard,
//     TouchableWithoutFeedback, Alert, AsyncStorage,
// } from 'react-native';
//
//
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hidePassword: true,
//             phone: '',
//             password: '',
//             checkLogin: true,
//             loginDetails: true,
//             kq: '',
//             token: '',
//         };
//     }
//
//     CheckTextInput = async() => {
//         this.props.navigation.navigate('Login');
//         fetch('http://kidsnow.edu.vn/api/login', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 phone: this.state.phone,
//                 password: this.state.password,
//             }),
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson);
//                 if(responseJson.success === true){
//                     this.props.navigation.navigate('DrawerNavigator');
//                 }
//                 else{
//                     // console.warn(responseJson);
//                     Alert.alert("Thông báo!","Vui lòng điền đúng thông tin đăng nhập!");
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//
//         const {phone, password} = this.state;
//         let loginDetails = {
//             phone: phone,
//             password: password,
//         }
//         if (this.props.type !== 'Login') {
//             AsyncStorage.setItem('kq', JSON.stringify(loginDetails));
//             Keyboard.dismiss();
//             this.login();
//         } else if (this.props.type === 'Login') {
//             try {
//                 let loginDetails = await AsyncStorage.getItem('loginDetails');
//                 let ld = JSON.parse(loginDetails);
//                 if(this.state.phone == '' || this.state.password == ''){
//                 } else {
//                     if(this.state.phone != phone && this.state.password == password){
//                         alert('Sai thông tin đăng nhập.')
//                     } else if(this.state.phone == phone && this.state.password != password){
//                         alert('Sai mật khẩu.')
//                     } else if(this.state.phone != phone && this.state.password != password){
//                         alert('Nhập thông tin hợp lệ.')
//                     } else {
//                         alert('Thành công.')
//                     }
//                 }
//             } catch (error) {
//                 alert(error);
//             }
//         }
//     };
//
//     managePasswordVisibility = () => {
//         this.setState({hidePassword: !this.state.hidePassword});
//     };
//     render() {
//         const {navigate} = this.props.navigation;
//         return (
//             <SafeAreaView style={styles.container}>
//                 <StatusBar barStyle="light-content"/>
//                 <TouchableWithoutFeedback style={styles.container}
//                                           onPress={Keyboard.dismiss}>
//                     <View style={styles.logoContainer}>
//                         <View style={styles.logoContainer}>
//                             <Image style={styles.logo}
//                                    source={require('../../../asset/image/logo.png')}>
//                             </Image>
//                         </View>
//                         <View style={styles.infoContainer}>
//                             <TextInput style={styles.input}
//                                        placeholder="Thông tin đăng nhập"
//                                        keyboardType='numeric'
//                                        returnKeyType='next'
//                                        autoCorrect={false}
//                                        onChangeText={(phone) => this.setState({phone})}
//                                        onSubmitEditing={() => this.refs.txtPassword.focus()}
//                                        value={this.state.phone}
//                             />
//                             <View style={styles.pass}>
//                                 <TextInput underlineColorAndroid="transparent" style={styles.input}
//                                            placeholder="Mật khẩu"
//                                            returnKeyType='go'
//                                            onChangeText={(password) => this.setState({password})}
//                                            secureTextEntry={this.state.hidePassword}
//                                            value={this.state.password}
//                                 />
//                                 <TouchableOpacity style={styles.iconpass} onPress={this.managePasswordVisibility}>
//                                     <Image source={(this.state.hidePassword)
//                                         ? require('../../../asset/images/hide.png')
//                                         : require('../../../asset/image/uhide.png')}
//                                            style={styles.hide}/>
//                                 </TouchableOpacity>
//                             </View>
//                             <TouchableOpacity  onPress={this.CheckTextInput} style={styles.buttonContainer}>
//                                 <Text style={styles.buttonText}>Login</Text>
//                             </TouchableOpacity>
//                             <View style={{
//                                 flex: 3,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                             }}>
//                                 <Text>{this.state.kq}</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </SafeAreaView>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FCB71E',
//         flexDirection: 'column',
//     },
//     logoContainer: {
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         flex: 1,
//     },
//     logo: {
//         width: 250,
//         height: 200,
//     },
//     infoContainer: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: '50%',
//         padding: 30,
//     },
//     input: {
//         position: 'relative',
//         height: 40,
//         marginBottom: 10,
//         paddingHorizontal: 30,
//         fontSize: 18,
//         backgroundColor: '#fff',
//         paddingVertical: 5,
//         borderRadius: 10,
//     },
//     buttonContainer: {
//         backgroundColor: '#101fca',
//         paddingVertical: 10,
//         borderRadius: 10,
//     },
//     buttonText: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         color: '#fff1f3',
//         fontSize: 18,
//     },
//     text: {
//         color: '#fff',
//         fontSize: 18,
//         paddingTop: 5,
//     },
//     pass: {
//         alignSelf: 'stretch',
//         justifyContent: 'center',
//     },
//     iconpass: {
//         position: 'absolute',
//         right: 3,
//         height: 30,
//         width: 30,
//         paddingBottom: 5,
//         opacity: 0.3,
//     },
//     hide: {
//         height: '100%',
//         width: '100%',
//     },
// });
//
// export default Login;
