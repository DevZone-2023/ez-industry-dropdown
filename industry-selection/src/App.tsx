import React, { useState } from 'react';
import { IndustrySelector } from './components/IndustrySelector';
import { Columns } from 'lucide-react';

function App() {
  const [columns, setColumns] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Columns className="w-6 h-6 text-indigo-600" />
              Industry Selection
            </h1>
            <div className="flex items-center gap-3">
              <label htmlFor="columns" className="text-sm font-medium text-gray-700">
                Columns:
              </label>
              <select
                id="columns"
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                  sm:text-sm px-3 py-2 border outline-none bg-white"
              >
                <option value={0}>Auto-fit</option>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
      <main>
        <IndustrySelector columns={columns} />
      </main>
    </div>
  );
}

export default App;