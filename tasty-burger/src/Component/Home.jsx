import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
function Home() {
  return (
    <div className='bg-[url("/bg.jpg")] bg-fixed bg-cover bg-center pt-25'>
      {/* ==== hero section start */}
      <div className='bg-[url("/hero-1.jpg")] text-white lg:flex flex-col md:flex-row justify-center items-center p-10'>
        <div>
          <img src="hero-2.png" alt="" className='p-5' />
        </div>
        <div>
          <h1 className='lg:text-6xl md:text-4xl sm:text-xl font-bold text-center'>NEW BURGER<br></br> <span className='lg:text-4xl md:text-4xl sm:text-xl'>WITH ONION</span></h1>
          <p className='text-center sm:text-base p-5'>We believe great food starts with fresh, high-quality ingredients.<br></br> Every meal is carefully prepared to deliver rich flavors, satisfying portions, and a taste you’ll love in every bite. From sourcing to delivery, we focus on freshness, quality, and care.</p>
          <center><button className='bg-yellow-400 text-red-950 font-bold cursor-pointer p-2 rounded-md hover:text-yellow-400 hover:bg-red-600 '>ORDER NOW</button></center>
        </div>
        <div>
          <img src="hero-2.png" alt="" className='p-5' />
        </div>
      </div>
      {/* ==== hero section end */}
      {/* about section start */}
      <div className='bg-white'>
        <h1 className='lg:text-6xl md:text-4xl sm:text-xl font-semibold text-center p-10'>THE BURGER TASTE BETTER WHEN<br></br> YOU EAT IT WITH YOUR FAMILY</h1>
        <p className='text-center sm:text-base p-2'>Burgers aren’t just about the taste—they’re about the moments shared around the table.<br></br> When enjoyed with family, every bite feels warmer, richer, and more memorable,<br></br> turning a simple meal into quality time together.</p>
        <center><button className='bg-red-600 text-white font-bold cursor-pointer p-2 rounded-md hover:bg-yellow-400 hover:text-red-600'>EXPLORE FULL MENU</button></center>
        <img src="about-1.jpg" alt="" />
        {/* about section part start */}
        <div className='bg-yellow-600 text-center lg:flex lg:flex-row md:flex-col sm:flex-col items-center gap-10 p-10'>
          {/* orignal part start*/}
          <div className='flex flex-col items-center p-10'>
            <img src="pizza.png" alt="" height={100} width={100} />
            <h1 className='text-2xl font-semibold p-5'>ORIGINAL</h1>
            <p className='text-center sm:text-base p-5'>We are a food delivery platform delivering fresh, delicious meals to your doorstep with speed and reliability. Our mission is to make food ordering convenient, enjoyable, and trustworthy.</p>
          </div>
          {/* orginal part ends */}
          {/* food quality start */}
          <div className='flex flex-col items-center p-10'>
            <img src="salad.png" alt="" height={100} width={100} />
            <h1 className='text-2xl font-semibold p-5'>FOOD QUALITY</h1>
            <p className='text-center sm:text-base p-5'>We ensure top food quality by partnering with trusted kitchens that follow strict hygiene standards. Every meal is prepared with fresh ingredients for great taste and nutrition.</p>
          </div>
          {/* food quality end */}
          {/* fast delivery start */}
          <div className='flex flex-col items-center p-10'>
            <img src="delivery-bike.png" alt="" height={100} width={100} />
            <h1 className='text-2xl font-semibold p-5'>FAST DELIVERY</h1>
            <p className='text-center sm:text-base p-5'>We value your time by ensuring fast and efficient delivery. Our partners use optimized routes and real-time tracking to deliver your food hot and on time.</p>
          </div>
          {/* fast delivery ends */}
        </div>
        {/* about section part end */}
        {/* our crazy burger section start */}
        <div>
          <div>
            <h1 className='text-red-600 lg:text-6xl md:text-4xl sm:text-xl font-semibold text-center pt-10'>OUR CRAZY BURGERS</h1>
            <p className='text-center sm:text-base p-5'>Our crazy burgers are stacked with bold flavors, juicy patties, and unexpected twists.<br></br> Every bite is messy, satisfying, and unforgettable.</p>
          </div>
          {/* item(menu) section start */}
          {/* first row start */}
          <div className='lg:flex justify-center gap-10 p-10 lg:flex-row md:flex-col sm:flex-col'>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* 1st card */}
              <div className="border rounded-md">
                <img src="burger-1.jpg" alt="" className="w-full rounded-t-md" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-yellow-400 flex gap-1">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <FaHeart />
                  </div>
                  <h1 className="text-xl font-semibold">Crispy Chicken</h1>
                  <p className="text-gray-600">
                    Crispy chicken fried to golden perfection with juicy tender inside.
                  </p>
                  <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                    ₹200
                  </button>
                </div>
              </div>

              {/* 2nd card */}
              <div className="border rounded-md">
                <img src="burger-2.jpg" alt="" className="w-full rounded-t-md" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-yellow-400 flex gap-1">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                    <FaHeart />
                  </div>
                  <h1 className="text-xl font-semibold">Ulitimate Bacon</h1>
                  <p className="text-gray-600">
                    Ultimate bacon layered with smoky flavor crispy texture and rich taste.
                  </p>
                  <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                    ₹250
                  </button>
                </div>
              </div>

              {/* 3rd card */}
              <div className="border rounded-md">
                <img src="burger-3.jpg" alt="" className="w-full rounded-t-md" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-yellow-400 flex gap-1">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <FaHeart />
                  </div>
                  <h1 className="text-xl font-semibold">Black Sheep</h1>
                  <p className="text-gray-600">
                    Black Sheep signature dish crafted with bold flavors and unique taste.
                  </p>
                  <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                    ₹200
                  </button>
                </div>
              </div>

              {/* 4th card */}
              <div className="border rounded-md">
                <img src="burger-4.jpg" alt="" className="w-full rounded-t-md" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-yellow-400 flex gap-1">
                      <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
                    </div>
                    <FaHeart />
                  </div>
                  <h1 className="text-xl font-semibold">Vegan Burger</h1>
                  <p className="text-gray-600">
                    Plant based vegan burger packed with fresh flavors wholesome goodness.
                  </p>
                  <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                    ₹250
                  </button>
                </div>
              </div>

            </div>
            {/* first row end */}
          </div>
          {/* second row start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">

            {/* 1st card */}
            <div className="border rounded-md">
              <img src="burger-5.jpg" alt="" className="w-full rounded-t-md" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-400 flex gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <FaHeart />
                </div>
                <h1 className="text-xl font-semibold">Double Burger</h1>
                <p className="text-gray-600">
                  Double burger stacked high with juicy patties and bold flavors.
                </p>
                <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                  ₹200
                </button>
              </div>
            </div>

            {/* 2nd card */}
            <div className="border rounded-md">
              <img src="burger-6.jpg" alt="" className="w-full rounded-t-md" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-400 flex gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                  <FaHeart />
                </div>
                <h1 className="text-xl font-semibold">Turkey Burger</h1>
                <p className="text-gray-600">
                  Juicy turkey burger grilled perfectly offering lean protein rich flavor.
                </p>
                <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                  ₹250
                </button>
              </div>
            </div>

            {/* 3rd card */}
            <div className="border rounded-md">
              <img src="burger-7.jpg" alt="" className="w-full rounded-t-md" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-400 flex gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <FaHeart />
                </div>
                <h1 className="text-xl font-semibold">Smokey House</h1>
                <p className="text-gray-600">
                  Smokey House special loaded with rich smoky flavors and comfort.
                </p>
                <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                  ₹200
                </button>
              </div>
            </div>

            {/* 4th card */}
            <div className="border rounded-md">
              <img src="burger-8.jpg" alt="" className="w-full rounded-t-md" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-400 flex gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
                  </div>
                  <FaHeart />
                </div>
                <h1 className="text-xl font-semibold">Classic Burger</h1>
                <p className="text-gray-600">
                  Classic burger made with juicy patty fresh veggies and soft bun.
                </p>
                <button className="mt-3 bg-yellow-400 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 hover:text-white">
                  ₹250
                </button>
              </div>
            </div>

          </div>
          {/* second row end */}
          {/* item(menu) section end */}
        </div>
        {/* our crazy burger section end */}
      </div>
      {/* advertised section start */}
      <div className="lg:flex justify-center gap-10 p-10 lg:flex-row md:flex-col flex-wrap">
        <img src="ad-1.png" alt="" height={700} width={700} className='cursor-pointer rounded-md' />
        <img src="ad-2.png" alt="" height={700} width={700} className='cursor-pointer rounded-md' />
      </div>
      {/* advertised section end */}
      {/* about section end */}
      {/* nothing bring section start */}
      <div className='bg-blue-50 lg:flex justify-center gap-20 p-10 lg:flex-row md:flex-col'>
        <img src="pro.png" alt="" />
        <div>
          <h1 className='font-semibold p-5 lg:text-6xl md:text-4xl sm:text-xl'>NOTHING BRINGS PEOPLES<br></br> TOGETHER LIKE A GOOD<br></br> BURGER</h1>
          <p className='p-5 sm:text-base'>Nothing brings people together like a good burger shared with friends and family.
            It turns simple moments into joyful memories filled with laughter and flavor.
            A burger is more than food; it’s an experience that connects hearts.
            Every bite reminds us how sharing a meal creates lasting bonds.</p>
            <ul className='list-disc p-5'>
              <li>Juicy patties spark conversations, laughter, and memories, turning casual meals into shared moments of comfort, flavor, and genuine connection together.</li>
              <li>From first bite to last, burgers unite friends, families, and strangers around grills, tables, stories, smiles, and happiness everywhere always.</li>
              <li>Simple ingredients, bold flavors, and warm buns create irresistible experiences that invite everyone to slow down, share, and celebrate together.</li>
            </ul>
        </div>
      </div>
      {/* nothing bring section end */}
      {/* nothing section  */}
      <div className='h-100'></div>
      {/* app section start */}
      <div className='cursor-pointer'>
        <img src="app.png" alt="" className='w-full' />
      </div>
      {/* app section end */}
      {/* brand section start */}
      <div className='bg-blue-50 flex justify-center gap-10 p-10 flex-wrap'>
        <img src="brand-1.png" alt="" height={100} width={100} />
        <img src="brand-2.png" alt="" height={100} width={100} />
        <img src="brand-3.png" alt="" height={100} width={100} />
        <img src="brand-4.png" alt="" height={100} width={100} />
        <img src="brand-5.png" alt="" height={100} width={100} />
        <img src="brand-6.png" alt="" height={100} width={100} />
        <img src="brand-7.png" alt="" height={100} width={100} />
        <img src="brand-8.png" alt="" height={100} width={100} />
      </div>
      {/* brand section end */}
      {/* delivery guarantee section start */}
      <div className='bg-[url("/guarantee.jpg")] bg-cover bg-center flex flex-col justify-center text-center items-center p-40'>
        <h1 className='font-semibold p-5 lg:text-4xl md:text-2xl sm:text-xl'>WE GUARANTEE</h1>
        <h1 className='font-semibold p-5 lg:text-6xl md:text-4xl sm:text-xl'>30 MINUTES DELIVERY!</h1>
        <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatibus.</p>
        <button className='bg-red-600 text-white font-bold cursor-pointer p-2 rounded-md hover:bg-yellow-400 hover:text-red-600'>Call :- 9876543201</button>
      </div>
      {/* delivery guarantee section end */}
    </div>
  )
}

export default Home