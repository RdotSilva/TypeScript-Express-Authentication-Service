import { Router, Response, Request } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password type="password" />
    </div>
    <button>Submit</button>
  </form>`);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  // TODO: Wire up user session. Keep track when user is logged in successfully

  if (email) {
    res.send(email + password);
  } else {
    res.send("You must provide an email");
  }
});

export { router };