import Link from "next/link";

//components
import Content from "../components/Content";


export default function Custom404() {
  return (
    <>
      <Content bg="bg-gray-50">
     
          <div className="rounded-2xl px-6 py-8 sm:py-14">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Error 404</h2>
              <p className="text-lg text-slate-600">Transform your experience with our innovative solutions</p>
           
           
             <Link href="/" className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-black cursor-pointer transition mt-12">
               Home
              </Link>
            </div>

          </div>
       

      </Content>


    </>
  );
}
