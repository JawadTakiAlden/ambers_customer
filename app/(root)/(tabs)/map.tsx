import { electricalBoxes } from "@/mock/maps";
import { themeColors } from "@/utils/color-theme";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import * as Location from "expo-location";
import { useColorScheme } from "nativewind";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";

const MapScreen = () => {
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedBox, setSelectedBox] = useState<
    (typeof electricalBoxes)[0] | null
  >(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const { colorScheme } = useColorScheme();
  const mapRef = useRef<MapView>(null);
  const [nearestBox, setNearestBox] = useState<
    (typeof electricalBoxes)[0] | null
  >(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setUserLocation({ latitude, longitude });
    })();
    (async () => {})();
  }, []);

  const openBottomSheet = (box: any) => {
    setSelectedBox(box);
    bottomSheetRef.current?.expand();
  };

  // useEffect(() => {
  //   const watchHeading = async () => {
  //     Location.watchHeadingAsync((headingData) => {
  //       mapRef.current?.animateCamera({
  //         heading: headingData.trueHeading,
  //         pitch: 45,
  //       });
  //     });
  //   };
  //   watchHeading();
  // }, []);

  const findNearestBox = () => {
    if (!userLocation) return;

    const getDistance = (
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number
    ) => {
      const toRad = (value: number) => (value * Math.PI) / 180;
      const R = 6371; // Radius of the Earth in km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
      return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))); // in km
    };

    const nearest = electricalBoxes.reduce((prev, curr) => {
      const prevDist = getDistance(
        userLocation.latitude,
        userLocation.longitude,
        prev.latitude,
        prev.longitude
      );
      const currDist = getDistance(
        userLocation.latitude,
        userLocation.longitude,
        curr.latitude,
        curr.longitude
      );
      return currDist < prevDist ? curr : prev;
    });

    setNearestBox(nearest);
  };

  return (
    <View className="flex-1 bg-background">
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
        ref={mapRef}
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
        rotateEnabled={true}
        pitchEnabled={true}
        followsUserLocation={true}
        userInterfaceStyle={colorScheme}
        mapType="satellite"
      >
        {electricalBoxes.map((box) => (
          <Marker
            key={box.id}
            coordinate={{ latitude: box.latitude, longitude: box.longitude }}
            // title={box.name}
            // description={box.description}
            pinColor={themeColors(colorScheme!)["--primary-600"]}
            onPress={() => openBottomSheet(box)}
          />
        ))}

        {nearestBox && userLocation && (
          <Polyline
            coordinates={[
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              },
              {
                latitude: nearestBox.latitude,
                longitude: nearestBox.longitude,
              },
            ]}
            strokeColor="#007aff"
            strokeWidth={4}
          />
        )}
      </MapView>

      <BottomSheet
        handleStyle={{
          backgroundColor: "red",
        }}
        ref={bottomSheetRef}
        snapPoints={["10%", "50%"]}
      >
        <BottomSheetView className="bg-background flex-1">
          {selectedBox && (
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {selectedBox.name}
              </Text>
              <Text>{selectedBox.description}</Text>
              <Text>Voltage: 220V</Text>
            </View>
          )}
          <View></View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;
