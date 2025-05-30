import Button from "@/components/Button";
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
  const [selectedBox, setSelectedBox] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const { colorScheme } = useColorScheme();
  const mapRef = useRef<MapView>(null);

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

  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))); // in km
  };

  const findNearestBox = () => {
    const nearstBox = electricalBoxes.reduce((prev, curr) => {
      const prevDist = getDistance(
        userLocation?.latitude!,
        userLocation?.longitude!,
        prev.latitude,
        prev.longitude
      );
      const currDist = getDistance(
        userLocation?.latitude!,
        userLocation?.longitude!,
        curr.latitude,
        curr.longitude
      );
      return currDist < prevDist ? curr : prev;
    });

    const lineDistance = getDistance(
      userLocation?.latitude!,
      userLocation?.longitude!,
      nearstBox.latitude,
      nearstBox.longitude
    );
    const realisticDistance = lineDistance * 1.3;

    setSelectedBox({
      ...nearstBox,
      lineDistance: lineDistance.toFixed(2),
      realisticDistance: realisticDistance.toFixed(2),
    });
  };

  const setSelectedBoxWithDistance = (box: (typeof electricalBoxes)[0]) => {
    const lineDistance = getDistance(
      userLocation?.latitude!,
      userLocation?.longitude!,
      box.latitude,
      box.longitude
    );

    const realisticDistance = lineDistance * 1.3;

    setSelectedBox({
      ...box,
      lineDistance: lineDistance.toFixed(2),
      realisticDistance: realisticDistance.toFixed(2),
    });
  };

  const openBottomSheet = (box: any) => {
    setSelectedBoxWithDistance(box);
    bottomSheetRef.current?.expand();
  };

  return (
    <View className="flex-1 bg-background">
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
        ref={mapRef}
        onUserLocationChange={({ nativeEvent: { coordinate } }) => {
          setUserLocation({
            latitude: coordinate?.latitude!,
            longitude: coordinate?.longitude!,
          });
        }}
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        userInterfaceStyle={colorScheme}
        showsMyLocationButton={true}
        rotateEnabled={true}
        pitchEnabled={true}
        followsUserLocation={true}
        mapType="satellite"
      >
        {electricalBoxes.map((box) => (
          <Marker
            key={box.id}
            coordinate={{ latitude: box.latitude, longitude: box.longitude }}
            pinColor={themeColors(colorScheme!)["--error-600"]}
            onPress={() => openBottomSheet(box)}
          />
        ))}

        {selectedBox && userLocation && (
          <Polyline
            coordinates={[
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              },
              {
                latitude: selectedBox.latitude,
                longitude: selectedBox.longitude,
              },
            ]}
            strokeColor={themeColors(colorScheme!)["--error-200"]}
            strokeWidth={4}
          />
        )}
      </MapView>

      <BottomSheet
        handleStyle={{
          backgroundColor:
            colorScheme === "light"
              ? themeColors(colorScheme)["--gray-200"]
              : themeColors(colorScheme!)["--gray-800"],
        }}
        handleIndicatorStyle={{
          backgroundColor: themeColors(colorScheme!)["--foreground"],
        }}
        ref={bottomSheetRef}
        snapPoints={["10%", "50%"]}
      >
        <BottomSheetView className="bg-background flex-1" tabIndex={-1}>
          <View className="p-5">
            {selectedBox && (
              <View className="mb-4 gap-2">
                <Text className="font-Popions-SemiBold text-[16px] capitalize text-gray-950 dark:text-gray-50">
                  Box Number : {selectedBox.name}
                </Text>
                <Text className="font-Popions-SemiBold text-[16px] capitalize text-gray-950 dark:text-gray-50">
                  Service Provider : Al Huda Generator
                </Text>
                <Text className="text-[14px] font-Popions-Regular text-gray-700 dark:text-gray-300 capitalize ">
                  Location : location of the box as string
                </Text>
                <Text className="text-[14px] font-Popions-Regular text-gray-700 dark:text-gray-300 capitalize ">
                  Distance (Direct Line): {selectedBox.lineDistance * 1000} m
                </Text>
                <Text className="text-[14px] font-Popions-Regular text-gray-700 dark:text-gray-300 capitalize ">
                  Estimated Distance (Realistic Path):{" "}
                  {selectedBox.realisticDistance * 1000} m
                </Text>
                <Button color={"secondary"}>Subscripe</Button>
              </View>
            )}
            <Button onPress={() => findNearestBox()}>
              Get Nearest Electrical Box
            </Button>
            <Text className="font-Popions-Bold text-[12px] my-2 text-error-800 dark:text-error-300">
              When you click the 'Get Nearest Electrical Box' button, the system
              will use your current GPS location to find the closest electrical
              box. Please note, this may not always be perfectly accurate due to
              buildings or other obstacles. The box will still be within the
              estimated range based on cable path calculations.
            </Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;
