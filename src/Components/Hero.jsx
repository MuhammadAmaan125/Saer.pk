import React, { useState } from 'react';
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../Utils/hero.scss"
import Select from 'react-select';
import Datepicker from "react-tailwindcss-datepicker";
import { Icon } from '@iconify/react';



function Hero() {

  const [selectedOption, setSelectedOption] = useState(null);

  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });


  console.log(value)

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }






  const options = [
    { value: 'Karachi', label: 'Karachi' },
    { value: 'Lahore', label: 'Lahore' },
    { value: 'Islamabad', label: 'Islamabad' },
    { value: 'Multan', label: 'Multan' },
    { value: 'Pehsawar', label: 'Peshawar' },
    { value: 'Quetta', label: 'Quetta' },

  ];



  return (
    <div className='overflow-hidden'>
      <div className='hero flex justify-center  py-4 sm:py-14 '>
        <div className=' px-10 sm:px-0  md:w-[65%]'>
          <h1 className='text-white font-bold py-2 text-lg'>Your travel advisor on your click!</h1>
          <div className='bg-white rounded-lg '>
            <Tabs>
              <TabList className="flex bg-[#09559B] w-full rounded-xl">
                <Tab className="Tab_Bar">Umrah Packages</Tab>
                <Tab className="Tab_Bar">Flights</Tab>
                <Tab className="Tab_Bar">Hotels</Tab>
                <Tab className="Tab_Bar">Insurance</Tab>
                <Tab className="Tab_Bar">Visa</Tab>
                <Tab className="Tab_Bar rounded-tr-lg">Trips</Tab>
              </TabList>

              <div className="px-4 py-2">
                <TabPanel>


                  <div className='flex gap-5 sm:flex-row flex-col'>




                    <div className='border-2 p-2 sm:w-[35%] rounded-md'>
                      <p className='text-xs sm:text-base text-gray-500'>FROM</p>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Lahore"

                        className='border-none outline-none border-transparent'
                      />
                    </div>


                    <div className='border-2 p-2 sm:w-[35%] rounded-md'>
  <div className='flex'>
    <p className='text-xs sm:text-base text-gray-500'>DEPART</p>
    <p className='text-xs sm:px-10 px-14 sm:text-base text-gray-500'>RETURN</p>
  </div>

  <div style={{ position: 'relative', zIndex: 9999 }}> {/* Ensure zIndex is applied to the container */}
    <Datepicker
      primaryColor="blue"
      inputClassName="bg-none outline-none text-left text-[#1476D1] w-full"
      placeholder="Select Date"
      value={value}
      popoverDirection='down'
      onChange={handleValueChange}
      showShortcuts={false}
    />
  </div>
</div>

                    <div className='border-2 p-2 sm:w-[30%]  rounded-md'>
                      <p className='text-xs sm:text-base text-gray-500'>PASSENGERS</p>
                      <input type="text" placeholder='1 Adult' className='outline-none mt-1 placeholder:text-[#1476D1]' name="" id="" />
                    </div>




                  </div>

                  <div className='flex justify-center items-center mt-5'>
                    <div className='inline-flex px-14 rounded-md py-2 gap-4 text-white bg-[#4169E1]'>
                      <Icon icon="tabler:search" width="24" height="24" />
                      <button>Search</button>
                    </div>
                  </div>



                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 5</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 6</h2>
                </TabPanel>
              </div>
            </Tabs>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Hero;
