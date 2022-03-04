import admins from "../database/admins";

export async function login(req, res) {
  const { user, password } = req.body;
  let login = false;

  try {
    if (!user || !password) {
      return res.status(200).json({
        message: "Credenciales insuficientes",
        access: login,
      });
    } else if (user && password) {
      admins.map((element) => {
        if (element.user === user && element.password === password) {
          login = true;
        }
      });
      return res.status(200).json({
        message: "Informacion Valida",
        access: login,
      });


    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}
