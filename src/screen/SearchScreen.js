import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const apiSearch = async () => {
        const res = await yelp.get("/search", {
            params: {
                limit: 50,
                term,
                location: "san jose"
            }
        });
        setResults(res.data.businesses);
    }

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newVal) => {setTerm(newVal)}}
                onTermSubmit={apiSearch}
            />
            <Text>Search Screen</Text>
            <Text>We got {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;