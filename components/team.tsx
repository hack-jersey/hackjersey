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
    name: "Malav Patel",
    role: "Lead Organizer",
    image: "/team/MALAV_PATEL.png"
  },
  {
    name: "Alexander Masin",
    role: "Logistics and Operations Lead",
    image: "/team/ALEXANDER_MASIN.jpg"
  },
  {
    name: "Ayushmaan Mukherjee",
    role: "Marketing Lead",
    image: "/team/AYUSHMAAN_MUKHERJEE.webp"
  },
]

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

  return (
    <div className="mt-40 container mx-auto flex items-center justify-center flex-col py-8 gap-6">
      <h1 className="text-6xl text-center font-bold">Our Team</h1>
      <p className="mb-5 text-xl font-medium">{hoveredMember ? `${hoveredMember.name} (${hoveredMember.role})` : 'Organizing Team'}</p>
      <div className="grid grid-cols-1 gap-4 items-center justify-center md:gap-none md:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
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