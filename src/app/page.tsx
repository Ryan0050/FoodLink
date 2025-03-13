import Header from './Component/header';
import Tutorial from "./Component/Tutorial";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <div className='text-black'>
          Landing Pages
      </div>
      <div className='flex justify-center items-center'>
          <Tutorial />
      </div>
    </div>
  );
}
