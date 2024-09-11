"use client";

import Checkbtn from "@/components/(AdminPanel)/(Fields)/inputs/Checkbtn/Checkbtn";
import Dropdown from "@/components/(AdminPanel)/(Fields)/inputs/Dropdown/Dropdown";
import Textbox from "@/components/(AdminPanel)/(Fields)/inputs/TextBox/Textbox";
import ToggleSwitch from "@/components/(AdminPanel)/(Fields)/Switch_btn/Switchbtn";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");

  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  const swithToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h2 className="font-bold pb-6 mb-10">Settings</h2>
      <div className="lg:w-2/4 max-lg:w-full w-full  flex flex-col justify-start">
        <Dropdown
          label="Timezone"
          options={countries}
          selectedValue={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Choose a country"
        />

        <Textbox
          SetWidth="max-w-72 w-full"
          SetMargin="mb-6"
          name="alertemail"
          Flex="flex"
          type="text"
          label="Alert Email"
          onChange={handleChange}
        />

        <Dropdown
          label="Presale Alert Before"
          options={countries}
          selectedValue={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Choose a country"
        />

        <ToggleSwitch
          label="Enable Presale Alerts"
          checked={isChecked}
          onChange={swithToggle}
        />
        <ToggleSwitch
          label="Enable Ticket Alerts"
          checked={isChecked}
          onChange={swithToggle}
        />
        <ToggleSwitch
          label="Dark / Light"
          checked={isChecked}
          onChange={swithToggle}
        />
      </div>
    </div>
  );
};

export default Page;
