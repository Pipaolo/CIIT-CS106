import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Appbar } from "react-native-paper";

interface IProps extends NativeStackHeaderProps {}

/**
 * This extends the **react-navigation's** default way
 * of rendering headers
 * @param param0
 * @returns
 */
const CustomAppBar = ({ navigation, options, route, back }: IProps) => {
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : route.name;

  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
