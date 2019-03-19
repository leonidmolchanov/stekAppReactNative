import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { ListItem, Header, Divider, Input, Icon } from 'react-native-elements'
import UserHeader from './headers/user.component'
import SmsHeader from './headers/sms.component'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]

export default class App extends React.Component {
    render () {
        return (

            <View style = {{backgroundColor: '#cbcbcb', width:'100%',
                height:'100%',}}>
                <Header
                    containerStyle={{ backgroundColor: '#cbcbcb' }}
                    leftComponent={< UserHeader />}
                    centerComponent={{ text: 'Балтийские энергосистемы', style: { color: '#666666', fontSize:12 } }}
                    rightComponent={< SmsHeader />}
                />

                <View style={styles.containerMain}>
<View style = {styles.containerMainHeader}>
    <Text  style={{        marginTop: '6%'}}>

        ИТ-СЕРВИСЫ
    </Text>
</View>
                    <View style = {styles.containerMainContent}>
                        <View style = {styles.containerMainContentMenu}>


<View style = {styles.containerMainContentMenuElement}>
    <View style = {styles.containerMainContentMenuElementIconLeft}>
        <Image source={require('./../../assets/icon/servers.png')}
               style={{width: 34, height: 34}} />
    </View>
    <View style = {styles.containerMainContentMenuElementText}>
        <Text style = {{        fontWeight: 'bold'}}>

       СЕРВЕРА
        </Text>
    </View>
    <View style = {styles.containerMainContentMenuElementIconRight1}>
        <Icon
            name="info"
            color="#666666"
            size={24}
            width={24}


        />
    </View>
    <View style = {styles.containerMainContentMenuElementIconRight2}>
        <Icon
            name="warning"
            color="#000"
            size={24}
            width={24}


        />
    </View>
    </View>

                            <View style = {styles.containerMainContentMenuElement}>
                                <View style = {styles.containerMainContentMenuElementIconLeft}>
                                    <Image source={require('./../../assets/icon/workStates.png')}
                                           style={{width: 34, height: 34}} />
                                </View>
                                <View style = {styles.containerMainContentMenuElementText}>
                                    <Text style = {{        fontWeight: 'bold'}}>

                                        РАБОЧИЕ СТАНЦИИ
                                    </Text>
                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight1}>
                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight2}>
                                    <Icon
                                        name="info"
                                        color="#666666"
                                        size={24}
                                        width={24}


                                    />
                                </View>
                            </View>

                            <View style = {styles.containerMainContentMenuElement}>
                                <View style = {styles.containerMainContentMenuElementIconLeft}>
                                    <Image source={require('./../../assets/icon/programs.png')}
                                           style={{width: 34, height: 34}} />
                                </View>
                                <View style = {styles.containerMainContentMenuElementText}>
                                    <Text style = {{        fontWeight: 'bold'}}>

                                        ПО
                                    </Text>
                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight1}>

                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight2}>
                                    <Icon
                                        name="warning"
                                        color="#000"
                                        size={24}
                                        width={24}


                                    />
                                </View>
                            </View>

                            <View style = {styles.containerMainContentMenuElement}>
                                <View style = {styles.containerMainContentMenuElementIconLeft}>
                                    <Image source={require('./../../assets/icon/office.png')}
                                           style={{width: 34, height: 34}} />
                                </View>
                                <View style = {styles.containerMainContentMenuElementText}>
                                    <Text style = {{        fontWeight: 'bold'}}>

                                        ОРГТЕХНИКА
                                    </Text>
                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight1}>
                                </View>
                                <View style = {styles.containerMainContentMenuElementIconRight2}>

                                </View>
                            </View>




                        </View>
                        <View style = {styles.containerMainContentButton}>

                            <TouchableOpacity
                                style={styles.containerMainContentButtonBody}
                                onPress={this.onPress}
                            >
                                <Text style={styles.containerMainContentButtonBodyText}>Добавить сервис</Text>

                            </TouchableOpacity>

                        </View>
                        <View/>

                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexWrap: 'wrap',
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        backgroundColor: '#cbcbcb'
    },
    containerMainHeader:{
        justifyContent: 'flex-start',

alignItems:'center',
        width: '100%',
        height: '10%',
        backgroundColor: '#cbcbcb'
    },
    containerMainContent:{
        width: '100%',
        height: '90%',
        backgroundColor: '#cbcbcb'
    },
    containerMainContentMenu:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
        width: '100%',
        height: '62%',
        backgroundColor: '#cbcbcb'
    },
    containerMainContentMenuElement:{
        flexDirection: 'row',
        marginTop: '4%',
        justifyContent: 'center',
        alignItems:'stretch',
        width: '90%',
        height: '18%',
        backgroundColor: '#fff',
        shadowColor: '#8e8e93',
        borderColor: '#cbcbcb',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    containerMainContentMenuElementIconLeft:{

        justifyContent: 'center',
        alignItems:'center',
        width: '17%',
        height: '100%',
        backgroundColor: '#fff',
    },
    containerMainContentMenuElementText:{
        justifyContent: 'center',
        alignItems:'stretch',
        width: '59%',
        height: '100%',
        backgroundColor: '#fff'

    },
    containerMainContentMenuElementIconRight1:{

        justifyContent: 'center',
        alignItems:'center',
        width: '12%',
        height: '100%',
        backgroundColor: '#fff',
    },
    containerMainContentMenuElementIconRight2:{

        justifyContent: 'center',
        alignItems:'center',
        width: '12%',
        height: '100%',
        backgroundColor: '#fff',
    },
    containerMainContentButton:{
        padding:'4%',
        justifyContent: 'flex-start',
        alignItems:'center',
        width: '100%',
        height: '38%',
        backgroundColor: '#cbcbcb'
    },
    containerMainContentButtonBody:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 190,
        height: 47,
        backgroundColor: '#666666',
        borderColor: '#666666',
        borderWidth: 1,
        borderRadius: 30,


    },
    containerMainContentButtonBodyText:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15

    },

});
