import React from 'react';
import ModalVideo from 'react-modal-video';

interface PlayProps {
  videoUrl: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const Play = (props: PlayProps) => {
  const { videoUrl, isOpen, setOpen } = props;
  return (
    <div>
      <ModalVideo
        channel="custom"
        url={videoUrl}
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Play;
