import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, Star, Medal, Sparkles, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-amber-500" };
    switch (iconName) {
      case 'Trophy': return <Trophy {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Star': return <Star {...props} />;
      case 'Medal': return <Medal {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-xs font-bold text-amber-700">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Honors & <span className="text-[#F58220]">Achievements</span>
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto font-medium">
            Hackathon victories, industry certifications, and academic excellence recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 border border-stone-200/90 rounded-3xl p-6 space-y-5 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getAchievementIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200/80 text-xs font-bold text-amber-700">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-stone-900 text-base leading-snug group-hover:text-[#F58220] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600">
                    {item.issuer} · <span className="text-stone-500 font-normal">{item.date}</span>
                  </p>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Credential Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
