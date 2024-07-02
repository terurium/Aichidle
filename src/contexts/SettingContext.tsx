import React, { createContext, useCallback, useEffect, useState } from "react";
import { SettingsData, defaultSettingsData } from "../hooks/useSettings";

type Setting = {
  settingsData: SettingsData;
  updateSettings: (newSettings: Partial<SettingsData>) => void;
};

export const SettingContext = createContext<Setting | null>(null);

function loadSettings(): SettingsData {
  const storedSettings = localStorage.getItem("settings");
  const settingsData = storedSettings != null ? JSON.parse(storedSettings) : {};
  return {
    ...defaultSettingsData,
    ...settingsData,
  };
}

export const SettingContextProvider: React.FC = ({ children }) => {
  const [settingsData, setSettingsData] = useState<SettingsData>(
    loadSettings()
  );

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  const updateSettingsData = useCallback(
    (newSettings: Partial<SettingsData>) => {
      const updatedSettings = {
        ...settingsData,
        ...newSettings,
      };

      setSettingsData(updatedSettings);
      localStorage.setItem("settings", JSON.stringify(updatedSettings));
    },
    [settingsData]
  );

  return (
    <SettingContext.Provider
      value={{ settingsData, updateSettings: updateSettingsData }}
    >
      {children}
    </SettingContext.Provider>
  );
};
