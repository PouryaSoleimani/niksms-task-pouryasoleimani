import Image from 'next/image'

const UserPlus = ({ className }: { className?: string }) => {
  return (
    <Image src={'/icons/UserPlus.png'} width={50} height={50} alt='user-plus' className={className} />
  )
}

export default UserPlus