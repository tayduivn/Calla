import type { progressCallback } from "../tasks/progressCallback";
import type { getPartsReturnType } from "./getPartsReturnType";

export interface IFetcher {
    getBuffer(path: string): Promise<getPartsReturnType>;
    getBuffer(path: string, onProgress?: progressCallback): Promise<getPartsReturnType>;
    getBuffer(path: string, headerMap?: Map<string, string>): Promise<getPartsReturnType>;
    getBuffer(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<getPartsReturnType>;

    postObjectForBuffer<T>(path: string, obj: T): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, onProgress?: progressCallback): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<getPartsReturnType>;

    getBlob(path: string): Promise<Blob>;
    getBlob(path: string, onProgress?: progressCallback): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;

    postObjectForBlob<T>(path: string, obj: T): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, onProgress?: progressCallback): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;

    getFile(path: string): Promise<string>;
    getFile(path: string, onProgress?: progressCallback): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;

    postObjectForFile<T>(path: string, obj: T): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;

    getText(path: string): Promise<string>;
    getText(path: string, onProgress?: progressCallback): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;

    postObjectForText<T>(path: string, obj: T): Promise<string>;
    postObjectForText<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;

    getObject<T>(path: string): Promise<T>;
    getObject<T>(path: string, onProgress?: progressCallback): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<T>;

    postObject<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<void>;

    postObjectForObject<T, U>(path: string, obj: T): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, onProgress?: progressCallback): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<U>;

    getXml(path: string): Promise<HTMLElement>;
    getXml(path: string, onProgress?: progressCallback): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;

    postObjectForXml<T>(path: string, obj: T): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, onProgress?: progressCallback): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;

    loadScript(path: string, test: () => boolean, onProgress?: progressCallback): Promise<void>;
}