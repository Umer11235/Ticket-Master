"use client";
import Button from "@/components/(AdminPanel)/(Fields)/inputs/Button/Button";
import Checkbtn from "@/components/(AdminPanel)/(Fields)/inputs/Checkbtn/Checkbtn";
import Textbox from "@/components/(AdminPanel)/(Fields)/inputs/TextBox/Textbox";
import TabSwitch from "@/components/(AdminPanel)/(Fields)/Switch_btn/TabSwitchbtn";
import InventoryChart from "@/components/(AdminPanel)/EmailAlert_Chart/SimpleChart";
import Icons from "@/utiles/icons/icons";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      lowLabel: "Low",
      downLabel: "Down",
      sectionName: "",
      alertOn: "",
      isPrimaryChecked: false,
      isResaleChecked: false,
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      lowLabel: "Low",
      downLabel: "Down",
      sectionName: "",
      alertOn: "",
      isPrimaryChecked: false,
      isResaleChecked: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => () => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCheckboxChange = (index: number, field: string) => (e: any) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: e.target.checked } : item
    );
    setItems(updatedItems);
  };

  const handleInputChange = (index: number, field: string) => (e: any) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: e.target.value } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="mb-6 text-xs">
        <p>Event : Katherine Moss on 2024-11-08T19:30:00 at United Center </p>
      </div>

      {items.map((item, index) => (
        <ul
          className="flex items-center justify-between mt-6 w-full flex-wrap"
          key={item.id}
        >
          <li>
            <TabSwitch leftLabel={item.lowLabel} rightLabel={item.downLabel} />
          </li>
          <li>
            <Textbox
              SetWidth="max-w-68"
              name="sectionName"
              type="text"
              label="Section Name"
              Flex="flex"
              onChange={handleInputChange(index, "sectionName")}
            />
          </li>
          <li>
            <Textbox
              SetWidth="max-w-20"
              name="alertOn"
              type="text"
              label="Alert On"
              Flex="flex"
              onChange={handleInputChange(index, "alertOn")}
            />
          </li>
          <li>
            <Checkbtn
              id={`primary-checkbox-${item.id}`}
              label="Primary"
              value="test"
              checked={item.isPrimaryChecked}
              onChange={handleCheckboxChange(index, "isPrimaryChecked")}
            />
          </li>
          <li>
            <Checkbtn
              id={`resale-checkbox-${item.id}`}
              label="Resale"
              value="test"
              checked={item.isResaleChecked}
              onChange={handleCheckboxChange(index, "isResaleChecked")}
            />
          </li>
          <li>
            <span onClick={removeItem(index)}>
              <Icons icon="MinusCircle" />
            </span>{" "}
          </li>
        </ul>
      ))}

      <div className="flex justify-end mt-7">
        <span onClick={addItem}>
          <Icons icon="AddCircle" />
        </span>
      </div>

      <div className="mt-5">
        <Button onClick={() => alert("Button clicked!")}>Save</Button>
      </div>

      {/* ///inventoryChart */}

      <div className="p-4 mt-6">
        <p>inventory</p>
        <InventoryChart />
      </div>
    </div>
  );
};

export default Page;
