import learnDB from "../models/LearnDB.js"
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  try {
    const [result] = await learnDB.query(
      "INSERT INTO authusers (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    res.status(201).json({
      message: "El usuario fue creado satisfactoriamente.",
      result,
    });
  } catch (error) {
    console.error("Error al crear usuario:", error.message);
    res.status(500).json({
      message: "Ocurrió un error al intentar crear el usuario.",
      error: error.message,
    });
  }
};

export const loginAuth = async (req, res) => {
  const {username, password} = req.body

  const consult = "SELECT * FROM authusers WHERE username = ? AND password = ?";

  try {
    
    const [result] = await learnDB.query(consult, [username, password]);

    if(result.length > 0){
      const token = jwt.sign({username}, "Stack", {
        expiresIn: '5m'
      })
      console.log(token)
      res.send({token})
    }else{
      console.log("Wrong User")
      res.send({message: "wrong user"})
    }

  } catch (error) {
    console.log("Error in loginAuth: ", error)
    res.status(500).send({message: "Internal server error"})
  }
}