import React from 'react';
import { volunteeringData } from '../data/portfolioData';
import { Heart, Calendar, CheckCircle } from 'lucide-react';

export const Volunteering: React.FC = () => {
  return (
    <section id="volunteering" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-xs font-bold text-rose-700">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Community Contribution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Volunteering & <span className="text-[#F58220]">Leadership</span>
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto font-medium">
            Giving back to the tech community through mentoring, open-source initiatives, and education workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringData.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-bold text-stone-600">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-stone-900 group-hover:text-[#F58220] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-orange-600 font-bold text-sm mt-0.5">{item.organization}</p>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {item.impactMetrics && item.impactMetrics.length > 0 && (
                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-500 block">Key Impact:</span>
                  <ul className="space-y-1.5">
                    {item.impactMetrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
