'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '@/content/profile';
import { StringDivider } from './ui/StringDivider';

export function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 sunburst-bg' aria-hidden />
      <div
        className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]'
        aria-hidden
      />

      <div className='relative z-10 mx-auto max-w-4xl px-6 text-center'>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='font-mono text-xs uppercase tracking-[0.3em] text-cream/80'>
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className='mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-light text-cream leading-[1.02] tracking-tight'>
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='mt-5 font-display italic text-lg sm:text-xl text-cream'>
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className='mt-6 max-w-xl mx-auto text-cream/85 text-base sm:text-lg leading-relaxed'>
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className='mt-10 flex items-center justify-center gap-4 flex-wrap'>
          <a
            href='#projects'
            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-rosewood font-mono text-xs uppercase tracking-widest shadow-chrome hover:bg-butterscotch transition-colors'>
            See work <ArrowDown className='w-3.5 h-3.5' />
          </a>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cream/40 text-cream font-mono text-xs uppercase tracking-widest hover:bg-cream/10 transition-colors'>
            Get in touch <Mail className='w-3.5 h-3.5' />
          </a>
        </motion.div>
      </div>

      <div className='absolute bottom-8 left-0 right-0 px-6 z-10'>
        <StringDivider tone='light' className='max-w-5xl mx-auto opacity-70' />
      </div>
    </section>
  );
}
