import Image from "next/image"

const Logotype = () => {
  return (
    <div className='flex justify-center'>
      <Image src='/ovako-logotype.png' alt='Logotype' width={110} height={30} />
    </div>
  )
}

export default Logotype
