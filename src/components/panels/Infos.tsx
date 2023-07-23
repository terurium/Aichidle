import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Hokkaidle } from "../Hokkaidle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Worldle } from "../Worldle";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Hokkaidle /> で、北海道の市町村を 6 回以内で当ててください。
        </div>
        {/* <div>Each guess must be a valid country, territory, ...</div> */}
        <div>
          予想を入力すると、予想した市町村と正解の市町村との距離と方向が表示されます。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">例</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "富良野市",
                direction: "NE",
                distance: 212237,
                angleInDeg: 220,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            １回目は<span className="uppercase font-bold">富良野市</span>{" "}
            を予想しました。 正解から
            {formatDistance(212237, settingsData.distanceUnit)}
            だけ離れていて、正解への方角は左下方向。
            {/* Your guess <span className="uppercase font-bold">Chile</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target country, the target country is in the North-East direction
            and you have a only 32% of proximity because it&apos;s quite far
            away! */}
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "函館市",
                direction: "SE",
                distance: 14447,
                angleInDeg: 349,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            ２回目は <span className="uppercase font-bold">函館市</span>{" "}
            を予想しました。
            {formatDistance(14447, settingsData.distanceUnit)} と近づきました。
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "七飯町",
                direction: "N",
                distance: 0,
                angleInDeg: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            ３回目の予想、
            <span className="uppercase font-bold">七飯町</span> は正解でした！
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        <Hokkaidle /> は毎日更新されます。
      </div>
      {/* <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">距離について</div>
        <div>
          The distances displayed correspond to the distances between the
          selected and the target territory centers.
        </div>
        <div>
          For instance, the computed distance between United States and Canada
          is around {formatDistance(2_260_000, settingsData.distanceUnit)} even
          if they have a common border.
        </div>
      </div> */}
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Hokkaidle /> has been <span className="font-bold">heavily</span>{" "}
        inspired by{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Worldle />
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        which has been <span className="font-bold">heavily</span> inspired by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by{" "}
          <a
            className="underline"
            href="https://github.com/takapiro99"
            target="_blank"
            rel="noopener noreferrer"
          >
            @takapiro99
          </a>
        </div>
        <div>
          GitHub :{" "}
          <a
            className="underline"
            href="https://github.com/takapiro99/hokkaidle"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/takapiro99/hokkaidle
          </a>
        </div>
        {/* <div>
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee! ☕
          </a>
        </div> */}
      </div>
    </Panel>
  );
}
