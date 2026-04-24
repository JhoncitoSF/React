import { useState } from "react";
import "./RegistroForm.css";

const initialForm = { nombre: "", email: "", carrera: "" };

function RegistroForm() {
    const [form, setForm] = useState(initialForm);
    const [confirmado, setConfirmado] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setConfirmado(true);
        setForm(initialForm);
        setTimeout(() => setConfirmado(false), 3000);
    }

    const hayDatos = form.nombre || form.email || form.carrera;

    return (
        <div className="registro-wrapper">
            <div className="registro-card">
                <h2>Registro de Estudiante</h2>
                

                <form onSubmit={handleSubmit} className="registro-form">
                    <div className="campo">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="correo@ejemplo.com"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Carrera</label>
                        <input
                            type="text"
                            name="carrera"
                            value={form.carrera}
                            onChange={handleChange}
                            placeholder="Tu carrera"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-registrar">
                        Registrar
                    </button>
                </form>

                
                {confirmado && (
                    <div className="confirmacion">
                        ¡Registro exitoso! Bienvenido.
                    </div>
                )}

               
                {hayDatos && !confirmado && (
                    <div className="preview">
                        <p className="preview-titulo">Vista previa</p>
                        <p><span className="key">Nombre:</span> {form.nombre || "—"}</p>
                        <p><span className="key">Email:</span> {form.email || "—"}</p>
                        <p><span className="key">Carrera:</span> {form.carrera || "—"}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegistroForm;
