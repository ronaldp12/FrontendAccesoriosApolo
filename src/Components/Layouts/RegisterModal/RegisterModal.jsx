import React from "react";
import "./RegisterModal.css";

export const RegisterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="register-modal-overlay" onClick={onClose}>
            <div className="register-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="register-modal-close" onClick={onClose}>×</button>
                <div className="register-modal-img">
                    <img src="/src/assets/images/Img_login.jpg" alt="Logo" className="register-modal-logo" />
                </div>
                <div className="register-modal-content-form">
                    <h2>REGISTRARSE</h2>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre *</label>
                                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo *</label>
                                <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Contraseña *</label>
                                <input type="password" id="password" name="password" placeholder="Contraseña" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Telefono *</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Telefono" required />
                            </div>
                        </div>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};