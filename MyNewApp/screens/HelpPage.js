import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const topics = [
  { name: 'Getting Started', route: 'GettingStarted' },
  { name: 'Using the App', route: 'UsingTheApp' },
  { name: 'Tracking Progress & Performance', route: 'TrackingProgress' },
  { name: 'AI-Driven Features', route: 'AIFeatures' },
  { name: 'Settings & Customization', route: 'Settings' },
  { name: 'Account & Security', route: 'AccountSecurity' },
];

const HelpPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Help</Text>
        <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
      </View>

      {/* List */}
      <FlatList
        contentContainerStyle={styles.list}
        data={topics}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.topicText}>{item.name}</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="book" label="Books" />
        <NavItem icon="trophy" label="Trophy" />
        <NavItem icon="map" label="Map" />
        <NavItem icon="meditation" label="Mind" isFA5 />
        <NavItem icon="settings" label="Settings" />
      </View>
    </SafeAreaView>
  );
};

const NavItem = ({ icon, label, isFA5 }) => (
  <TouchableOpacity style={styles.navItem}>
    {isFA5 ? (
      <FontAwesome5 name={icon} size={20} color="#555" />
    ) : (
      <Ionicons name={icon} size={20} color="#555" />
    )}
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe1f7',
  },
  header: {
    backgroundColor: '#E0ECFF',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  menuIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  list: {
    paddingBottom: 100,
  },
  topicItem: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicText: {
    fontSize: 16,
    color: '#222',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    backgroundColor: '#cfe1f7',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#444',
  },
});

export default HelpPage;
