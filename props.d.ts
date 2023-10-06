import type * as React from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface SelectListProps {
  //styles

  /**
   * maximum size of the list to be re-rendered
   */
  maxHeightList: number;

  /**
   * Placeholder text that will be displayed in the select box
   */
  placeholder: string;

  /**
   * override styles of the container
   */
  containerStyle?: ViewStyle;

  /**
   * override container font styles
   */
  containerFontsStyle?: TextStyle;

  /**
   * override styles of the data container
   */
  containerDataStyle?: ViewStyle;

  /**
   * override data font styles
   */
  infoFontStyle?: TextStyle;

  /**
   * Add your own icon 
   */
  icon?: JSX.Element;

  //Functional

  /**
   * Data passed to the view in the component
   */
  data: Array<{}>;

  /**
   * List initial value
   */
  initialListValue?: { key: any; value: any };

  /**
   * Text in case of error when reading data
   */
  notFoundText: string;

  /**
   * value that will be saved in your local state
   */
  valueToBeSaved: "key" | "value";

  /**
   * Fn to set Selected option value which will be stored in your local state
   */
  whatWithSelected: Function;

  /**
   * Trigger an action when option is selected
   */
  afterSelecting?: () => void;
}
