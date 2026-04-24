import { useState } from "react";
import "./TodoList.css";

let nextId = 1;

function TodoList() {
    const [tareas, setTareas] = useState([]);
    const [input, setInput] = useState("");

    const pendientes = tareas.filter((t) => !t.completada).length;

    // Agregar con spread operator
    function agregar() {
        const texto = input.trim();
        if (!texto) return;
        setTareas([...tareas, { id: nextId++, texto, completada: false }]);
        setInput("");
    }

    // Toggle con map
    function toggleCompletar(id) {
        setTareas(
            tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
        );
    }

    // Eliminar con filter
    function eliminar(id) {
        setTareas(tareas.filter((t) => t.id !== id));
    }

    function handleKey(e) {
        if (e.key === "Enter") agregar();
    }

    return (
        <div className="todo-wrapper">
            <div className="todo-card">
                <h2>Lista de Tareas</h2>
                <p className="conteo">
                    {pendientes} tarea{pendientes !== 1 ? "s" : ""} pendiente{pendientes !== 1 ? "s" : ""}
                </p>

                {/* Input para agregar */}
                <div className="input-row">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        placeholder="Escribe una tarea..."
                    />
                    <button onClick={agregar} className="btn-agregar">
                        Agregar
                    </button>
                </div>

                {/* Lista de tareas */}
                {tareas.length === 0 ? (
                    <p className="vacio">No hay tareas. ¡Agrega una!</p>
                ) : (
                    <ul className="lista">
                        {tareas.map((tarea) => (
                            <li key={tarea.id} className="item">
                                <input
                                    type="checkbox"
                                    checked={tarea.completada}
                                    onChange={() => toggleCompletar(tarea.id)}
                                />
                                <span className={tarea.completada ? "texto completada" : "texto"}>
                                    {tarea.texto}
                                </span>
                                <button
                                    onClick={() => eliminar(tarea.id)}
                                    className="btn-eliminar"
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TodoList;
