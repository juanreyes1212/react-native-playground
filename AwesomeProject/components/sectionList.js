import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[this.props.newStyle, { fontWeight: 'bold', marginBottom: 22, alignSelf: 'center' }]}>Check out this SectionList!</Text>
                <SectionList
                    sections={[
                        { title: 'A', data: ['Alf', 'Albert', 'Adonis'] },
                        { title: 'F', data: ['Fred', 'Fry', 'Fallon'] },
                        { title: 'Z', data: ['Zed', 'Zayn', 'Zen'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})