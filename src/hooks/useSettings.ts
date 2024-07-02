import React from "react";
import { SettingContext } from "../contexts/SettingContext";

export interface SettingsData {
  noImageMode: boolean;
  rotationMode: boolean;
  distanceUnit: "km" | "miles";
  theme: "light" | "dark";
}

export const defaultSettingsData: SettingsData = {
  noImageMode: false,
  rotationMode: false,
  distanceUnit: "km",
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const useSettings = () => {
  const context = React.useContext(SettingContext);
  if (context === null) {
    throw new Error("useSettings must be used within a SettingContextProvider");
  }
  return context;
};
