import './App.css';
import { useEffect } from 'react';
import { embedDashboard } from "@superset-ui/embedded-sdk"

function App() {
  const getToken = async () => {
    // const response = await fetch("/guest-token")
    // const token = await response.json()
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJndWVzdCIsImxhc3RfbmFtZSI6Imd1ZXN0IiwidXNlcm5hbWUiOiJndWVzdCJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6IjliMWY3YjVhLTIxMWUtNGRkNS04ZWI2LTUzNmZlZmIxOTFkMCJ9XSwicmxzX3J1bGVzIjpbXSwiaWF0IjoxNzA2NjE3NjY2LjkxMjMwNSwiZXhwIjoxNzA2NjE3OTY2LjkxMjMwNSwiYXVkIjoiaHR0cDovL3N1cGVyc2V0OjgwODgvIiwidHlwZSI6Imd1ZXN0In0.8BDEaYCCQXSrK0S-Bu7t-Z59gUhzkkDcDO2Dyi9JkUQ'
  }

  useEffect(() => {
    const embed = async () => {
      await embedDashboard({
        id: "9b1f7b5a-211e-4dd5-8eb6-536fefb191d0", // given by the Superset embedding UI
        supersetDomain: "http://192.168.0.38:8088",
        mountPoint: document.getElementById("dashboard"), // html element in which iframe render
        fetchGuestToken: () => getToken(),
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          hideTab: true,
        },
      })
    }
    if (document.getElementById("dashboard")) {
      embed()
    }
  }, [])

  return (
    <div className="App">
      <div id="dashboard" />
    </div>
  );
}

export default App;
