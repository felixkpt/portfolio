import { BsTelephone } from 'react-icons/bs'
import PageHeader from '../../Components/PageHeader'
import './Contact.scss'
import ContactComponent from '../../Components/Contact/Contact'

const Contact = () => {
  
  return (
    <main id="contact">
      <PageHeader pageTitle="Contact me" icon={<BsTelephone size={30} />} />
      <ContactComponent />
    </main>
  )
}

export default Contact