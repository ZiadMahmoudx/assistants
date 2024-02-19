function ProfileCard({ image, title, handle, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Assistant" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p>{title}</p>
            <p>{handle}</p>
          </div>
        </div>

        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
