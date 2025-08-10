type Props = {
  title: string;
  imageUrl?: string;
};

export function LoadingScreen({ title, imageUrl }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-[--color-sand]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[--color-forest]" />
        )}
        <div className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-white/10 mix-blend-overlay" />
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Loading
        </p>
        <h2 className="mt-1 text-2xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
}
