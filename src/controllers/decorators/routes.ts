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

export const get = Methods.get;
export const put = Methods.put;
export const post = Methods.post;
export const del = Methods.del;
export const patch = Methods.patch;
