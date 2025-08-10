import { useEffect, useMemo, useState, type SVGProps } from 'react';
import { Mail, ExternalLink, Download, Linkedin } from 'lucide-react';
import { BrandIcon } from './components/BrandIcon';
import { siYoutube, siInstagram, siGithub } from 'simple-icons/icons';
import { profile } from './profile';
import { buildVCardAndDownload } from './utils/vcard';
import { LoadingScreen } from './components/LoadingScreen';
import { IconLinkButton } from './components/IconLinkButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1300);
    return () => clearTimeout(timeout);
  }, []);

  const orderedLinks = useMemo(() => {
    return [...profile.links].sort((a, b) => a.order - b.order);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center warp-tunnel">
        <LoadingScreen
          title={profile.title}
          imageUrl={profile.profileImageUrl}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <main className="mx-auto max-w-md glass-card rounded-3xl p-6 sm:p-8">
        <header className="text-center">
          <div className="mx-auto mb-4 h-28 w-28 rounded-full ring-4 ring-[var(--color-indigo)] ring-offset-2 ring-offset-[var(--color-forest)] overflow-hidden shadow-xl">
            {profile.profileImageUrl ? (
              <img
                src={profile.profileImageUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full grid place-content-center bg-[var(--color-forest)]">
                <span className="text-3xl font-semibold text-[var(--color-sand)]">
                  {profile.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-sand)]">
            {profile.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-300">{profile.introduction}</p>
        </header>

        <section className="mt-6 space-y-3">
          {orderedLinks.map((link) => {
            const common = {
              key: link.id,
              href: link.url,
              subtitle: link.subtitle,
            };

            if (link.kind === 'email') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<Mail className="h-5 w-5" />}
                  className="bg-[var(--color-indigo)] hover:bg-[var(--color-steel)] text-white"
                />
              );
            }
            if (link.kind === 'youtube') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<BrandIcon icon={siYoutube} className="h-5 w-5" />}
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white"
                />
              );
            }
            if (link.kind === 'x') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<XLogo className="h-5 w-5" />}
                  className="bg-[var(--color-dark)] hover:bg-[var(--color-forest)] text-white border border-white/10"
                />
              );
            }
            if (link.kind === 'linkedin') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<Linkedin className="h-5 w-5 shrink-0" />}
                  className="bg-[#0A66C2] hover:bg-[#095aa8] text-white"
                />
              );
            }
            if (link.kind === 'instagram') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<BrandIcon icon={siInstagram} className="h-5 w-5" />}
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 text-white"
                />
              );
            }
            if (link.kind === 'github') {
              return (
                <IconLinkButton
                  {...common}
                  label={link.label}
                  icon={<BrandIcon icon={siGithub} className="h-5 w-5" />}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white"
                />
              );
            }
            return (
              <IconLinkButton
                {...common}
                label={link.label}
                icon={<ExternalLink className="h-5 w-5" />}
                className="bg-[var(--color-forest)] hover:bg-zinc-800 text-white"
              />
            );
          })}
        </section>

        <section className="mt-6">
          <button
            className="w-full btn-shine focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-green)] px-4 py-3 font-semibold text-black transition-transform hover:scale-[1.01] active:scale-[0.99]"
            onClick={() => buildVCardAndDownload(profile)}
          >
            <Download className="h-5 w-5" /> Download Contact (vCard)
          </button>
        </section>
      </main>
    </div>
  );
}

function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.5 7.432L22 22h-6.828l-4.78-6.21L4.8 22H2l7.04-8.045L2 2h6.915l4.34 5.747L18.244 2Zm-2.392 18h1.659L7.23 4h-1.66l10.282 16Z" />
    </svg>
  );
}

export default App;
