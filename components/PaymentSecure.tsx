import React from 'react'

const PaymentSecure = () => {
  return (
    <section className='w-full bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
            <div className='text-heading2-bold'>Payment Security</div>

            <p className='p-5'>
            At Urban Home City, we prioritize the security of your payment information to ensure a safe and secure shopping experience. This Payment Security page outlines the measures we take to safeguard your payment data when you make purchases on our website.
            </p>

            <h3 className= 'text-body-bold p-5'>1. Secure Payment Processing</h3>

            <ul className='px-12 py-4'>
                <li>
                    1.1. Encryption: We use industry-standard encryption technology to protect your payment information during transmission. This encryption ensures that your credit card details, bank account information, and other sensitive data are securely transmitted over the internet.
                </li>
                <li>
                    1.2. Secure Sockets Layer (SSL): Our website employs SSL certificates to establish a secure connection between your browser and our servers. This encryption protocol prevents unauthorized access to your payment information by encrypting the data transmitted between your device and our website.
                </li>

            </ul>

            <h3 className= 'text-body-bold p-5'>2. Payment Methods</h3>

            <ul className='px-12 py-4'>
                <li>
                    2.1. Trusted Partners: We partner with reputable payment service providers to process payments securely. These partners comply with stringent security standards and adhere to industry best practices to safeguard your payment information.
                </li>
                <li>
                    2.2. Payment Options: We offer a variety of payment options to accommodate your preferences, including credit/debit cards, digital wallets, and other secure payment methods. You can select the payment method that is most convenient for you during checkout.
                </li>

            </ul>


            <h3 className= 'text-body-bold p-5'>3. Data Protection</h3>

            <ul className='px-12 py-4'>
                <li>
                    3.1. Limited Access: Only authorized personnel with a legitimate need to access payment information are granted permission to do so. We restrict access to your payment data to ensure that it is only accessed by individuals who require it to perform their duties.
                </li>
                <li>
                    3.2. Confidentiality: We maintain strict confidentiality regarding your payment information and do not share it with third parties for marketing or other purposes without your consent, except as required by law or to facilitate payment processing.
                </li>
            </ul>



            <h3 className= 'text-body-bold p-5'>4. Compliance</h3>

            <ul className='px-12 py-4'>
                <li>
                    4.1. PCI DSS Compliance: We comply with the Payment Card Industry Data Security Standard (PCI DSS) to ensure the secure handling of credit card information. Our adherence to PCI DSS standards helps prevent unauthorized access, fraud, and data breaches related to payment card data.
                </li>
                <li>
                    4.2. Regulatory Compliance: We adhere to applicable data protection laws and regulations governing the processing and protection of payment information, including the General Data Protection Regulation (GDPR) and other relevant legislation.
                </li>
            </ul>


            <h3 className= 'text-body-bold p-5'>5. Customer Support</h3>
            <ul className='px-12 py-4'>
                <li>
                5.1. Assistance: If you have any questions, concerns, or encounter any issues related to payment security, please contact our customer support team for assistance. We are committed to addressing your inquiries promptly and ensuring your peace of mind.
                </li>
                <p className='px-8'> Email: info@urbanhomecity.com</p>
                <p className='px-8'> Address: N.S Palya, BTM Layout, Bengaluru</p>
                
            </ul>

            <h3 className= 'text-body-bold p-5'>6. Policy Updates</h3>  
            <p className='px-8 py-3'>We reserve the right to update or modify this Payment Security Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised policy on our website.</p>


            <p className='px-8 py-3'>Your trust and confidence in Urban Home City are paramount to us, and we are dedicated to maintaining the highest standards of payment security to protect your sensitive information. If you have any questions or require further information about our payment security practices, please don&#39;t hesitate to contact us. Thank you for choosing Urban Home City!</p>


            
        </div>
    </section>
  )
}

export default PaymentSecure
