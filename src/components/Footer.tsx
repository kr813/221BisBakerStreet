import React from 'react';
import { Github, Heart, Compass, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090c] border-t border-[#c99a4e]/20 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#c99a4e] flex items-center justify-center text-black font-bold font-cinzel text-xs">
                221B
              </div>
              <span className="text-lg font-bold font-cinzel text-white">221B Baker Street</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              シャーロック・ホームズ作中行動年表・原典ソース証明・AI対話＆演繹推理を搭載したポータルサイト。
            </p>
            <div className="text-[11px] text-[#c99a4e] font-serif-custom italic">
              "The game is afoot!" — Arthur Conan Doyle
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              データ＆技術構成 (Tech Stack)
            </h4>
            <ul className="text-xs space-y-1.5 text-gray-400">
              <li>• Canon of Sherlock Holmes (全60作品完全検証データ)</li>
              <li>• React 18 / TypeScript / Vite / Tailwind CSS</li>
              <li>• AI Agent Skill Protocol & Deduction Engine</li>
              <li>• Hosted on GitHub Pages</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              GitHub Repository & Open Source
            </h4>
            <p className="text-xs text-gray-400">
              本プロジェクトのソースコードはGitHubにて公開されています。
            </p>
            <a
              href="https://github.com/kr813/221BisBakerStreet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/60 hover:bg-[#c99a4e]/20 border border-[#c99a4e]/30 text-xs font-medium text-white transition-colors"
            >
              <Github className="w-4 h-4 text-[#c99a4e]" />
              <span>kr813 / 221BisBakerStreet</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} 221BisBakerStreet Portal. Built with AI Skill Architecture.
          </div>
          <div className="flex items-center space-x-4">
            <span>Hosted on GitHub Pages</span>
            <span>•</span>
            <a href="https://github.com/kr813/221BisBakerStreet" className="hover:text-[#c99a4e]">Repository</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
