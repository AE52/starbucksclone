import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const yildiz = 15 * 22;

export default function StarbucksClone() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1e3932' }}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>İyi günler Eren ☕</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Ionicons name="notifications-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="person-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Star Balance */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <View>
              <Text style={{ color: '#cba258', fontSize: 16, marginBottom: 5 }}>Yıldız bakiyesi</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="star" size={24} color="#cba258" />
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 5 }}>{yildiz}</Text>
              </View>
              <Text style={{ color: 'white', fontSize: 12 }}>22 ikram içecek</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>Rozetlerim</Text>
              <TouchableOpacity style={{ backgroundColor: '#00653e', padding: 10, borderRadius: 5 }}>
                <MaterialCommunityIcons name="trophy-variant" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Profile Progress */}
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={{ uri: 'https://www.starbucks.com/app-assets/7997fb808f7b9acf0dd59529d5d784ee.svg' }} style={{ width: 60, height: 60 }} />
            </View>
            <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>0/15</Text>
          </View>

          {/* Green Member Info */}
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <Text style={{ color: '#cba258', fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>GOLD ÜYE</Text>
            <Text style={{ marginBottom: 10 }}>Hesabınıza para yüklemek için kredi/banka kartınızı tanımlayın.</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Image source={{ uri: 'https://www.starbucks.com/app-assets/7997fb808f7b9acf0dd59529d5d784ee.svg' }} style={{ width: 40, height: 40, marginRight: 10 }} />
              <View>
                <Text>Kart bakiyesi:</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>427,60 ₺</Text>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#00653e', padding: 15, borderRadius: 30, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>PARA YÜKLE</Text>
            </TouchableOpacity>
          </View>

          {/* Recommended Drinks */}
          <Text style={{ color: '#cba258', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Bunları denedin mi?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Pumpkin Spice Latte', 'Iced Pumpkin Spice Latte', 'Pumpkin Cream Oat Shaken Espresso', 'Pumpkin Cream Cold Brew'].map((item, index) => (
              <View key={index} style={{ marginRight: 15, alignItems: 'center' }}>
                <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#1e3932', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                  <Image source={{ uri: 'https://www.starbucks.com/app-assets/7997fb808f7b9acf0dd59529d5d784ee.svg' }} style={{ width: 60, height: 60 }} />
                </View>
                <Text style={{ color: 'white', textAlign: 'center', width: 80 }}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#1e3932' }}>
        {[
          { name: 'Ana Sayfa', icon: 'star', color: '#00653e' },
          { name: 'Menü', icon: 'coffee', color: 'white' },
          { name: 'Scan', icon: 'qrcode-scan', color: 'white' },
          { name: 'Mağazalar', icon: 'map-marker', color: 'white' },
          { name: 'Gift', icon: 'gift', color: 'white' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons name={item.icon} size={24} color={item.color} />
            <Text style={{ color: item.color, fontSize: 12 }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
