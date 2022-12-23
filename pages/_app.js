import AuthProvider from "../src/store/AuthProvider";
import VehicleProvider from "../src/store/VehicleProvider";
import "../styles/global.css";

function MyApp({Component, pageProps}) {
  return (
    <AuthProvider>
      <VehicleProvider>
        <Component />
      </VehicleProvider>
    </AuthProvider>
  );
}

export default MyApp;
