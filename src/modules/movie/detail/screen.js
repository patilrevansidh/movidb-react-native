import React from 'react';
import {Container, Content,View, Text, Card, Footer, FooterTab, Button} from 'native-base';
import {Image, ListView} from 'react-native';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {stringConstant} from '../../../common/constants';
import {PrimaryText, SecondaryText} from '../../../common/components/text';
import moment from 'moment';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const FIELDS = ['Screenplay','Writer','Director','Story'];


const DetailScreen = (props) => {
       const posterPathUrl = stringConstant.IMAGE_BASE_URL_BANNER.concat(props.data.poster_path);
       const bannerPathUrl = stringConstant.IMAGE_BASE_URL_BANNER.concat(props.data.backdrop_path)
       let crews=[{}];
       
       const a = props.crew.map((c)=>{
           const job = c.job
           if(FIELDS.includes(job)) {
                const role = c.job;
                const name = c.name;
                const obj = {role,name};
                crews.push(obj);
           }
        }).filter(d=>d)

       return (                         
        <Container>
            <Content>
            <View style={{flex:1}} >
                <Card style={{flex:3}}>
                    <View style={{flex:1,alignItems:'center'}}>                     
                            <Image             
                                style={{height:275,width:stringConstant.SCREEN_WIDTH}}                   
                                source={{uri:posterPathUrl}}/>
                    </View>                                       
                </Card>
                <Card style={{flex:1}}>
                    <View style={{flex:1,flexDirection:'row'}}>                     
                        <View style={{flex:1,justifyContent:'center'}}>
                                <PrimaryText style={{fontSize:20}}>
                                    {props.data.original_title}
                                    <SecondaryText>
                                        {`(${moment(props.data.release_date).format("YYYY")})`}
                                    </SecondaryText>
                                </PrimaryText>                            
                        </View>
                        <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginRight:8}}>
                            <AnimatedCircularProgress
                                    size={50}
                                    width={4}
                                    fill={props.data.vote_average*10}
                                    tintColor={stringConstant.PRIMARY_FONT_COLOR}
                                    backgroundColor={stringConstant.GREY_COLOR}>
                                    {
                                        (fill) => (
                                        <SecondaryText style={{position:'absolute',marginTop:15,marginLeft:10}}>
                                            { props.data.vote_average*10}%
                                        </SecondaryText>
                                        )
                                    }
                                    </AnimatedCircularProgress>
                        </View>
                    </View>    
                </Card>
                <Card style={{flex:2}}>
                    <View style={{flex:1}}>
                        <PrimaryText style={{flex:1,color:stringConstant.PRIMARY_FONT_COLOR,fontSize:18,marginBottom:5}}>
                            Overview
                        </PrimaryText>
                        <SecondaryText style={{color:stringConstant.SECONDARY_FONT_COLOR,fontSize:15}}>
                            {props.data.overview}
                        </SecondaryText>
                    </View>
                    <View style={{flex:1}}>
                        <PrimaryText style={{flex:1,color:stringConstant.PRIMARY_FONT_COLOR,fontSize:18,marginBottom:5}}>
                            Feature Crew
                        </PrimaryText>
                        <CrewMembers crews={crews}/>
                    </View>
                </Card>
            </View>
            </Content>           
            <Footer style={{backgroundColor:stringConstant.APP_BLACKGROUND_COLOR}}>
                <FooterTab style={{backgroundColor:stringConstant.APP_BLACKGROUND_COLOR}}>
                   <Button>
                       <IoniIcons name="ios-bookmark" size={30} color={stringConstant.APP_FONT_COLOR}/>
                   </Button>
                   <Button>
                       <IoniIcons name="md-heart" size={30} color={stringConstant.APP_FONT_COLOR}/>
                   </Button>
                   <Button>
                       <IoniIcons name="md-videocam" size={30} color={stringConstant.APP_FONT_COLOR}/>
                   </Button>
                   <Button>
                       <IoniIcons name="md-images" size={30} color={stringConstant.APP_FONT_COLOR}/>
                   </Button>
                </FooterTab>
            </Footer>
        </Container>                                         
        ) 
};

const CrewMembers=(props)=>{
    const members = [];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});    
    
    return(
        <View style={{flex:1}}>
            <ListView contentContainerStyle={{ flexDirection: 'row',flexWrap: 'wrap'}}
                dataSource={ ds.cloneWithRows(props.crews)}
                renderRow={(rowData) =>
                    rowData.name ? <View style={{marginRight:5,marginBottom:5,width:80}}>
                                        <PrimaryText style={{color:stringConstant.PRIMARY_FONT_COLOR,fontWeight:'bold'}}>
                                            {rowData.name}
                                        </PrimaryText>
                                        <SecondaryText style={{color:stringConstant.SECONDARY_FONT_COLOR}}>
                                            {`(${rowData.role})`}
                                        </SecondaryText>
                                    </View>
                                  : null  
                }
                />
        </View>
    );
}

export default DetailScreen;