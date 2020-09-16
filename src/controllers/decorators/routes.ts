import "reflect-metadata";
import { Methods } from "./Methods";

/**
 * Binds a http method to a path
 * @param {string} method - Get, Put, Post, Delete, Patch
 * @returns
 */
function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

export const get = Methods.Get;
export const put = Methods.Put;
export const post = Methods.Post;
export const del = Methods.Del;
export const patch = Methods.Patch;
