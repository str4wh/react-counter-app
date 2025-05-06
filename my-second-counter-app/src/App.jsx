import React from 'react'
import { useState } from 'react'

function App() {
  const[count, setCount] = useState (0);
  return (
    <div class="min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 flex items-center justify-center">
        <div class="border-0 shadow-xl/30 shadow-white w-full max-w-96 pl-6 pr-6 rounded-4xl">
          <p class="text-lg text-white text-center">This is a simple counter app</p>
          <div class="text-center">
            <button onClick={() => setCount(count + 1)}
            class="pl-4 pr-4 border-1 text-black shadow-xl/30 shadow-white mb-5 rounded-3xl mr-4 bg-blue-200 hover:bg-blue-400 transition-300s">
            + 1
            </button>
            <button onClick={() => setCount(count - 1)}
            class="pl-4 pr-4 border-1 text-black shadow-xl/30 shadow-white mb-5 rounded-3xl mr-4 bg-blue-200 hover:bg-blue-400 transition-300s">
            - 1
            </button>
            <span class="pl-4 pr-4 border-1 text-black shadow-xl/30 shadow-white mb-5 rounded-3xl mr-4 bg-blue-200 flex items-center justify-center">{count}</span>
          </div>
        </div>
    </div>
  )
}

export default App