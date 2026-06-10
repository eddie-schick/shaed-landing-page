import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  initials: string;
  photo_url: string | null;
  bio_1: string;
  bio_2: string;
  bio_3: string;
  linkedin: string | null;
  display_order: number;
}

function TeamCard({ member, inView, delay }: { member: TeamMember; inView: boolean; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group bg-off-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col transition-all duration-500 hover:border-teal-200 dark:hover:border-teal-800 hover:bg-teal-50/30 dark:hover:bg-teal-900/20"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {member.photo_url ? (
        <div className="w-16 h-16 rounded-full mb-4 overflow-hidden bg-gray-100 dark:bg-gray-700 ring-2 ring-teal/10">
          <img
            src={member.photo_url}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-4 ring-2 ring-teal/10">
          <span className="text-lg font-bold text-teal">{member.initials}</span>
        </div>
      )}

      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold dark:text-white">{member.name}</h3>
          <p className="text-sm text-teal font-medium">{member.title}</p>
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-teal/10 transition-colors shrink-0 ml-3"
          >
            <Linkedin className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal transition-colors" />
          </a>
        )}
      </div>

      <div className="mt-2 flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{member.bio_1}</p>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{member.bio_2}</p>
          <p className="text-sm text-gray-500 leading-relaxed mt-3">{member.bio_3}</p>
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-xs font-semibold text-teal hover:text-teal/80 transition-colors self-start"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}

type FetchStatus = 'loading' | 'ready' | 'error';

export default function Team() {
  const { ref, inView } = useInView(0.15);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [status, setStatus] = useState<FetchStatus>('loading');

  useEffect(() => {
    async function fetchTeam() {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        setStatus('error');
      } else {
        setMembers(data ?? []);
        setStatus('ready');
      }
    }
    fetchTeam();
  }, []);

  return (
    <section id="team" className="bg-off-white dark:bg-gray-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="The Team"
          headline="Experts building for experts."
          subtext="Industry veterans and technologists with decades of commercial vehicle and technology experience."
        />

        {status === 'loading' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-off-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 animate-pulse"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : status === 'error' ? (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">Unable to load team members. Please refresh the page.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m, i) => (
              <TeamCard key={m.id} member={m} inView={inView} delay={i * 120} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
