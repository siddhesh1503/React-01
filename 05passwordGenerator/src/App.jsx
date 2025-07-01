import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+={}[]~`';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-lg bg-gray-900 text-white rounded-xl shadow-xl p-8 space-y-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-orange-500">🔐 Password Generator</h1>

        <div className="bg-gray-800 rounded-md flex items-center justify-between px-4 py-3 font-mono text-lg">
          <span className="break-all">{password}</span>
          <button
            onClick={copyToClipboard}
            className="text-orange-400 hover:text-orange-300 transition"
            title="Copy to clipboard"
          >
            📋
          </button>
        </div>
        {copied && <p className="text-green-400 text-sm text-center">Password copied!</p>}

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Password Length: <span className="text-orange-400">{length}</span>
            </label>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full accent-orange-500"
            />
          </div>

          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Symbols
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={passwordGenerator}
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg font-semibold shadow-md"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
