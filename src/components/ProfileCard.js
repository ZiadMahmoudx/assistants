function ProfileCard({ image, title, handle, description }) {
  return (
    <div>
      <img src={image} alt="Assistant Image" />
      <p>{title}</p>
      <p>{handle}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProfileCard
