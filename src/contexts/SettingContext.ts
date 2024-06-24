import { createContext } from "react";
import { SettingsData, defaultSettingsData } from "../hooks/useSettings";

export const SettingContext = createContext<Setting>({
  settingsData: defaultSettingsData,
  updateSettings: () => {
    // empty
  },
});

export type Setting = {
  settingsData: SettingsData;
  updateSettings: (newSettings: Partial<SettingsData>) => void;
};
