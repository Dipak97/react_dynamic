import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SettingsIcon from "@mui/icons-material/Settings";
import Sidebar from "./Sidebar";



function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  {
    name: "module",
    label: "Module",
    Icon: ReceiptIcon,
    items: [
      { 
        name: "module1", 
        label: "Module 1", 
        items: [
          { name: "module1.1", label: "Module 1.1", onClick },
          { name: "module1.2", label: "Module 1.2", onClick },
          { name: "module1.3", label: "Module 1.3", onClick },
          { name: "module1.4", label: "Module 1.4", onClick },
          { name: "module1.5", label: "Module 1.5", onClick }
        ] },
        "divider",
      { name: "module2", 
      label: "Module 2", 
      items: [
          { name: "module2.1", label: "Module 2.1", onClick },
          { name: "module2.2", label: "Module 2.2", onClick },
          { name: "module2.3", label: "Module 2.3", onClick },
          { name: "module2.4", label: "Module 2.4", onClick },
          { name: "module2.5", label: "Module 2.5", onClick }
      ] },
      "divider",
      { name: "module3", 
      label: "Module 3", 
      items: [
        { name: "module3.1", label: "Module 3.1", onClick },
        { name: "module3.2", label: "Module 3.2", onClick },
        { name: "module3.3", label: "Module 3.3", onClick },
        { name: "module3.4", label: "Module 3.4", onClick },
        { name: "module3.5", label: "Module 3.5", onClick }
      ] },
      "divider",
      { name: "module4", 
      label: "Module 4", 
      items: [
        { name: "module4.1", label: "Module 4.1", onClick },
        { name: "module4.2", label: "Module 4.2", onClick },
        { name: "module4.3", label: "Module 4.3", onClick },
        { name: "module4.4", label: "Module 4.4", onClick },
        { name: "module4.5", label: "Module 4.5", onClick }
      ] },
      "divider",
      { name: "module5", 
      label: "Module 5", 
      items: [
        { name: "module5.1", label: "Module 5.1", onClick },
        { name: "module5.2", label: "Module 5.2", onClick },
        { name: "module5.3", label: "Module 5.3", onClick },
        { name: "module5.4", label: "Module 5.4", onClick },
        { name: "module5.5", label: "Module 5.5", onClick }
      ] }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];


function App() {
  
    
  return (
    <div>
      <Sidebar originalItems={items} />
     
     
    </div>
  );
}

export default App;