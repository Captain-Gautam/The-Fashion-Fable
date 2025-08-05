import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryLightboxProps {
  images: string[];
  open: boolean;
  onClose: () => void;
  startIndex?: number;
}

const GalleryLightbox = ({ images, open, onClose, startIndex = 0 }: GalleryLightboxProps) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={images.map((src) => ({ src }))}
      index={startIndex}
      animation={{ swipe: 400 }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
};

export default GalleryLightbox;
