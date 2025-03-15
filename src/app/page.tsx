import Header from './Component/header';
import Footer from "./Component/footer";
import Tutorial from "./Component/Tutorial"
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header /> 
      
      <div className="h-[calc(95vh-73px)] bg-[#29361A] relative"> 
        <div className='h-[50%] flex flex-col justify-end items-center'>
            <h1 className='text-4xl'>Beli langsung dari petani</h1>
            <h1 className='text-4xl'>Terjamin kesegarannya</h1>
        </div>
        <div className='h-[50%]'>
          <Image
              src="/assets/fruit.png"
              alt="bg"
              width={500}
              height={0}
              style={{ objectFit: 'fill', width: '100%', height: '100%' }}
              className="mt-10"
          />
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <Tutorial />
      </div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{/* Main content here */}</main>
        <Footer />
      </div>
    </div>
  );
}
