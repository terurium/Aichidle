import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React, { useContext } from "react";
import { Hokkaidle } from "../Hokkaidle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Worldle } from "../Worldle";
import { SettingContext } from "../../contexts/SettingContext";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
}

export function Infos({ isOpen, close }: InfosProps) {
  const { settingsData } = useContext(SettingContext);

  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Hokkaidle /> で、北海道の市町村を 6 回以内で当ててください。
        </div>
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
      <details>
        <summary>プライバシーについて</summary>
        ＊Google Analyticsについて
        当社のいくつかのページでは、お客様の本サイトの訪問状況を把握するためにGoogle
        社のサービスであるGoogle Analyticsを利用しています。当社のサイトでGoogle
        Analyticsを利用しますと、当社が発行するクッキーをもとにして、Google
        社がお客様の本サイトの訪問履歴を収集、記録、分析します。当社は、Google
        社からその分析結果を受け取り、お客様の本サイトの訪問状況を把握します。Google
        Analyticsにより収集、記録、分析されたお客様の情報には、特定の個人を識別する情報は一切含まれません。また、それらの情報は、Google社により同社のプライバシーポリシーに基づいて管理されます。
        お客様は、ブラウザのアドオン設定でGoogle
        Analyticsを無効にすることにより、当社のGoogle
        Analytics利用によるお客様の情報の収集を停止することも可能です。Google
        Analyticsの無効設定は、Google社によるオプトアウトアドオンのダウンロードページで
        「Google
        Analyticsオプトアウトアドオン」をダウンロードおよびインストールし、ブラウザのアドオン設定を変更することで実施することができます。なお、お客様がGoogle
        Analyticsを無効設定した場合、お客様が訪問する本サイト以外のウェブサイトでもGoogle
        Analyticsは無効になりますが、お客様がブラウザのアドオンを再設定することにより、再度Google
        Analyticsを有効にすることも可能です。 Google
        Analyticsの利用規約に関する説明についてはGoogle
        Analyticsのサイトを、Google社のプライバシーポリシーに関する説明については同社のサイトをご覧下さい。
        Google Analyticsの利用規約：
        http://www.google.com/analytics/terms/jp.html
        Googleのプライバシーポリシー：
        http://www.google.com/intl/ja/policies/privacy/ Google
        Analyticsオプトアウトアドオン：
        https://tools.google.com/dlpage/gaoptout?hl=ja
      </details>
    </Panel>
  );
}
