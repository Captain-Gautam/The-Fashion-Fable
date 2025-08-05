import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Image as ImageIcon } from 'lucide-react';

interface CourseGalleryProps {
  images: string[];
  buttonClassName?: string;
  icon?: boolean;
}

const CourseGallery = ({
  images,
  buttonClassName = 'btn-primary px-6 py-2 rounded-lg font-semibold mt-6',
  icon,
}: CourseGalleryProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={buttonClassName} onClick={() => setOpen(true)}>
        {icon && <ImageIcon className="h-5 w-5 mr-2" />} View Images
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        animation={{ swipe: 400 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};

export default CourseGallery;
