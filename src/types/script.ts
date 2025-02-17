export interface ScriptOption {
  text: string;
  goto: string;
}

export interface ScriptText {
  text: string;
  key?: string;
  image?: string;
  options?: ScriptOption[];
  goto?: string;
}

export type Script = ScriptText[];

export interface Chapter {
  title: string;
  texts: ScriptText[];
  default_video: string;
  default_image: string;
  date: string;
  images: string[];
}
