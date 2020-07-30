import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Accordion = (props) => {
    const [expanded, toggleExpanded] = useState(false);

    return(
        <View style={styles.accordion}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => toggleExpanded(!expanded)}
            >
                <Text>
                    {props.title}
                </Text>
            </TouchableHighlight>
            {expanded && 
              props.children
            }
        </View>
    );
}

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default Accordion;