import React from 'react';
import { services } from '../data';
import { Brain, Layers, Network, Server } from 'lucide-react';

const iconMap = {
  automation: Brain,
  rga: Network,
  llm: Layers,
  scalable: Server,
};

const Services = () => {
  return (
    <section id="services" className="relative py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We turn complex ideas into production-ready products using modern AI and engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Brain;
            return (
              <div
                key={svc.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400">Service</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{svc.description}</p>
                {svc.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
