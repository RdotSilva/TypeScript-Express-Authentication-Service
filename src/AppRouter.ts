import express from "express";

export class AppRouter {
  private static instance: express.Router;

  /**
   * Create a singleton Express Router
   * @static
   * @returns {express.Router} - Express Router
   * @memberof AppRouter
   */
  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
