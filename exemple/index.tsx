//@ts-nocheck
import React from "react";
import SelectList from '../src/index';

const data = [
  { key: "1", value: "Automotive"},
  { key: "2", value: "Food and drinks" },
  { key: "3", value: "Beauty"},
  { key: "4", value: "Home" },
  { key: "5", value: "Eletronic" },
  { key: "6", value: "Games" },
]

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
      containerStyle={{ width: 200, borderColor: 'black'}}
      containerDataStyle={{width: 200, borderColor: 'gray' }}
      infoFontStyle={{ fontSize: 18, fontWeight: "bold" }}
      containerFontsStyle={{ fontSize: 18, fontWeight: "normal" }}
      />
  );
};
