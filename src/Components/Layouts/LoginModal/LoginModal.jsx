import React from "react";
import "./LoginModal.css";

export const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-img-login">
                    <img src="/src/assets/images/Img_login.jpg" alt="Logo" className="modal-logo" />
                </div>
                <div className="modal-content-form">
                <h2 >INICIA SESIÓN</h2>
                <form>
                    <div>
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password"id="password" name="password" placeholder="Contraseña" required />
                    </div>
                    <u>¿Olvidaste tu contraseña?</u>
                    <button type="submit">Iniciar Sesión</button>
                </form>
                </div>
            </div>
        </div>
    );
};