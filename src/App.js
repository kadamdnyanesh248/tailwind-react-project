// @flow

import * as React from 'react';

const App = () => {
  return (
    <div>
      <div class="flex justify-between items-center py-4 bg-blue-900">
        <div class="flex-shrink-0 ml-10 cursor-pointer">
          <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
          <span class="ml-1 text-3xl text-blue-200 font-semibold">WebCraft</span>
        </div>
        <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
        <ul class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
          <li class="mr-6 p-1 border-b-2 border-orange-500">
            <a class="text-blue-200 cursor-default" href="#">Home</a>
          </li>
          <li class="mr-6 p-1">
            <a class="text-white hover:text-blue-300" href="#">Services</a>
          </li>
          <li class="mr-6 p-1">
            <a class="text-white hover:text-blue-300" href="#">Projects</a>
          </li>
          <li class="mr-6 p-1">
            <a class="text-white hover:text-blue-300" href="#">Team</a>
          </li>
          <li class="mr-6 p-1">
            <a class="text-white hover:text-blue-300" href="#">About</a>
          </li>
          <li class="mr-6 p-1">
            <a class="text-white hover:text-blue-300" href="#">Contacts</a>
          </li>
        </ul>
      </div>




      <div class="carousel relative shadow-2xl bg-white">
        <div class="carousel-inner relative overflow-hidden w-full">
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked" />
          <div class="carousel-item absolute opacity-0" style={{height:'50vh'}}>
            <div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
          </div>
          <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
          
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item absolute opacity-0" style={{height:'50vh'}}>
            <div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
          </div>
          <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
          
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item absolute opacity-0" style={{height:'50vh'}}>
            <div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
          </div>
          <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>
          
        </div>
      </div>



      <div class="p-24 flex flex-wrap items-center justify-center">
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: 'scale(1.5)', opacity: '0.1'}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}></div>
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Indoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Peace Lily</span>
              <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: 'scale(1.5)', opacity: '0.1'}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}></div>
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt=""/>
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Outdoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Monstera</span>
              <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: 'scale(1.5)', opacity: '0.1'}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}></div>
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Outdoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Oak Tree</span>
              <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
            </div>
          </div>
        </div>
      </div>


      <div class="w-full p-6 bg-blue-100">
        <div class="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">OUR SERVICES</div>
        <div class="p-2 text-center text-lg text-gray-700">We offer the best web development solutions.</div>
        <div class="flex justify-center flex-wrap p-10">
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-orange-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-orange-500"></i>
            </div>
          </div>
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-red-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-red-500"></i>
            </div>
          </div>
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-green-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-green-500"></i>
            </div>
          </div>
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-indigo-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-indigo-500"></i>
            </div>
          </div>
          ...
        </div>
      </div>





      <div class="w-full bg-blue-900">
        <div class="flex flex-wrap text-center text-white">

          <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
            <div class="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
            <p class="p-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p>
            <p class="p-3 text-gray-400">Morbi tristique massa nec massa auctor, at scelerisque felis consectetur. Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.</p>
          </div>

          <div class="w-full md:w-1/3 p-5 border-r border-blue-800">
            <div class="my-6 text-xl font-semibold">CONTACT US</div>
            <p class="mt-8 text-gray-400">
              A108 Adam Street 
              New York, NY 535022 
              United States 
              <strong>Phone:</strong> +1 5589 55488 55 
              <strong>Email:</strong> info@webcraft.com
            </p>
            <div class="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
              <div class="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
                <i class="fab fa-facebook-f fa-lg text-blue-500 -rotate-45"></i>
              </div>
              <div class="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
                <i class="fab fa-twitter fa-lg text-blue-500 -rotate-45"></i>
              </div>
              <div class="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
                <i class="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45"></i>
              </div>
              <div class="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
                <i class="fab fa-linkedin-in fa-lg text-blue-500 -rotate-45"></i>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-5">
            <div class="mt-6 text-xl font-semibold">SAY HELLO!</div>
            <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
              <div class="flex items-center mb-4">
                <input class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white" type="text" placeholder="Username"/>
              </div>
              <div class="flex items-center mb-4">
        
                <input class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white" type="text" placeholder="Email"/>
              </div>
              <div class="mb-6">
                <textarea class="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white" placeholder="Message"></textarea>
              </div>
              <div class="flex justify-between items-center">
                <button class="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold" type="button">SEND</button>
              </div>
            </form>
          </div>

        </div>
    </div>
    </div>
  );
};

export default App;
