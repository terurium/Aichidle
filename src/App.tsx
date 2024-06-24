import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Hokkaidle } from "./components/Hokkaidle";
import { Header } from "./components/Header";
import { SettingContext, Setting } from "./contexts/SettingContext";

export const App = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsData, updateSettings] = useSettings();
  const settings: Setting = {
    settingsData,
    updateSettings,
  };

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  return (
    <SettingContext.Provider value={settings}>
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
      <Infos
        isOpen={infoOpen}
        close={() => setInfoOpen(false)}
        // settingsData={settingsData}
      />
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <Header
            handleOpenInfo={() => setInfoOpen(true)}
            handleOpenSettings={() => setSettingsOpen(true)}
          />
          <Game settingsData={settingsData} />
          <footer className="flex justify-center text-sm mt-8 mb-1">
            <Hokkaidle />
          </footer>
        </div>
      </div>
    </SettingContext.Provider>
  );
};
