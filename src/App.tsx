import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { SourceCatalog } from './components/SourceCatalog';
import { AIWatsonAssistant } from './components/AIWatsonAssistant';
import { AIDeductionLab } from './components/AIDeductionLab';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'sources' | 'watson' | 'deduction'>('timeline');
  const [highlightTimelineId, setHighlightTimelineId] = useState<string | null>(null);

  // Navigate to Timeline and scroll to targeted card
  const handleNavigateToTimeline = (timelineId: string) => {
    setActiveTab('timeline');
    setHighlightTimelineId(timelineId);

    setTimeout(() => {
      const el = document.getElementById(timelineId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-gray-200">
      
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Show Hero banner on timeline home */}
        {activeTab === 'timeline' && (
          <Hero onNavigate={(tab) => setActiveTab(tab)} />
        )}

        {/* Tab 1: Timeline Section */}
        {activeTab === 'timeline' && (
          <TimelineSection highlightId={highlightTimelineId} />
        )}

        {/* Tab 2: Primary Sources Catalog */}
        {activeTab === 'sources' && (
          <SourceCatalog onSelectTimelineItem={handleNavigateToTimeline} />
        )}

        {/* Tab 3: AI Watson Assistant Chat */}
        {activeTab === 'watson' && (
          <AIWatsonAssistant onNavigateTimeline={handleNavigateToTimeline} />
        )}

        {/* Tab 4: AI Deduction Lab */}
        {activeTab === 'deduction' && (
          <AIDeductionLab onNavigateTimeline={handleNavigateToTimeline} />
        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
