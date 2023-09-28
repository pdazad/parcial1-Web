import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importa el archivo JSON local
import loginData from "./login.json";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
    validatePassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    setEmailValid(isEmailValid);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    const isPasswordValid = passwordRegex.test(password);
    setPasswordValid(isPasswordValid);
  };

  const addUserToJSON = () => {
    if (!emailValid || !passwordValid) {
      setError("El correo electrónico o la contraseña son inválidos");
      return;
    }

    // Crear un nuevo objeto de usuario
    const newUser = {
      id: loginData.length + 1, // Asigna un nuevo ID
      email: formData.email,
      password: formData.password,
      role: true, // Aquí puedes establecer el valor de rol que necesites
    };

    // Agregar el nuevo usuario al arreglo de datos
    loginData.push(newUser);

    // Redirigir al usuario a la página de Home
    navigate("/Home", { state: { userRole: newUser.role } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="ruta_de_la_imagen.png"
            alt="Imagen de inicio de sesión"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Iniciar Sesión</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                className={`form-control ${emailValid ? "" : "is-invalid"}`}
                value={formData.email}
                onChange={handleEmailChange}
              />
              {!emailValid && <div className="invalid-feedback">Correo electrónico no válido</div>}
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className={`form-control ${passwordValid ? "" : "is-invalid"}`}
                value={formData.password}
                onChange={handlePasswordChange}
              />
              {!passwordValid && (
                <div className="invalid-feedback">La contraseña debe tener al menos 6 caracteres</div>
              )}
            </div>
            <button type="button" className="btn btn-primary" onClick={addUserToJSON}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
