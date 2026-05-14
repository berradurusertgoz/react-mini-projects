import Tabs from "./tabs";
import './tabs.css'

function RandomComponent() {
  return <h2>Random Component Content</h2>;
}

function DemoTabs() {
  const tabs = [
    {
      label: "Home",
      content: <p>Home content here</p>,
    },
    {
      label: "Profile",
      content: <p>Profile content here</p>,
    },
    {
      label: "Settings",
      content: <RandomComponent />,
    },
  ];

  function handleTabChange(index) {
    console.log("Current tab:", index);
  }

  return (
    <Tabs
      tabs={tabs}
      onTabChange={handleTabChange}
    />
  );
}

export default DemoTabs;