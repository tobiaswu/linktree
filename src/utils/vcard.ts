import type { Profile } from '../profile';

export function buildVCard(profile: Profile): string {
  const lines: string[] = [];
  lines.push('BEGIN:VCARD');
  lines.push('VERSION:3.0');
  const [lastName, ...rest] = profile.name.split(' ').reverse();
  const firstName = rest.reverse().join(' ');
  lines.push(`N:${lastName || ''};${firstName || ''};;;`);
  lines.push(`FN:${profile.name}`);
  lines.push(`TITLE:${escapeText("AI Strategist | Developer | Software with AI")}`);
  if (profile.email) {
    lines.push(`EMAIL;TYPE=INTERNET:${profile.email}`);
  }
  for (const link of profile.links) {
    if (link.kind === 'email') continue;
    lines.push(`URL:${link.url}`);
  }
  lines.push('END:VCARD');
  return lines.join('\n');
}

export function buildVCardAndDownload(profile: Profile): void {
  const vcf = buildVCard(profile);
  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slugify(profile.name)}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function escapeText(value: string): string {
  return value.replace(/[,;]/g, (m) => `\\${m}`);
}
