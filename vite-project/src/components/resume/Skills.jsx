import React, { useEffect, useState } from 'react';

const skillsData = {
  designSkills: [
    { name: 'Photoshop', level: 100 },
    { name: 'Figma', level: 90 },
    { name: 'Adobe Illustrator', level: 83 },
  ],
  developmentSkills: [
    { name: 'React', level: 100 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 83 },
    { name: 'Firebase', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
  ],
};

const SkillBar = ({ name, level, animated }) => (
  <div className="flex items-center mb-6">
    <div className="w-48">{name}</div>
    <div className="flex-grow bg-gray-300 rounded-full h-6 mx-4 overflow-hidden">
      <div
        className={`bg-gradient-to-r from-pink-500 to-red-500 h-6 rounded-full transition-all duration-1000 ${animated ? 'scale-x-100' : 'scale-x-0'}`}
        style={{ width: `${level}%` }}
      />
    </div>
    <div className="text-right w-12 text-lg">{level}%</div>
  </div>
);

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-10 rounded-lg max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <h2 className="text-4xl text-center mb-8 text-pink-500 col-span-2">Features</h2>
      <div className="mb-6">
        <h3 className="text-2xl mb-4 text-pink-400">Design Skill</h3>
        {skillsData.designSkills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={animated} />
        ))}
      </div>
      <div>
        <h3 className="text-2xl mb-4 text-pink-400">Development Skill</h3>
        {skillsData.developmentSkills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={animated} />
        ))}
      </div>
    </div>
  );
};

export default Skills;