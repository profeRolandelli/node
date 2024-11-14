var express = require("express");
var router = express.Router();
var dbConn = require("../db/db");

// router.get("/", function (req, res) {
//   console.log("Desde menu");

//   res.render('menu.ejs')
// }); //COMENTAMOS ESTO PARA PONER UN GET QUE ACCEDA A LA BASE DE DATOS
router.get("/", function (req, res) {
  dbConn.query("Select * from cursos", function (error, results, fields) {
    if (error) {
      throw error;
    } else {
      console.log(results);
      //console.log(results)

      res.render("menu.ejs", { cursos: results });
    }
  });
});

router.get("/reservasSalones", function (req, res) {
  console.log("Desde menu");
  const titulo = "PAGINA DE RESERVAS AUTOMATICA";

  res.render("reservasSalones.ejs", { tituloGrande: titulo });
});

//esto se agrega hasta que lo conectemos con una base de datos
const users = [{ username: "admin", password: "1234" }];

router.get("/admin", function (req, res) {
  console.log("Desde login");
  res.render("login.ejs", { error: null });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    req.session.user = user;
    res.redirect("/tabla");
  } else {
    res.render("login", { error: "Credenciales inválidas" });
  }
});

router.get("/tabla", function (req, res) {
  dbConn.query("Select * from cursos", function (error, results, fields) {
    if (error) {
      throw error;
    } else {
      // console.log("Enviando Tablas");
      //console.log(results)

      res.render("tabla.ejs", { results: results });
    }
  });
});

router.get("/borrarUsuario/(:dni)", function (req, res, error) {
  console.log("Borrando");
  let dni = req.params.idCurso;
  console.log(idCurso);
  dbConn.query(
    "DELETE FROM alumnos WHERE idCurso = " + idCurso,
    function (err, result) {
      //if(err) throw err
      if (err) {
        throw error;
       
       
      } else {
       
        res.render("/tabla");
      }
    }
  );
});
module.exports = router;
