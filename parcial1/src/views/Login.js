import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginData from "./login.json";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // Estado para controlar el paso actual

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

  const changeStep = () => {
    if (step === 1) {
      // Si estamos en el paso 1 y el correo es válido, avanza al paso 2
      if (emailValid) {
        setError("");
        setStep(2);
      } else {
        setError("El correo electrónico es inválido");
      }
    } else if (step === 2) {
      // Si estamos en el paso 2 y la contraseña es válida, inicia sesión
      if (passwordValid) {
        addUserToJSON();
      } else {
        setError("La contraseña no es válida");
      }
    }
  };

  const addUserToJSON = () => {
    if (!emailValid || !passwordValid) {
      setError("El correo electrónico o la contraseña son inválidos");
      return;
    }

    console.log("Agregando usuario al JSON", formData);
    // Crear un nuevo objeto de usuario
    const newUser = {
      id: loginData.length + 1, 
      email: formData.email,
      password: formData.password,
      role: true, //Modificamos acá para cambair rol
    };

    loginData.push(newUser);

    navigate("/Home", { state: { userRole: newUser.role } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          {error && <div className="alert alert-danger">{error}</div>}
          {step === 1 && (
            <form>
              <div className="form-group">
                <h2>Acceder</h2>
                <h4>Usa tu cuenta UniAlpes</h4>
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  className={`form-control ${emailValid ? "" : "is-invalid"}`}
                  value={formData.email}
                  onChange={handleEmailChange}
                />
                {!emailValid && <div className="invalid-feedback">Correo electrónico no válido</div>}
              </div>
              <button type="button" className="btn btn-primary" onClick={changeStep}>
                Siguiente
              </button>
            </form>
          )}
          {step === 2 && (
            <form>
              <div className="form-group">
                <h4>{formData.email}</h4>
                <label>Contraseña</label>
                <input
                  type="password"
                  className={`form-control ${passwordValid ? "" : "is-invalid"}`}
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
                {!passwordValid && (
                  <div className="invalid-feedback">La contraseña debe tener al menos 6 caracteres, al menos un caracter especial y un número, mayúsculas y minusculas.</div>
                )}
              </div>
              <button type="button" className="btn btn-primary" onClick={changeStep}>
                Iniciar Sesión
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
