import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="title"
                onChange={(e) => {
                    const value = e.target.value; // This line is not necessary, consider removing it
                    setTitle(e.target.value);
                }}
            /><br />
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value; // This line is not necessary, consider removing it
                    setDescription(e.target.value);
                }}
            /><br />

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={() => {
                    fetch("http://localhost:3001/todos", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(async function (res) {
                        const json = await res.json();
                        alert("Todo added");
                    });
                }}
            >
                Add a Todo
            </button>
        </div>
    );
}
