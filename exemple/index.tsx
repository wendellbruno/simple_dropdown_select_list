//@ts-nocheck
import React from "react";
import SelectList from '../src/index';

const data = [
  { key: "1", value: "Automotive" },
  { key: "2", value: "Food and drinks" },
  { key: "3", value: "babies" },
  { key: "4", value: "beauty" },
  { key: "5", value: "home" },
  { key: "6", value: "eletronic" },
  { key: "7", value: "games" },
];

export const Sales: React.FC = () => {
  const [selected, setSelected] = React.useState();
  return (
    <SelectList
      //requireds
      data={data}
      whatWithSelected={(value) => setSelected(value)}
      maxHeightList={150}
      placeholder="Select a category"
      notFoundText="Date not found"
      valueToBeSaved="key"

      //optionals
      afterSelecting={() => console.log("return function")}
      containerStyle={{ width: 300, borderColor: 'black'}}
      containerDataStyle={{ borderColor: 'gray' }}
      infoFontStyle={{ fontSize: 18, fontFamily: 'bold' }}
      containerFontsStyle={{ fontSize: 18, fontFamily: 'regular' }}
      icon={}

      />
  );
};
