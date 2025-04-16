import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const questions = [
  'How do I track my progress?',
  'How do I view my score and feedback?',
  'How is my performance scored, and where can I see my results?',
  'Can my office manager track my progress?',
  'Who has access to my training progress and scores?',
];

const TrackingProgress = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
        <Text style={styles.title}>Help</Text>
        <TouchableOpacity style={styles.menuBtn}>
          <Ionicons name="menu" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Tracking Progress & Performance</Text>

      {/* Questions List */}
      <FlatList
        data={questions}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item}</Text>
            <Ionicons name="chevron-forward" size={18} color="#ddd" />
          </View>
        )}
      />

      {/* Bottom Navigation Wave + Icons */}
      <View style={styles.bottomContainer}>
        <View style={styles.waveBackground}>
          <View style={styles.iconRow}>
            <NavIcon icon="book" />
            <NavIcon icon="trophy" />
            <NavIcon icon="map" />
            <NavIcon icon="medkit" />
            <NavIcon icon="settings" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const NavIcon = ({ icon }) => (
  <TouchableOpacity style={styles.navItem}>
    <Ionicons name={icon} size={20} color="#444" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF3FC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: '#EAF3FC',
    shadowColor: '#aaa',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  menuBtn: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    backgroundColor: '#92BAE7',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 10,
  },
  list: {
    paddingBottom: 100,
  },
  listItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    fontSize: 15,
    color: '#333',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
  },
  waveBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#EAF3FC',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconRow: {
    position: 'absolute',
    bottom: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default TrackingProgress;
