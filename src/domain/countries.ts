export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
  kana: string;
}

export const countries: Country[] = 
[
  {"code": "23101", "name": "名古屋市千種区", "kana": "なごやしちくさく", "latitude": 35.166486, "longitude": 136.946434},
  {"code": "23102", "name": "名古屋市東区", "kana": "なごやしひがしく", "latitude": 35.179325, "longitude": 136.925993},
  {"code": "23103", "name": "名古屋市北区", "kana": "なごやしきたく", "latitude": 35.194206, "longitude": 136.911519},
  {"code": "23104", "name": "名古屋市西区", "kana": "なごやしにしく", "latitude": 35.189117, "longitude": 136.890033},
  {"code": "23105", "name": "名古屋市中村区", "kana": "なごやしなかむらく", "latitude": 35.168747, "longitude": 136.873015},
  {"code": "23106", "name": "名古屋市中区", "kana": "なごやしなかく", "latitude": 35.168707, "longitude": 136.910251},
  {"code": "23107", "name": "名古屋市昭和区", "kana": "なごやししょうわく", "latitude": 35.150199, "longitude": 136.934124},
  {"code": "23108", "name": "名古屋市瑞穂区", "kana": "なごやしみずほく", "latitude": 35.131441, "longitude": 136.934961},
  {"code": "23109", "name": "名古屋市熱田区", "kana": "なごやしあつたく", "latitude": 35.128545, "longitude": 136.91028},
  {"code": "23110", "name": "名古屋市中川区", "kana": "なごやしなかがわく", "latitude": 35.141539, "longitude": 136.854793},
  {"code": "23111", "name": "名古屋市港区", "kana": "なごやしみなとく", "latitude": 35.107772, "longitude": 136.885567},
  {"code": "23112", "name": "名古屋市南区", "kana": "なごやしみなみく", "latitude": 35.095169, "longitude": 136.931242},
  {"code": "23113", "name": "名古屋市守山区", "kana": "なごやしもりやまく", "latitude": 35.203335, "longitude": 136.976314},
  {"code": "23114", "name": "名古屋市緑区", "kana": "なごやしみどりく", "latitude": 35.070805, "longitude": 136.952238},
  {"code": "23115", "name": "名古屋市名東区", "kana": "なごやしめいとうく", "latitude": 35.175848, "longitude": 137.010183},
  {"code": "23116", "name": "名古屋市天白区", "kana": "なごやしてんぱくく", "latitude": 35.122671, "longitude": 136.974982},
  {"code": "23201", "name": "豊橋市", "kana": "とよはしし", "latitude": 34.7692, "longitude": 137.391466},
  {"code": "23202", "name": "岡崎市", "kana": "おかざきし", "latitude": 34.954379, "longitude": 137.174329},
  {"code": "23203", "name": "一宮市", "kana": "いちのみやし", "latitude": 35.30389, "longitude": 136.802933},
  {"code": "23204", "name": "瀬戸市", "kana": "せとし", "latitude": 35.223614, "longitude": 137.084171},
  {"code": "23205", "name": "半田市", "kana": "はんだし", "latitude": 34.891718, "longitude": 136.937961},
  {"code": "23206", "name": "春日井市", "kana": "かすがいし", "latitude": 35.247611, "longitude": 136.972224},
  {"code": "23207", "name": "豊川市", "kana": "とよかわし", "latitude": 34.826851, "longitude": 137.375542},
  {"code": "23208", "name": "津島市", "kana": "つしまし", "latitude": 35.177029, "longitude": 136.741214},
  {"code": "23209", "name": "碧南市", "kana": "へきなんし", "latitude": 34.884804, "longitude": 136.993375},
  {"code": "23210", "name": "刈谷市", "kana": "かりやし", "latitude": 34.989225, "longitude": 137.002107},
  {"code": "23211", "name": "豊田市", "kana": "とよたし", "latitude": 35.082395, "longitude": 137.156249},
  {"code": "23212", "name": "安城市", "kana": "あんじょうし", "latitude": 34.958641, "longitude": 137.080297},
  {"code": "23213", "name": "西尾市", "kana": "にしおし", "latitude": 34.861937, "longitude": 137.06185},
  {"code": "23214", "name": "蒲郡市", "kana": "がまごおりし", "latitude": 34.8265, "longitude": 137.219516},
  {"code": "23215", "name": "犬山市", "kana": "いぬやまし", "latitude": 35.378607, "longitude": 136.944564},
  {"code": "23216", "name": "常滑市", "kana": "とこなめし", "latitude": 34.8867, "longitude": 136.832397},
  {"code": "23217", "name": "江南市", "kana": "こうなんし", "latitude": 35.332011, "longitude": 136.870617},
  {"code": "23219", "name": "小牧市", "kana": "こまきし", "latitude": 35.29031, "longitude": 136.910952},
  {"code": "23220", "name": "稲沢市", "kana": "いなざわし", "latitude": 35.248132, "longitude": 136.780202},
  {"code": "23221", "name": "新城市", "kana": "しんしろし", "latitude": 34.899229, "longitude": 137.498476},
  {"code": "23222", "name": "東海市", "kana": "とうかいし", "latitude": 35.022843, "longitude": 136.90253},
  {"code": "23223", "name": "大府市", "kana": "おおぶし", "latitude": 35.011657, "longitude": 136.963835},
  {"code": "23224", "name": "知多市", "kana": "ちたし", "latitude": 34.996533, "longitude": 136.864755},
  {"code": "23225", "name": "知立市", "kana": "ちりゅうし", "latitude": 35.001272, "longitude": 137.050749},
  {"code": "23226", "name": "尾張旭市", "kana": "おわりあさひし", "latitude": 35.216513, "longitude": 137.035396},
  {"code": "23227", "name": "高浜市", "kana": "たかはまし", "latitude": 34.927643, "longitude": 136.987677},
  {"code": "23228", "name": "岩倉市", "kana": "いわくらし", "latitude": 35.279503, "longitude": 136.871431},
  {"code": "23229", "name": "豊明市", "kana": "とよあけし", "latitude": 35.053688, "longitude": 137.012803},
  {"code": "23230", "name": "日進市", "kana": "にっしんし", "latitude": 35.127812, "longitude": 137.048325},
  {"code": "23231", "name": "田原市", "kana": "たはらし", "latitude": 34.667153, "longitude": 137.261056},
  {"code": "23232", "name": "愛西市", "kana": "あいさいし", "latitude": 35.176363, "longitude": 136.731249},
  {"code": "23233", "name": "清須市", "kana": "きよすし", "latitude": 35.221413, "longitude": 136.850726},
  {"code": "23234", "name": "北名古屋市", "kana": "きたなごやし", "latitude": 35.24569, "longitude": 136.86668},
  {"code": "23235", "name": "弥富市", "kana": "やとみし", "latitude": 35.128371, "longitude": 136.72417},
  {"code": "23236", "name": "みよし市", "kana": "みよしし", "latitude": 35.093682, "longitude": 137.073289},
  {"code": "23237", "name": "あま市", "kana": "あまし", "latitude": 35.191176, "longitude": 136.802658},
  {"code": "23238", "name": "長久手市", "kana": "ながくてし", "latitude": 35.182238, "longitude": 137.046789},
  {"code": "23302", "name": "東郷町", "kana": "とうごうちょう", "latitude": 35.09823, "longitude": 137.039418},
  {"code": "23342", "name": "豊山町", "kana": "とよやまちょう", "latitude": 35.247243, "longitude": 136.91402},
  {"code": "23361", "name": "大口町", "kana": "おおぐちちょう", "latitude": 35.338878, "longitude": 136.913563},
  {"code": "23362", "name": "扶桑町", "kana": "ふそうちょう", "latitude": 35.360073, "longitude": 136.902428},
  {"code": "23424", "name": "大治町", "kana": "おおはるちょう", "latitude": 35.188537, "longitude": 136.824378},
  {"code": "23425", "name": "蟹江町", "kana": "かにえちょう", "latitude": 35.126062, "longitude": 136.789606},
  {"code": "23427", "name": "飛島村", "kana": "とびしまむら", "latitude": 35.072724, "longitude": 136.76373},
  {"code": "23441", "name": "阿久比町", "kana": "あぐいちょう", "latitude": 34.937592, "longitude": 136.904166},
  {"code": "23443", "name": "東浦町", "kana": "ひがしうらちょう", "latitude": 34.956446, "longitude": 136.966494},
  {"code": "23447", "name": "南知多町", "kana": "みなみちたちょう", "latitude": 34.721652, "longitude": 136.880003},
  {"code": "23448", "name": "美浜町", "kana": "みはまちょう", "latitude": 34.769196, "longitude": 136.870254},
  {"code": "23449", "name": "武豊町", "kana": "たけとよちょう", "latitude": 34.836105, "longitude": 136.914645},
  {"code": "23501", "name": "幸田町", "kana": "こうたちょう", "latitude": 34.863231, "longitude": 137.150274},
  {"code": "23561", "name": "設楽町", "kana": "したらちょう", "latitude": 35.104918, "longitude": 137.62716},
  {"code": "23562", "name": "東栄町", "kana": "とうえいちょう", "latitude": 35.063683, "longitude": 137.735881},
  {"code": "23563", "name": "豊根村", "kana": "とよねむら", "latitude": 35.141882, "longitude": 137.744051}
];

const excludeBecauseSVGIsBrokenIDs: string[] = [
  "01202",
  "01205",
  "01331",
  "01332",
  "01346",
  "01362",
  "01364",
  "01367",
  "01371",
  "01403",
  "01404",
  "01481",
  "01482",
  "01517",
  "01518",
  "01571",
  "01578",
  "01581",
  "01584",
  "01604",
  "01609",
  "01610",
  "01695",
  "01697",
  "01699",
  "01700",
];

export const countriesWithImage = countries.filter(
  (country) => !excludeBecauseSVGIsBrokenIDs.includes(country.code)
);

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function getCountryKana(language: string, country: Country) {
  return country.kana;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
