import {Navbar} from '@/components/layout/navbar';
import {Header} from '@/components/layout/header';
import {ScrollArea} from '@/components/ui/scroll-area';
import {About} from '@/components/sections/about';
import {Experience} from '@/components/sections/experience';
import {Projects} from '@/components/sections/projects';
import {Education} from '@/components/sections/education';

export default function Home() {
  return (
    <div className="w-svw min-h-svh">
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row">
        <Header />
        <main className="flex-1 xl:h-svh">
          <ScrollArea className="h-full">
            <div className="w-full lg:max-w-[750px] mx-auto pb-16 px-6">
              <About />
              <Experience />
              <Projects />
              <Education />
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
