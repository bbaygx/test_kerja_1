interface PlaylistItem {
  id: number;
  dir_id: number;
  title: string;
  description: string;
  url: string;
  type: "image" | "video";
  created_at: string;
  updated_at: string;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  banner: string;
  logo: string;
  created_at: string;
  updated_at: string;
  playlist: PlaylistItem[];
}

export interface ApiResponse {
  data: Data[];
  status: number;
}
