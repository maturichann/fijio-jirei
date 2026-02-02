export interface Video {
  id: string;
  youtubeId: string;
  title: string;
}

// YouTubeの動画IDと、サムネイルURLを自動生成するヘルパー
export function getYoutubeThumbnail(youtubeId: string): string {
  // YouTube Shortsの場合、標準のサムネイルを使用
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

// ここに動画データを追加していく
// youtubeId は YouTube URLの https://www.youtube.com/watch?v=XXXXX の XXXXX 部分
// または https://youtube.com/shorts/XXXXX の XXXXX 部分
export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "aUdyXd7Im-8",
    title: "肩の痛みで一年間投げられなかった野球選手",
  },
  {
    id: "2",
    youtubeId: "PilyXlZmsNw",
    title: "慢性腰痛の改善",
  },
  {
    id: "3",
    youtubeId: "UZYmSh4ufnI",
    title: "60代 肩関節周囲炎",
  },
  {
    id: "4",
    youtubeId: "LWSfsHvc_RU",
    title: "腰痛・足の痺れ改善",
  },
  {
    id: "5",
    youtubeId: "Zza6xxkMwyE",
    title: "ふくらはぎ肉離れ",
  },
  {
    id: "6",
    youtubeId: "rZM9-zFYwBU",
    title: "四十肩",
  },
];
