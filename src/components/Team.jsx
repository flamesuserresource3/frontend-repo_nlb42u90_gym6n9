import React from 'react';
import { team } from '../data';
import { ArrowUpRight, User } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            A compact, high‑velocity team shipping AI‑first products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="h-14 w-14 rounded-full object-cover" />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-7 w-7 text-gray-400" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              {member.bio ? <p className="mt-4 text-sm text-gray-600">{member.bio}</p> : null}

              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2 text-xs text-gray-500">
                  {member.skills?.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full bg-gray-100 px-2 py-1">{s}</span>
                  ))}
                </div>
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                  >
                    Portfolio <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
