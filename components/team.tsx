import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mohit Srinivasan",
    role: "Lead Organizer",
    image: "/team/MOHIT_SRINIVASAN.webp"
  },
  {
    name: "Mohit Srinivasan",
    role: "Lead Organizer",
    image: "/team/MOHIT_SRINIVASAN.webp"
  },
  {
    name: "Mohit Srinivasan",
    role: "Lead Organizer",
    image: "/team/MOHIT_SRINIVASAN.webp"
  },
]

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

  return (
    <div className="mt-40 container mx-auto flex items-center justify-center flex-col py-8 gap-6">
      <h1 className="text-6xl text-center font-bold">Our Team</h1>
      <p className="mb-5 text-xl font-medium">{hoveredMember ? `${hoveredMember.name} (${hoveredMember.role})` : 'Organizing Team'}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[30rem]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center"
            onHoverStart={() => setHoveredMember(member)}
            onHoverEnd={() => setHoveredMember(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-32 h-32">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}