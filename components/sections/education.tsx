import {EDUCATION, LINKS} from '@/lib/constants';
import Image from 'next/image';

export const Education = () => {
  return (
    <section id={LINKS[3].href.replace('#', '')} className="pt-16">
      <h2 className="font-semibold text-2xl">Education</h2>

      <div className="mt-12 space-y-10">
        {EDUCATION.map((education, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-14 h-14 bg-white rounded-xl overflow-hidden p-1.5">
              <Image
                src={education.logo}
                alt={education.school}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-muted-foreground">
                <span>{education.start_date}</span>{' '}
                <span>- {education.end_date}</span>
              </p>
              <div className="flex items-center flex-wrap gap-4 gap-y-1 mt-1.5">
                <h3 className="font-semibold text-lg flex items-center flex-wrap gap-2">
                  <span>{education.course}</span>
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <span>{education.school}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
