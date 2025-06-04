import { SKILLS_DATA } from '@/lib/constants';
import type { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { Icon } = skill;
  
  // Determine proficiency bar color and width
  let proficiencyWidth = 'w-0';
  let proficiencyColor = 'bg-muted';

  switch (skill.level) {
    case 'Beginner':
      proficiencyWidth = 'w-1/4';
      proficiencyColor = 'bg-red-500'; // Example colors, can be themed
      break;
    case 'Intermediate':
      proficiencyWidth = 'w-1/2';
      proficiencyColor = 'bg-yellow-500';
      break;
    case 'Advanced':
      proficiencyWidth = 'w-3/4';
      proficiencyColor = 'bg-green-500';
      break;
    case 'Expert':
      proficiencyWidth = 'w-full';
      proficiencyColor = 'bg-primary'; // Use primary theme color for expert
      break;
  }


  return (
    <div className="group flex flex-col items-center p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/10 hover:shadow-lg">
      {Icon && <Icon className="h-10 w-10 mb-3 text-primary transition-transform duration-300 group-hover:scale-110" />}
      <h4 className="text-md font-semibold mb-1 text-center font-sans">{skill.name}</h4>
      <Badge variant="secondary" className="text-xs mb-2">{skill.level}</Badge>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${proficiencyColor} ${proficiencyWidth} transition-all duration-500 ease-out`}></div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const categories = ['Programming', 'UI/UX Design', 'Tools & Platforms'] as const;

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span> & <span className="text-accent">Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                  {SKILLS_DATA.filter(skill => skill.category === category).map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
