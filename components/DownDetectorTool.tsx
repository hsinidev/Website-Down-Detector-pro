
import React, { useState, useCallback } from 'react';
import { checkUrlStatus } from '../services/statusChecker';
import type { CheckResult } from '../types';

const StatusIndicator: React.FC<{ status: 'UP' | 'DOWN' | 'ERROR' }> = ({ status }) => {
  const baseClasses = "text-6xl md:text-7xl font-bold font-orbitron tracking-widest p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] w-full text-center transition-all duration-500 transform hover:scale-105";
  if (status === 'UP') {
    return <div className={`${baseClasses} bg-gradient-to-br from-green-500/20 to-green-900/20 text-green-400 border border-green-500/40 shadow-[0_0_20px_rgba(74,222,128,0.2)]`}>UP</div>;
  }
  if (status === 'DOWN') {
    return <div className={`${baseClasses} bg-gradient-to-br from-red-500/20 to-red-900/20 text-red-400 border border-red-500/40 shadow-[0_0_20px_rgba(248,113,113,0.2)]`}>DOWN</div>;
  }
  return <div className={`${baseClasses} bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 text-yellow-400 border border-yellow-500/40`}>ERROR</div>;
};

const DownDetectorTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<CheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || isLoading) return;
    
    setIsLoading(true);
    setResult(null);
    const checkResult = await checkUrlStatus(url);
    setResult(checkResult);
    setIsLoading(false);
  }, [url, isLoading]);

  return (
    <section className="w-full max-w-4xl mx-auto pt-12 md:pt-20">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-5xl md:text-7xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 drop-shadow-lg">
          Is It Down?
        </h2>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
          Instant, reliable website status checks from our global server network.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.15)]">
        <form onSubmit={handleSubmit} className="relative z-20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="doodax.com"
                className="w-full bg-gray-900/60 text-white border border-indigo-500/30 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 rounded-xl pl-12 pr-4 py-4 text-lg transition-all duration-300 placeholder-gray-600 outline-none"
                disabled={isLoading}
                aria-label="Website URL"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 transform hover:-translate-y-0.5"
              disabled={isLoading || !url}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking...
                </span>
              ) : 'Check Status'}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="text-center mt-12 animate-fade-in">
             <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
             </div>
            <p className="mt-6 text-indigo-200 font-roboto-mono tracking-widest animate-pulse">ESTABLISHING CONNECTION...</p>
          </div>
        )}

        {result && (
          <div className="mt-12 animate-fade-in space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <StatusIndicator status={result.status} />
              </div>
              <div className="bg-gray-900/40 p-8 rounded-2xl border border-indigo-500/20 flex flex-col justify-center space-y-6 backdrop-blur-sm">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target URL</span>
                  <a href={result.url} target="_blank" rel="noopener noreferrer" className="block text-xl text-indigo-300 hover:text-white truncate transition-colors font-roboto-mono border-b border-indigo-500/20 pb-1">{result.url}</a>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">HTTP Code</span>
                    <span className={`text-2xl font-bold font-roboto-mono ${result.status === 'UP' ? 'text-green-400' : result.status === 'DOWN' ? 'text-red-400' : 'text-yellow-400'}`}>
                      {result.statusCode || 'ERR'}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{result.statusText}</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Latency</span>
                    <span className="text-2xl font-bold font-roboto-mono text-blue-300">{result.responseTime}ms</span>
                    <div className="text-xs text-gray-400 mt-1">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 p-8 rounded-2xl border border-indigo-500/20">
              <h3 className="text-xl font-bold font-orbitron text-center mb-6 text-indigo-300 flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                Simulated Global Node Check
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['London, UK', 'New York, USA', 'Tokyo, JP', 'Sydney, AU'].map((loc, idx) => (
                  <div key={loc} className="bg-gray-800/50 p-4 rounded-xl flex flex-col items-center gap-2 border border-white/5 hover:border-indigo-500/30 transition-colors">
                    <span className="text-gray-400 text-sm">{loc}</span>
                    {result.status === 'UP' ? (
                      <span className="text-green-400 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">ONLINE</span>
                    ) : result.status === 'DOWN' ? (
                      <span className="text-red-400 font-bold text-sm bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">OFFLINE</span>
                    ) : (
                      <span className="text-yellow-400 font-bold text-sm">ERROR</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DownDetectorTool;
