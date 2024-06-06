"use client";

import Modal from "@components/Modal";
import Image from "next/image";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

const ImageModal = ({ isOpen, onClose, src }: Props) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="image" src={src} className="object-contain" fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
