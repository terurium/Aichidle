import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useState } from "react";
import { Infos } from "./components/panels/Infos";
import { Settings } from "./components/panels/Settings";
import { Hokkaidle } from "./components/Hokkaidle";
import { Header } from "./components/Header";
import { SettingContextProvider } from "./contexts/SettingContext";
import { useSettings } from "./hooks/useSettings";

export const App = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { settingsData } = useSettings();

  return (
    <>
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
      <Infos isOpen={infoOpen} close={() => setInfoOpen(false)} />
      <Settings isOpen={settingsOpen} close={() => setSettingsOpen(false)} />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <Header
            handleOpenInfo={() => setInfoOpen(true)}
            handleOpenSettings={() => setSettingsOpen(true)}
          />
          <Game />
          <footer className="flex justify-center text-sm mt-8 mb-1">
            <Hokkaidle />
          </footer>
        </div>
      </div>
    </>
  );
};

export const AppContainer = () => {
  return (
    <SettingContextProvider>
      <App />
    </SettingContextProvider>
  );
};
