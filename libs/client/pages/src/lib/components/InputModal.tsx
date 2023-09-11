import { useRef, useState } from 'react';
import UserAvatar from '../images/person.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type myFormData = {
  name: string;
  expertise: string;
  experience: number;
  //   image?: string;
};

export const Inputmodal = ({
  editData,
  setData,
}: {
  editData: boolean;
  setData: (value: boolean) => void;
}) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    expertise: yup.string().min(3).required(),
    experience: yup.number().required(),
    // image: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<myFormData>({ resolver: yupResolver(schema) });

  const handleData = (data: myFormData) => {
    console.log(data);
    reset();
    setData(false);
    toast.success('Consultant Data Edited', {
      position: 'top-left',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-[15px] gap-[20px]">
      <ToastContainer />
      <div className="text-l font-semibold text-[#042F48] text-center mt-8">
        Edit Consultant
      </div>
      <div className="flex flex-col items-center gap-1">
        <div
          className="border-2  overflow-hidden flex items-center justify-center rounded-[50%] h-20 w-20 "
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
          //   {...register('image')}
        />
        <div className="text-[#B7E2FB]">Upload Picture</div>

        <span className="text-[10px] text-center">
          *Note photo should be less than 2mb and should be in jpeg or png
          format
        </span>
      </div>
      <form onSubmit={handleSubmit(handleData)}>
        <div className="flex flex-col gap-6">
          <div className="flex gap-1 flex-col">
            <label
              htmlFor="nameInput"
              className="text-[16px] font-normal text-[#042F48]"
            >
              Name
            </label>
            <input
              className="w-[343px] h-[40px] border-[#C5C5C5] border-[1px] border-solid rounded px-3"
              placeholder="Name"
              {...register('name')}
              id="nameInput"
            />
            <p className="text-[14px] text-red-600">{errors?.name?.message}</p>
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="nameInput" className="text-[16px] text-[#042F48]">
              Expertise
            </label>
            <input
              className="w-[343px] h-[40px] border-[#C5C5C5] border-[1px] border-solid rounded px-3"
              placeholder="Select Expertise"
              {...register('expertise')}
              id="nameInput"
            />
            <p className="text-[14px] text-red-600">
              {errors?.expertise?.message}
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="nameInput" className="text-[16px] text-[#042F48]">
              Experience
            </label>
            <input
              className="w-[343px] h-[40px] border-[#C5C5C5] border-[1px] border-solid rounded px-3"
              placeholder="Experience in years"
              {...register('experience')}
              id="nameInput"
            />
            <p className="text-[14px] text-red-600">
              {errors?.experience?.message}
            </p>
          </div>
        </div>

        <div className="flex gap-1 mt-[4px]">
          <button
            type="submit"
            className="w-[170px] h-[40px] bg-[#074E78] text-white font-semibold border-[#074E78] border-[1px] border-solid rounded"
            // onClick={() => {
            //   setData(false);
            // }}
            // onClick={() => setData(false)}
          >
            Confirm
          </button>
          <button
            className="w-[170px] h-[40px] bg-white text-[#074E78] font-semibold border-[#074E78] border-[1px] border-solid rounded"
            onClick={() => {
              setData(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
