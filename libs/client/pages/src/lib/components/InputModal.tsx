import React, { useRef, useState } from 'react';
import UserAvatar from '../lib/images/person.svg';

interface Props {
  title: string;
}

export const InputModal: React.FC<Props> = ({ title }) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  // const [selectedFile, setSelectedFile] = useState();

  const handleImageUpload = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  return (
    <div>
      <div>
        <div className="text-l">{title}</div>
        <div className="">
          <div
            className="border-2 overflow-hidden rounded-[50%] h-20 w-20 "
            onClick={() => {
              imgInput.current?.click();
            }}
          >
            <img
              src={preview ? preview : UserAvatar}
              alt="user-avatar"
              className="rounded-[50%]"
            />
          </div>
          <input
            type="file"
            ref={imgInput}
            className="hidden"
            onChange={handleImageUpload}
          />
          <div className="text-[#B7E2FB]">Upload Picture</div>
        </div>
        <span>
          *Note photo should be less than 2mb and should be in jpeg or png
          format
        </span>

        <div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="nameInput">Name</label>
            <input placeholder="Name" id="nameInput" />
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="nameInput">Expertise</label>
            <input placeholder="Select Expertise" id="nameInput" />
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="nameInput">Experience</label>
            <input placeholder="Experience in years" id="nameInput" />
          </div>
        </div>

        <div className="flex gap-2">
          <button>Confirm</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};
