import { BsCalendar2Check } from 'react-icons/bs'
import PageHeader from '../../Components/PageHeader'
import './Portfolio.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import InlineLoader from '../../Components/Loaders'

const Portfolio = () => {
  const [previewImage, setPreviewImage] = useState('/images/Portfolio/Celebrities/Screenshot%202022-06-16%20133911.png');

  const productToggler = (event, close = false) => {
    const target = event.target

    if (close === true) {
      showProductPreview(false)
    } else if (target.getAttribute('src')) {
      const img = target.getAttribute('src');
      setPreviewImage(img)
      showProductPreview(true)
    } else if (target.closest('.modal') === null) {
      showProductPreview(false)
    }
  }

  const showProductPreview = async (action) => {
    if (action === true) {
      document.querySelector('.product-preview').classList.remove('hidden')
    } else {
      document.querySelector('.product-preview').classList.add('hidden')
    }
  }

  const [companies, setCompanies] = useState(null)

  useEffect(() => {

    const getPortfolio = async () => {
      const data = await axios.get('/resources/portfolio.json')
      setCompanies(() => data.data)
    }

    getPortfolio()

  }, [])

  const toggleCompany = (event) => {
    event.target.parentNode.closest('.portfolio__container__company-wrapper').querySelector('.portfolio__container__company__products-wrapper').classList.toggle('hidden')
    event.target.parentNode.closest('.portfolio__container__company-wrapper').querySelector('.before').classList.toggle('inactive')
  }

  useEffect(() => {

    const observer = (target, addClass) => {

      const execute = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add(addClass);
          }
        });
      })
      execute.observe(target)

    };

    Array.from(document.querySelectorAll('.company-vertical-line')).forEach((node) => {
      observer(node, 'company-animate');
    })

    Array.from(document.querySelectorAll('.product-vertical-line')).forEach((node) => {
      observer(node, 'product-animate');
    })

  })

  return (
    <main id="portfolio" className="portfolio">
      <PageHeader pageTitle="My Portfolio" icon={<BsCalendar2Check size={30} />} />
      <div className="portfolio__container">

        {companies !== null ? (companies.map((company, i) => (
          <div className="portfolio__container__company-wrapper addhere" key={i}>

            <div className="portfolio__container__company">
              <h2 onClick={(e) => toggleCompany(e)} className="heading">
                <div className="before"></div>
                <span className="title">{company.role}</span>
                <span className="timeline-p">{company.start} - {company.end}</span>
              </h2>
              <h3 className="sub-heading"><span>{company.name}</span></h3>
              <div className="company-vertical-line"></div>
              <div className="portfolio__container__company__products-wrapper">
                <div className="product-vertical-line"></div>
                <div className="portfolio__container__company__products">
                  <div className="before"></div>
                  {company.products.map((product, j) => (
                    <div className="portfolio__container__company__products__product" key={j}>
                      <h4 className="heading">
                        <span className="title">{product.name}</span>
                        <span className="timeline-p">{product.start} - {product.end}</span>
                        </h4>
                      <div className="product-url"><a className='link' href={product.url} target="_blank" rel="noreferrer">{product.url}</a></div>
                      <div className="content">
                        <div className="description">
                          <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                        <div className="screenshots">
                          {product.images.map((image, k) => (
                            <div className="screenshot-wrapper" key={k}>
                              <div className="screenshot">
                                <div className="overlay-text">
                                  <span>Preview</span>
                                </div>
                                <img onClick={(e) => productToggler(e)} src={image} alt="" />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="product-outcome">
                          <div dangerouslySetInnerHTML={{ __html: product.outcome }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))) : <InlineLoader text="Loading..." />}

        <div className="product-preview hidden">
          <div className="product-preview__wrapper" onClick={(e) => productToggler(e)}>
            <div className="modal">
              <div className="close" title="Close" onClick={(e) => productToggler(e, true)}><span>X</span></div>
              <div className="content">
                <img src={previewImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Portfolio