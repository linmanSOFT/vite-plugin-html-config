import type { Plugin } from "vite";
export interface IHTMLTag {
    [key: string]: string | boolean;
}
export declare type ScriptTag = Record<string, string | boolean> | string;
export interface Options {
    html?: IHTMLTag;
    favicon?: string;
    title?: string;
    metas?: IHTMLTag[];
    links?: IHTMLTag[];
    style?: string;
    headScripts?: ScriptTag[];
    scripts?: ScriptTag[];
    preHeadScripts?: ScriptTag[];
}
export default function HtmlPlugin(rawOptions: Options): Plugin;
