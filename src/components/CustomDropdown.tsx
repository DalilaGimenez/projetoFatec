import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';

const CustomDropdown = ({ items, onSelect, selectedValue }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = items.filter(item => item.label.toLowerCase().startsWith(text.toLowerCase()));
    setFilteredItems(filtered);
  };

  const handleSelectItem = (item) => {
    onSelect(item);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{ padding: 10 }}>{selectedValue ? selectedValue.label : 'Selecione'}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, maxHeight: 300, width: '80%' }}>
            <TextInput
              style={{ marginBottom: 10, padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
              placeholder="Pesquisar cidade"
              onChangeText={handleSearch}
              value={searchText}
            />
            <FlatList
              data={filteredItems}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectItem(item)}>
                  <Text style={{ padding: 10 }}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdown;