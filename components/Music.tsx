import { SectionHeader } from './SectionHeader';
import { fetchMusic } from '@/lib/queries';
import { FretMarker } from './ui/FretMarker';
import { Reveal } from './ui/Reveal';


export async function Music() {
  const music = await fetchMusic();
  const rotation = music?.rotation ?? [];
  const gear = music?.gear ?? [];
  const spotifyEmbed = music?.spotifyEmbedUrl ?? null;
  return (
    <section
      id='music'
      className='relative py-24 px-6 bg-[#f0e4d1] overflow-hidden'>
      <div
        className='absolute inset-0 bg-wood-grain opacity-[0.06] pointer-events-none'
        aria-hidden
      />

      <Reveal className='relative mx-auto max-w-5xl'>
        <SectionHeader eyebrow='Music' title="What's spinning." />

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='flex items-center gap-2 mb-5'>
              <FretMarker variant='double' size='sm' />
              <h3 className='font-mono text-[11px] uppercase tracking-[0.25em] text-rosewood/70'>
                In rotation
              </h3>
            </div>
            <ul className='space-y-3'>
              {rotation.map((r: { artist: string; album: string; year: number }) => (
                <li
                  key={`${r.artist}-${r.album}`}
                  className='flex items-baseline gap-3 text-rosewood'>
                  <span className='font-display italic text-lg'>
                    {r.artist}
                  </span>
                  <span className='text-rosewood/40'>·</span>
                  <span className='text-rosewood/80'>{r.album}</span>
                  <span className='ml-auto font-mono text-[10px] text-rosewood/50'>
                    {r.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className='flex items-center gap-2 mb-5'>
              <FretMarker variant='double' size='sm' />
              <h3 className='font-mono text-[11px] uppercase tracking-[0.25em] text-rosewood/70'>
                Gear
              </h3>
            </div>
            <ul className='space-y-3'>
              {gear.map((g: { name: string; note?: string }) => (
                <li key={g.name} className='text-rosewood'>
                  <span className='font-display text-lg'>{g.name}</span>
                  {g.note && (
                    <span className='text-rosewood/60 text-sm ml-2 italic'>
                      — {g.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {spotifyEmbed && (
          <div className='mt-12 rounded-xl overflow-hidden shadow-pickguard'>
            <iframe
              src={spotifyEmbed}
              width='100%'
              height='152'
              allow='encrypted-media'
              loading='lazy'
              title='Spotify playlist'
            />
          </div>
        )}
      </Reveal>
    </section>
  );
}
