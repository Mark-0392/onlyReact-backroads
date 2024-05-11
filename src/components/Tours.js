import Title from './title'
import { tourCards } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featrued" subTitle="tours" />

      <div className="section-center featured-center">
        {tourCards.map((tourcard) => {
          const {
            id,
            img,
            alt,
            date,
            tourTitle,
            description,
            mapIcon,
            place,
            days,
            price,
          } = tourcard
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={alt} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tourTitle}</h4>
                </div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={mapIcon}></i>
                    </span>
                    {place}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
