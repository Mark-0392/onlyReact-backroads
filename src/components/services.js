import Title from './title'
import { services } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, serviceTitle, description } = service
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serviceTitle}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
