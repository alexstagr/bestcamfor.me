import Link from "next/link";


function PostCard() {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="bg-gray-50 aspect-[23/16]">
        <img
          src="https://readymadeui.com/hotel-img.webp"
          alt="Blog Post 2"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          The Rise of Boutique Hotels
        </h3>
        <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3">
          Explore how boutique hotels are redefining luxury and guest experience
          in the travel industry.
        </p>
        <Link
          href="#"
          className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-black hover:bg-primary text-white text-sm font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
