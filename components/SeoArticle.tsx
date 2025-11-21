
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="max-w-5xl mx-auto mt-16 mb-16 relative z-20">
      <div className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/20 shadow-2xl">
        
        <div className="mb-6">
           <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-4">
            Website Status & Server Health Guide
          </h2>
          <p className="text-indigo-200 text-lg">
            Everything you need to know about website downtime, HTTP status codes, and keeping your online presence alive.
          </p>
        </div>

        <div 
          className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-24'}`}
        >
          <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:font-orbitron prose-headings:text-indigo-300 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white">
            
            {/* Content Start - Visible in collapsed state */}
            <p className="lead">
              In the digital age, website availability is synonymous with business reliability. Whether you are running a global e-commerce giant or a personal portfolio, the question "Is my website down?" is one that carries significant weight. Downtime translates directly to lost revenue, diminished SEO rankings, and eroded user trust.
            </p>
            {/* Content End - Visible in collapsed state */}

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
            )}

            <div className="bg-indigo-950/30 border border-indigo-500/30 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white m-0">Table of Contents</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm">
                <li><a href="#chapter-1">1. The Cost of Downtime</a></li>
                <li><a href="#chapter-2">2. HTTP Status Codes Decoded</a></li>
                <li><a href="#chapter-3">3. Local vs. Global Outages</a></li>
                <li><a href="#chapter-4">4. How Down Detectors Work</a></li>
                <li><a href="#chapter-5">5. Troubleshooting Guide</a></li>
                <li><a href="#chapter-6">6. SEO Impact of Downtime</a></li>
                <li><a href="#faq">7. Frequently Asked Questions</a></li>
              </ul>
            </div>

            <h3 id="chapter-1">1. The Cost of Downtime: More Than Just a Blank Screen</h3>
            <p>
              When a website goes offline, the immediate reaction is often frustration. However, for website owners, the implications are far-reaching.
              Statistical analysis shows that the average cost of IT downtime is $5,600 per minute. This figure varies wildly depending on the size of the business, but the principle remains: uptime is money.
            </p>
            <p>
              Beyond immediate financial loss, downtime damages brand reputation. Users who encounter a "503 Service Unavailable" error are unlikely to return immediately. In a competitive market, they will simply click the next link in the search results—your competitor.
            </p>

            <h3 id="chapter-2">2. HTTP Status Codes Decoded: Speaking the Server's Language</h3>
            <p>
              The internet runs on the Hypertext Transfer Protocol (HTTP). Every time you visit a URL, your browser sends a request, and the server responds with a three-digit code. Understanding these codes is crucial for diagnosing "website down" issues.
            </p>

            <h4>The 2xx Series: Success</h4>
            <ul>
              <li><strong>200 OK:</strong> The standard response for successful HTTP requests. The actual response will depend on the request method used.</li>
              <li><strong>201 Created:</strong> The request has been fulfilled and has resulted in one or more new resources being created.</li>
            </ul>

            <h4>The 3xx Series: Redirection</h4>
            <ul>
              <li><strong>301 Moved Permanently:</strong> This and all future requests should be directed to the given URI. Vital for SEO migration.</li>
              <li><strong>302 Found:</strong> Temporary redirection.</li>
            </ul>

            <h4>The 4xx Series: Client Errors (It's You, Not Me)</h4>
            <ul>
              <li><strong>400 Bad Request:</strong> The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax).</li>
              <li><strong>401 Unauthorized:</strong> Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.</li>
              <li><strong>403 Forbidden:</strong> The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.</li>
              <li><strong>404 Not Found:</strong> The most famous error. The requested resource could not be found but may be available in the future.</li>
            </ul>

            <h4>The 5xx Series: Server Errors (It's Me, Not You)</h4>
            <ul>
              <li><strong>500 Internal Server Error:</strong> A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.</li>
              <li><strong>502 Bad Gateway:</strong> The server was acting as a gateway or proxy and received an invalid response from the upstream server.</li>
              <li><strong>503 Service Unavailable:</strong> The server is currently unable to handle the request due to a temporary overload or scheduled maintenance. This is the classic "Down" signal.</li>
              <li><strong>504 Gateway Timeout:</strong> The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.</li>
            </ul>

            <h3 id="chapter-3">3. Local vs. Global Outages: Is It Just Me?</h3>
            <p>
              One of the most confusing aspects of internet connectivity is the distinction between a local connectivity issue and a global server outage.
            </p>
            <p>
              <strong>Local Outages</strong> occur when your specific device, local network, ISP (Internet Service Provider), or regional DNS resolver fails to connect to the target server. To you, the site is down. To the rest of the world, it is up. Common causes include:
            </p>
            <ul>
              <li>Corrupted browser cache or cookies.</li>
              <li>Firewall or antivirus software blocking the connection.</li>
              <li>DNS propagation delays.</li>
              <li>ISP routing issues.</li>
            </ul>
            <p>
              <strong>Global Outages</strong> occur when the hosting server itself fails, the data center loses power, or there is a critical code failure in the web application. In this scenario, the website is inaccessible to everyone, regardless of location.
            </p>

            <h3 id="chapter-4">4. How Down Detectors Work</h3>
            <p>
              Tools like this "Website Down Detector" utilize a network of distributed probes. When you enter a URL, the tool does not just check from your browser (which would be subject to your local network issues); it instructs a remote server to attempt a connection.
            </p>
            <p>
              This process involves:
            </p>
            <ol>
              <li><strong>DNS Resolution:</strong> Translating the domain name (e.g., google.com) into an IP address. Failure here indicates a Domain Name System issue.</li>
              <li><strong>TCP Handshake:</strong> Establishing a connection with the server. Failure here usually indicates the server is offline or a firewall is blocking traffic.</li>
              <li><strong>HTTP Request:</strong> Sending a request for the homepage content.</li>
              <li><strong>Response Analysis:</strong> Reading the status code and measuring the Time To First Byte (TTFB).</li>
            </ol>

            <h3 id="chapter-5">5. Troubleshooting Guide: What To Do If A Site Is Down</h3>
            <p>If our tool says the site is <strong>UP</strong>, but you cannot access it:</p>
            <ol>
              <li><strong>Clear Browser Cache:</strong> Old data can cause loading errors. Press Ctrl+F5 (Cmd+Shift+R on Mac).</li>
              <li><strong>Flush DNS:</strong> On Windows, run <code>ipconfig /flushdns</code> in Command Prompt.</li>
              <li><strong>Check Alternative Device:</strong> Try accessing the site from your phone (disconnect from Wi-Fi to use mobile data).</li>
              <li><strong>Restart Router:</strong> A classic fix for a reason; it resets your local connection to the ISP.</li>
            </ol>
            <p>If our tool says the site is <strong>DOWN</strong>:</p>
            <ul>
              <li>If you are a visitor: Wait. There is nothing you can do.</li>
              <li>If you are the owner: Contact your hosting provider immediately, check your server logs for 500 errors, and verify your domain registration hasn't expired.</li>
            </ul>

            <h3 id="chapter-6">6. SEO Impact of Downtime</h3>
            <p>
              Search engines like Google prioritize user experience. A site that is frequently inaccessible provides a terrible user experience. Googlebot crawls websites regularly. If it encounters a 500-level error, it will try again later. However, persistent downtime tells Google the site is abandoned or unreliable.
            </p>
            <p>
              <strong>Intermittent Downtime:</strong> Can lead to a temporary drop in rankings.
              <br />
              <strong>Prolonged Downtime (Days):</strong> Can lead to de-indexing, where your pages are completely removed from search results. Recovery from this can take weeks or months.
            </p>

            <h3 id="faq">7. Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4">
              <div>
                <strong>Q: Can a website be down for some people but not others?</strong>
                <p>Yes. This is often due to DNS propagation (where new server address info hasn't reached all ISPs yet) or regional CDN (Content Delivery Network) failures.</p>
              </div>
              <div>
                <strong>Q: What is a DDoS attack?</strong>
                <p>A Distributed Denial of Service attack involves flooding a website with so much fake traffic that legitimate users cannot get through. This causes a temporary "down" status.</p>
              </div>
              <div>
                <strong>Q: How accurate is this tool?</strong>
                <p>This tool performs a real-time server-side check. If it reports a site is down, it means our neutral server could not reach it, indicating a high probability of a general outage.</p>
              </div>
            </div>

            <hr className="border-indigo-800 my-8" />
            
            <p className="text-sm text-gray-500">
              * Disclaimer: While we strive for 100% accuracy, network conditions can vary. This tool provides a diagnostic snapshot based on our server's connectivity to the target URL.
            </p>
          </article>
        </div>

        <div className="flex justify-center mt-8 pt-4 border-t border-indigo-500/30">
          <button 
            onClick={toggleExpansion}
            className="group relative px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isExpanded ? 'Read Less' : 'Read Full Guide'}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoArticle;
