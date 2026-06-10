interface SectionHeaderProps {
  overline: string;
  headline: string;
  subtext?: string;
}

export default function SectionHeader({ overline, headline, subtext }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className="text-xs font-bold uppercase tracking-overline text-teal mb-3">
        {overline}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-headline mb-4 text-gray-900 dark:text-white">
        {headline}
      </h2>
      {subtext && (
        <p className="text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          {subtext}
        </p>
      )}
    </div>
  );
}
