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
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.com" && password === "password") {
    // TODO: Debug password coming in as undefined, may need to look into RequestWithBody type
    req.session = { loggedIn: true, secure: false };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

export { router };
