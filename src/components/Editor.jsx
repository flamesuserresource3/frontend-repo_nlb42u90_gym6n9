import React, { useEffect, useMemo, useState } from 'react';
import { Check, RefreshCw, AlertTriangle } from 'lucide-react';

const Editor = ({ data, onApply, onReset }) => {
  const initial = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const [text, setText] = useState(initial);
  const [error, setError] = useState('');
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setText(initial);
    setError('');
  }, [initial]);

  const handleApply = () => {
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON structure');
      if (!Array.isArray(parsed.services) || !Array.isArray(parsed.team)) {
        throw new Error('JSON must include arrays: services and team');
      }
      onApply(parsed);
      setApplied(true);
      setTimeout(() => setApplied(false), 1500);
      setError('');
    } catch (e) {
      setError(e.message || 'Invalid JSON');
      setApplied(false);
    }
  };

  return (
    <section id="editor" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Edit Content via JSON</h2>
          <p className="mt-2 text-gray-600">Update services and team details without touching code. Paste JSON and apply.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
          <div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              spellCheck={false}
              className="w-full h-[360px] rounded-lg border border-gray-200 p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && (
              <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
              <p className="text-sm text-gray-700">Quick tips</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Keep keys: services[], team[].</li>
                <li>Service fields: icon, title, description, tags[].</li>
                <li>Team fields: name, role, portfolio, avatar, bio, skills[].</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button onClick={handleApply} className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white shadow hover:shadow-md transition">
                {applied ? <Check className="h-4 w-4" /> : null}
                {applied ? 'Applied' : 'Apply Changes'}
              </button>
              <button onClick={onReset} className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-gray-800 hover:bg-gray-50">
                <RefreshCw className="h-4 w-4" /> Reset to Default
              </button>
            </div>
            <div className="text-xs text-gray-500">
              Changes affect only this preview. To make them permanent, update your data file later.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
