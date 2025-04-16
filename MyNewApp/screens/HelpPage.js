// HelpPage.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const topics = [
  { name: 'Getting Started', route: 'GettingStarted' },
  { name: 'Using the App', route: 'UsingTheApp' },
  { name: 'Tracking Progress & Performance', route: 'TrackingProgress' },
  { name: 'AI-Driven Features', route: 'AIFeatures' },
  { name: 'Settings & Customization', route: 'Settings' },
  { name: 'Account & Security', route: 'AccountSecurity' },
];

export default function HelpPage() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      // approximates your radial gradient
      colors={['#cfe1f7', '#ffffff']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <LinearGradient
          colors={['#E0ECFF', '#FFFFFF']}
          style={styles.header}
        >
          <Text style={styles.headerText}>Help</Text>
          <Ionicons
            name="menu"
            size={24}
            color="#222"
            style={styles.menuIcon}
          />
        </LinearGradient>

        {/* Content */}
        <FlatList
          data={topics}
          keyExtractor={(i) => i.name}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.route)}
              style={styles.topicItem}
            >
              <Text style={styles.topicText}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="#002C59" />
            </TouchableOpacity>
          )}
        />

        {/* Bottom wave + nav */}
        <View style={styles.bottomWrapper}>
          <Svg
            width="100%"
            height={80}
            viewBox="0 0 375 80"
            style={styles.wave}
          >
            <Path
              fill="#ffffff"
              d="M0,0 C80,60 295,60 375,0 L375,80 L0,80 Z"
            />
          </Svg>
          <View style={styles.bottomNav}>
            <NavItem icon="book" />
            <NavItem icon="trophy" />
            <NavItem icon="map" />
            <NavItem icon="brain" lib="FontAwesome5" />
            <NavItem icon="settings" />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function NavItem({ icon, lib }) {
  const Icon = lib === 'FontAwesome5' ? FontAwesome5 : Ionicons;
  return (
    <TouchableOpacity style={styles.navItem}>
      <Icon name={icon} size={24} color="#444" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#002C59',
    fontFamily: 'Poppins-SemiBold',
  },
  menuIcon: {
    position: 'absolute',
    right: 20,
    top: 28,
  },
  list: {
    paddingTop: 16,
    paddingBottom: 120, // so it scrolls above the footer
  },
  topicItem: {
    backgroundColor: '#E9F0F8',    // light blue
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCDDEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#002C59',
    fontFamily: 'Poppins-SemiBold',

  },

  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    top: -20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    height: 60,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    elevation: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
});
