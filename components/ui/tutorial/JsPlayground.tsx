'use client';

import { useEffect, useId, useState } from 'react';
import { Pencil, Play, RotateCcw } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

import { Button } from '@/components/ui/button';

interface ConsoleEntry {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
}

function buildSrcDoc(code: string, playgroundId: string) {
  const escapedCode = code.replace(/<\/script>/g, '<\\/script>');

  return `<!DOCTYPE html>
<html>
<body>
<script>
(function () {
  var PLAYGROUND_ID = ${JSON.stringify(playgroundId)};

  function stringify(value) {
    if (typeof value === 'object' && value !== null) {
      try {
        return JSON.stringify(value, null, 2);
      } catch (e) {
        return String(value);
      }
    }
    return String(value);
  }

  function send(type, args) {
    var message = Array.prototype.map.call(args, stringify).join(' ');
    parent.postMessage({ source: 'js-playground', id: PLAYGROUND_ID, type: type, message: message }, '*');
  }

  console.log = function () { send('log', arguments); };
  console.error = function () { send('error', arguments); };
  console.warn = function () { send('warn', arguments); };
  console.info = function () { send('info', arguments); };

  window.onerror = function (message) {
    send('error', [String(message)]);
    return true;
  };

  try {
    ${escapedCode}
  } catch (e) {
    send('error', [e && e.message ? e.message : String(e)]);
  }
})();
<\/script>
</body>
</html>`;
}

export default function JsPlayground({ code: initialCode }: { code: string }) {
  const playgroundId = useId();
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState<string | null>(null);
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || data.source !== 'js-playground' || data.id !== playgroundId) return;
      setEntries((prev) => [...prev, { type: data.type, message: data.message }]);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [playgroundId]);

  function handleRun() {
    setEntries([]);
    setHasRun(true);
    setSrcDoc(buildSrcDoc(code, playgroundId));
  }

  function handleReset() {
    setCode(initialCode);
    setEntries([]);
    setHasRun(false);
    setSrcDoc(null);
  }

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-zinc-900 px-3 py-2">
        <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Pencil className="h-3 w-3" />
          Try it yourself — edit and run
        </span>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="h-7 cursor-pointer px-2 text-xs"
            onClick={handleReset}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>

          <Button size="sm" className="h-7 cursor-pointer px-3 text-xs" onClick={handleRun}>
            <Play className="h-3.5 w-3.5" />
            Run
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value)}
          theme={vscodeDark}
          extensions={[javascript({ jsx: false })]}
          basicSetup={{ foldGutter: false, highlightActiveLine: false }}
          minHeight="160px"
          className="border-b border-white/10 text-sm md:border-b-0 md:border-r"
        />

        <div className="min-h-[160px] bg-black p-4 font-mono text-sm">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Console Output
          </p>

          {!hasRun ? (
            <p className="text-zinc-500">Click &ldquo;Run&rdquo; to see the console output here.</p>
          ) : entries.length === 0 ? (
            <p className="text-zinc-500">No console output.</p>
          ) : (
            <div className="space-y-1">
              {entries.map((entry, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap ${
                    entry.type === 'error'
                      ? 'text-red-400'
                      : entry.type === 'warn'
                        ? 'text-yellow-400'
                        : 'text-green-400'
                  }`}
                >
                  {entry.message}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {srcDoc && (
        <iframe
          key={srcDoc}
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          className="hidden"
          title="JavaScript playground runtime"
        />
      )}
    </div>
  );
}
