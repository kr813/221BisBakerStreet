import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-[#86868b] py-12 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#1c1c1e] border border-white/20 flex items-center justify-center text-white text-[10px] font-serif">
                221B
              </div>
              <span className="text-sm font-semibold text-white">221B Baker Street</span>
            </div>
            <p className="text-xs text-[#86868b]">
              221B Baker Street Archive.
            </p>
            <div className="text-[11px] text-[#86868b] italic">
              "The game is afoot!" — Arthur Conan Doyle
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              技術仕様
            </h4>
            <ul className="space-y-1 text-[#86868b]">
              <li>• Canon of Sherlock Holmes (全60作品ソース照合)</li>
              <li>• React 18 / TypeScript 5 / Vite / Tailwind CSS</li>
              <li>• Apple Minimal Design System</li>
              <li>• Hosted on GitHub Pages</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              GitHub Repository
            </h4>
            <p className="text-[#86868b]">
              オープンソースリポジトリにてコードを公開しています。
            </p>
            <a
              href="https://github.com/kr813/221BisBakerStreet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1c1c1e] hover:bg-[#2c2c2e] border border-white/10 text-xs text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>kr813 / 221BisBakerStreet</span>
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[#86868b] gap-4">
          <div>
            Copyright © {new Date().getFullYear()} 221BisBakerStreet Portal. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Hosted on GitHub Pages</span>
            <span>•</span>
            <a href="https://github.com/kr813/221BisBakerStreet" className="hover:text-white">Repository</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
