import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value)
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow p-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;
