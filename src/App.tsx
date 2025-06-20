import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LocationSender from "./components/LocationSender";
import LocationReceiver from "./components/LocationReceiver";
import UserFeed from "./components/UserFeed";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 p-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Technical Assessment
        </h1>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Task - 2
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <LocationSender />
          <LocationReceiver />
        </div>
        {/* <UserFeed /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
