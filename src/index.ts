import express, { Response, Request } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Hi There</h1>
  </div>`);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
