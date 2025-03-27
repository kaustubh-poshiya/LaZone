import Image from "next/image"

type TeamMemberProps = {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-serif mb-1">{name}</h3>
      <p className="text-sm text-neutral-500 mb-3">{role}</p>
      <p className="text-sm text-neutral-700">{bio}</p>
    </div>
  )
}

