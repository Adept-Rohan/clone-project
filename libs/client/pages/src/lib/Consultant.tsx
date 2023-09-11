import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Search from '../lib/images/search.svg';
import Add from '../lib/images/add.png';
import myData from '../lib/constant/data.json';
import Frame29 from '../lib/images/Frame296.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Edit from '../lib/images/edit.svg';
import Delete from '../lib/images/delete.svg';

import Cancel from '../lib/images/Vector.svg';
import { Inputmodal } from './components/InputModal';

import Modal from 'react-modal';
import { CustomModalStyles } from '..';

type Person = {
  id: number;
  name: string;
  expertise: string;
  image: string;
  experience: string;
  action?: string;
};

export const Consultant: React.FC = () => {
  const dummyData = myData;

  const [data, setData] = useState<Person[]>([...dummyData]);

  const ImageHeaderCell = () => (
    <div className="flex justify-center">
      <img src={Frame29} alt="" />
    </div>
  );

  const ActBtns = () => (
    <div className="flex justify-center gap-1">
      <button
        className="bg-[#37BE5F] rounded p-2"
        onClick={() => {
          setOpenEditPopup(true);
        }}
      >
        <img src={Edit} alt="edit-icon" />
      </button>
      <button
        onClick={() => setOpenDeletePopUp(true)}
        className="bg-[#DC362E] rounded p-2"
      >
        <img src={Delete} alt="edit-icon" />
      </button>
    </div>
  );

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor('id', {
      header: 'S.No',
    }),
    columnHelper.accessor('image', {
      header: 'Image',
      cell: ImageHeaderCell,
    }),
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('expertise', {
      header: 'Expertise',
    }),
    columnHelper.accessor('experience', {
      header: 'Experience',
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      cell: () => ActBtns(),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(), // Corrected typo here
  });

  const handleChange = () => {
    table.nextPage();
  };

  const [openEditPopup, setOpenEditPopup] = useState(false);

  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);

  return (
    <>
      <Modal
        isOpen={openEditPopup}
        style={CustomModalStyles}
        onRequestClose={() => {
          setOpenEditPopup(false);
        }}
      >
        <Inputmodal editData={openEditPopup} setData={setOpenEditPopup} />
      </Modal>

      <Modal
        onRequestClose={() => setOpenDeletePopUp(false)}
        isOpen={openDeletePopUp}
        style={CustomModalStyles}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center">
            <img src={Cancel} alt="cancle" />
          </div>
          <div>
            <div className="text-xl text-center">Delete Cosultant</div>
          </div>
          <div className="w-[399px] h-[36px]  text-center text-[12px]">
            Are you sure you want to delete this item? This action is
            irreversible, and you won't be able to recover it.
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <button
              onClick={() => setOpenDeletePopUp(false)}
              className="w-[194px] h-[40px] bg-[#DC362E] font-semibold rounded text-white"
            >
              Confirm
            </button>
            <button
              onClick={() => setOpenDeletePopUp(false)}
              className="w-[194px] h-[40px] bg-white text-[#074E78] font-semibold border-[#074E78] border-[1px] border-solid rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <div
        style={{
          background:
            'radial-gradient(257.93% 101.44% at 77.85% 63.95%, #B7E2FB 0%, #E7F5FE 100%), var(--100, #FFF)',
        }}
        className="h-full w-[1217px]"
      >
        <div className="w-[1000px] relative h-[590px] mt-[20px] ml-[20px] bg-[#FFF] flex-shrink-0 rounded-lg">
          <div className="w-full h-[76px] px-[20px] flex items-center justify-between">
            <h1 className="text-[#074E78] text-base">Consultant</h1>
            <div className="flex relative">
              <input
                className="w-[287px] h-[32px] text-[#C5C5C5] border-solid border-[2px] focus:outline-blue-300 border-slate-600 outline-slate-200 px-[12px] py-[10px] rounded-[360px]"
                type="text"
                placeholder="Search"
              />
              <img className="absolute right-3 top-1" src={Search} alt="" />
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-[8px]">
                <label className="text-[#074E78]" htmlFor="">
                  Show:
                </label>
                <input
                  className="w-[92px] h-[32px] px-[6px] rounded py-[6px] text-[#C5C5C5] border-solid border-[2px] focus:outline-blue-300 border-slate-600 outline-slate-200"
                  type="number"
                  placeholder="10 rows"
                  min={0}
                />
              </div>
              <button className="inline-flex pt-[4px] pr-[45px] pb-[4px] pl-[12px] items-center justify-between bg-[#25A6F2] w-[85px] h-[32px] gap-1 rounded-[360px]">
                <img src={Add} alt="" />
                <p>Add</p>
              </button>
            </div>
          </div>
          <div>
            <table className="mt-[20px] w-full">
              <thead className="bg-[#25A6F2] h-[40px]">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="text-center">
                {table.getRowModel().rows.map((row) => (
                  <tr className="pt-[14px]" key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td className="pt-[6px]" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute left-[30%] mt-5">
            <Stack spacing={2}>
              <Pagination
                onChange={handleChange}
                color="primary"
                count={10}
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
