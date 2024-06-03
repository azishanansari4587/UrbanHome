import React from 'react'
import Referral from './Referral'
import CustomerSup from './CustomerSup'
import ContactLogo from './ContactLogo'

const ContactMap = () => {
  return (
    <div className=''>
      <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d31112.369717088208!2d77.5939704!3d12.9047499!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.91188!2d77.6192442!4m5!1s0x3bae14e1788bbba1%3A0x5bea0bbc158931a6!2sUrban%20Home%20City%2C%2019%2C%2013th%20Main%20Rd%2C%20near%20SNN%20RAJ%20LAKEVIEW%2C%20NS%20Palya%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!3m2!1d12.905386799999999!2d77.610148!5e0!3m2!1sen!2sin!4v1715241525906!5m2!1sen!2sin" loading="lazy" className='aspect-[3/2] w-full rounded-lg  object-fill lg:aspect-auto lg:h-[800px] lg:object-center py-4'></iframe>
      <ContactLogo/>
      <CustomerSup/>
      <Referral/>
    </div>
  )
}

export default ContactMap


