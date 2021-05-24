//Bayaborda, Florvin
//Eridao, James Conrad
//Pascua, Aubrey

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  TextInput, 
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [txtInput, settxtInput] = useState('');
  const [dbInput, setdbInput] = useState([]);
  const [id, setid] = useState(1);

  const InputHandler = (InputedTxt) => {
    settxtInput(InputedTxt);

  };

  const AddInputHandler = () => {
    setid(id+1)
    setdbInput((currentInput) => [...currentInput, 
    { key: Math.random().toString(), value: txtInput} 
    ]);
    settxtInput('');
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.subcontainer1}>
        <TextInput 
          placeholder="Enter Item"
          style={styles.txtinput}
          onChangeText={InputHandler}
          value={txtInput}
        />
        <Button title="ADD" onPress={AddInputHandler} />
      </View>

      <FlatList data={dbInput} 
        renderItem={dbItem => (
        <View style={styles.dbItems}><Text > {dbItem.item.value} </Text>
        </View>
        )}
      />
        
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 90,
  },

  subcontainer1: {
    flexDirection: 'row',
    //textAlign: 'center',
    justifyContent: 'space-between',
  },

  txtinput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: '70%',

  },

  dbItems: {
    backgroundColor: '#E1E1E1',
    padding: 5,
    margin: 5,
    color: 'white', 
    borderColor: 'Black',
    borderWidth: 1,

  },
  


});
