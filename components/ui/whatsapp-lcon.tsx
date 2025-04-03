import Image from 'next/image'
import Link from 'next/link'

const WhatsappIcon = () => {
  return (
    <Link
      href={"https://wa.me/+97145533128?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services.%20Please%20call%20me%20back.%20Thanks"}
      target='_blank'
      className="cursor-pointer w-20 h-20 flex items-center">
      <Image src="/images/whatsapp.png" alt="Whatsapp" width={100} height={100} className="w-7 h-7" />
    </Link>
  )
}

export default WhatsappIcon