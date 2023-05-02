interface Props {
  image: any;
}

const MiniCard = ({ image }: Props) => {
  return (
    <div className="card shadow">
      <img className="card-img img-responsive mx-auto" src={image} alt="card-image" />
    </div>
  );
};

export default MiniCard;
