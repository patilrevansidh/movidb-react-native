import {ListView, View} from 'react-native';
import {PrimaryText, SecondaryText} from '../../../common/components';
import {stringConstant} from '../../../common/constants';



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

export default CrewMembers;