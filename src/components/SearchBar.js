import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background}>
            <AntDesign style={styles.searchIcon} name="search1" size={30} />
            <TextInput 
                style={styles.inputStyle} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#e8e4e1',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 16
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    searchIcon: {
        alignSelf: "center",
        marginHorizontal: 16
    }
});

export default SearchBar;