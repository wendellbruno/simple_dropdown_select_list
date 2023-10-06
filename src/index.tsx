import React, { useState, useRef } from "react";
import  chevronIcon from "../assets/chevron.png";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";

import { SelectListProps } from "./props";

type IPropsSelect = { key?: any; value?: any };

const SelectList: React.FC<SelectListProps> = ({
  whatWithSelected,
  maxHeightList,
  data,
  valueToBeSaved,
  placeholder,
  initialListValue,
  notFoundText,
  containerStyle,
  containerFontsStyle,
  containerDataStyle,
  infoFontStyle,
  icon,
  afterSelecting = () => {},
}) => {
  const dataList = useRef(data);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>(initialListValue);
  const animatedvalue = useRef(new Animated.Value(0)).current;

  function showList() {
    setDropdown(true);
    Animated.timing(animatedvalue, {
      toValue: maxHeightList,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }

  function hiddenList() {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  }

  return (
    <View>
      {!dropdown ? (
        <TouchableOpacity
          style={[styles.Container, containerStyle]}
          onPress={showList}
        >
          <Text style={[containerFontsStyle]}>
            {selectedValue ? selectedValue : placeholder}
          </Text>
          {
            (icon) ? (
                icon
            ) : (
                <Image
                  source={chevronIcon}
                  resizeMode="contain"
                  style={{ width: 22, height: 22 }}
                />
            )
          }
        </TouchableOpacity>
      ) : (
        <>
          <Animated.View
            style={[
              { maxHeight: animatedvalue },
              styles.dropdown,
              containerDataStyle,
            ]}
          >
            <ScrollView
              contentContainerStyle={{
                paddingVertical: 10,
                overflow: "hidden",
              }}
              nestedScrollEnabled={true}
            >
              {dataList.current.length >= 1 ? (
                dataList.current.map((item: IPropsSelect, index: number) => {
                  const key = item.key;
                  const value = item.value;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.option]}
                      onPress={() => {
                        hiddenList();
                        afterSelecting();
                        setSelectedValue(item.value);
                        if (valueToBeSaved === "key") {
                          whatWithSelected(item.key);
                        } else {
                          whatWithSelected(item.value);
                        }
                      }}
                    >
                      <Text style={[infoFontStyle]}>{value}</Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <View>
                  <Text>{notFoundText}</Text>
                </View>
              )}
            </ScrollView>
          </Animated.View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    width: 100,
    borderRadius: 10,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    marginTop: 10,
    overflow: "hidden",
  },
  option: { paddingHorizontal: 20, paddingVertical: 8, overflow: "hidden" },
});

export default SelectList;