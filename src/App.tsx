/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { EventInfo } from './components/EventInfo';
import { Gallery } from './components/Gallery';
import { ActionButtons } from './components/ActionButtons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { ConfettiManager } from './components/ConfettiManager';
import { VideoSection } from './components/VideoSection';

export default function App() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-pink-200 selection:text-pink-900 leading-relaxed font-sans">
      <ConfettiManager />
      <FloatingElements />
      <FloatingActionButtons />
      <Hero />
      <VideoSection />
      <EventInfo />
      <Gallery />
      <ActionButtons />
      <Contact />
      <Footer />
    </main>
  );
}
