import { Photo } from "@/types/Photo";

interface Props {
  photo: Photo;
  onClick: () => void;
}

const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.path}`} className="w-full" />
    </div>
  );
};

export default PhotoItem;
