import React from 'react';
import Logo from '../lib/logo/image2.svg';
import Frame1 from '../lib/logo/Frame 47.png';
import Frame2 from '../lib/logo/Frame 48.png';
import Frame3 from '../lib/logo/Frame 49.png';
import { Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="w-[1440px] flex flex-shrink-0 h-[810px]">
      <div className="w-[223px] h-[810px]">
        <div
          style={{ background: 'var(--80, #B7E2FB)' }}
          className="inline-flex pt-[12px] pr-[50.959px] pb-[12px] pl-[18px] items-center "
        >
          <div className="flex items-center gap-[12px] font-Q">
            <img src={Logo} alt="" />
            <h1
              style={{ lineHeight: 'normal', color: 'var(--50, #25A6F2)' }}
              className="text-base font-semibold text-[var(--50, #25A6F2)]"
            >
              Patan Booking
            </h1>
          </div>
        </div>
        <div className="w-full h-[754px] bg-[#25A6F2]">
          <div className="inline-flex flex-col items-start gap-[16px] pt-[36px] pl-[15px]">
            <Link to={'/'}>
              <img
                className="flex items-center cursor-pointer gap-[8px]"
                src={Frame1}
                alt=""
              />
            </Link>
            <Link to={'/department'}>
              {' '}
              <img
                className="flex items-center cursor-pointer gap-[8px]"
                src={Frame2}
                alt=""
              />
            </Link>
            <Link to={'/consultant'}>
              <img
                className="flex items-center cursor-pointer gap-[8px]"
                src={Frame3}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      {/* <div
        style={{
          background:
            'radial-gradient(257.93% 101.44% at 77.85% 63.95%, #B7E2FB 0%, #E7F5FE 100%), var(--100, #FFF)',
        }}
        className="h-full w-[1217px]"
      ></div> */}
    </div>
  );
};
