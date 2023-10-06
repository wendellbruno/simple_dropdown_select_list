<p align="center">

|  |  | |  |
| - | -- | --- |----
|<a href="https://www.npmjs.com/package/react_native_simple_dropdown_select_list">![NPM VERSION](https://img.shields.io/npm/v/react_native_simple_dropdown_select_list?style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react_native_simple_dropdown_select_list">![NPM WEEKLY DOWNLOADS](https://img.shields.io/npm/dw/react_native_simple_dropdown_select_list?color=%232CA215&label=WEEKLY%20DOWNLOADS&style=for-the-badge)</a> | <a href="https://github.com/wendellbruno/simple_dropdown_select_list/stargazers">![GITHUB STAR](https://img.shields.io/github/stars/wendellbruno/simple_dropdown_select_list?label=Give%20Us%20A%20Star&style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react_native_simple_dropdown_select_list">![NPM LIFETIME DOWNLOADS](https://img.shields.io/npm/dt/react_native_simple_dropdown_select_list?color=%232CA215&style=for-the-badge)</a>

</p>
 
 <br>
</p>
<h1 align="center"> 🚀 Simple Dropdown Select List - React Native  🚀 </h1>


<p align="center" >
    <br>
    •    No dependencies
    •    Customizable
    <br>
</p> 


<p align="center" >
<br>

![](https://i.ibb.co/x7FQfVg/gif-select-list.gif)

<br>
</p>

# Compatibility

<br>

 Expo ✅ |  iOS ✅ | Android ✅ 



<br>

# ✔ Installation

```sh
$ npm install react_native_simple_dropdown_select_list

```

OR

```sh
$ yarn add react_native_simple_dropdown_select_list
```

<br>

# 🚀 Exemple for use 🚀
```jsx
import { SelectList } from 'react_native_simple_dropdown_select_list';
import { useTheme } from 'styled-components/native';


const App = () => {

  const [selected, setSelected] = React.useState("");
  const theme = useTheme();
  
const data = [
  { key: '1', value: 'Automotive' },
  { key: '2', value: 'Food and drinks' },
  { key: '3', value: 'Beauty' },
  { key: '4', value: 'Home' },
  { key: '5', value: 'Eletronic' },
  { key: '6', value: 'Games' },
];

  return(
       <SelectList
        //requireds
        data={data}
        whatWithSelected={value => setSelected(value)}
        maxHeightList={150}
        placeholder="Select a category"
        notFoundText="Date not found"
        valueToBeSaved="key"
        //optionals
        afterSelecting={() => console.log('return function')}
        containerStyle={{ width: 200, borderColor: 'black' }}
        containerDataStyle={{ width: 200, borderColor: 'gray' }}
        infoFontStyle={{ fontSize: 18, fontWeight: 'bold' }}
        containerFontsStyle={{ fontSize: 18, fontWeight: 'normal' }}
      />
      <br />
      <h2>with theme</h2>
      <View style={{height: 80}} />
    <SelectList
        //requireds
        data={data}
        whatWithSelected={value => setSelected(value)}
        maxHeightList={150}
        placeholder="Select a category"
        notFoundText="Date not found"
        valueToBeSaved="key"
        //optionals
        afterSelecting={() => console.log('return function')}
        containerStyle={{ width: 300, borderColor: theme.colors.primary }}
        containerDataStyle={{width: 300, borderColor: theme.colors.primary }}
        infoFontStyle={{ fontSize: 18, fontFamily: theme.fonts.regular }}
        containerFontsStyle={{ fontSize: 18, fontFamily: theme.fonts.bold }}
      />
  )

};
```


<br>

# 🔧 General Props

| Name | Type | Required | Description |
| ---- | ---- |   ---    |----------- |
| data| Array[object]| ✅| Data passed to the view in the component
| initialListValue| Object| ❌|  List initial value
| notFoundText| String| ✅| Text in case of error when reading data
| valueToBeSaved| Object| ✅| value that will be saved in your local state
| whatWithSelected| Function| ✅| Fn to set Selected option value which will be stored in your local state
| afterSelecting| Function| ❌| Trigger an action when option is selected
| maxHeightList| Number| ✅| maximum size of the list to be re-rendered
| placeholder| String|  ✅| Placeholder text that will be displayed in the select box
| containerStyle| ViewStyle| ❌| override styles of the container
| containerFontsStyle| TextStyle| ❌| override container font styles
| containerDataStyle| ViewStyle| ❌| override styles of the data container
| infoFontStyle| TextStyle| ❌| override data font styles
| icon| JSX Element| ❌| Add your own icon


