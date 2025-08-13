import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-pink-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="bg-red-400 py-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <img
            src="/assets/AnytimeValentine.jpg"
            alt="A pink Anytime Valentine sticker with a heart"
            className="mx-auto mb-6 rounded shadow-lg max-w-xs"
          />
          <h1 className="text-54xl md:text-4xl font-bold mb-6 drop-shadow-lg">Anytime Valentines</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            The goal is simple: <strong>make smiles.</strong> <br />
            In the last 10 years, we’ve given away <strong>over 50,000</strong> of these stickers. <br />
            Each one is an invitation to <strong>brighten someone’s day.</strong>
          </p>
        </div>
      </header>

      {/* How It Works */}
      <section className="py-12 px-6 bg-blue-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg">How It Works</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            We send you a <strong>pack of 50 stickers</strong>.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            <b>Write a note on the back</b> <br /> to a <b>friend</b>, a <b>family member</b>, or a <b>stranger</b> <br /> and <strong>make them feel appreciated!</strong>
          </p>

          
<table className="table-auto w-full text-left border-collapse border border-gray-300 bg-blue-200 rounded-lg overflow-hidden">
  <thead className="bg-blue-700 text-white">
    <tr>
      <th className="p-4 text-xl">Who to Give It To</th>
      <th className="p-4 text-xl">Examples</th>
    </tr>
  </thead>
  <tbody className="text-lg">
    <tr className="border-t border-gray-300">
      <td className="p-4 align-top font-semibold">Your Mom, your Dad, your Brother or Sister, Aunt or Uncle, Cousin or Grandparent</td>
      <td className="p-4 space-y-2">
        <div>“<b>Thank you</b> for <u>EVERYTHING</u> you ever did for me; I'm sorry about that one time when I was 16 (you know the one).”</div>
        <div>“I just want you to know I <strong>appreciate</strong> <u>EVERYTHING</u> you ever did for me, because you made a really cool kid — ME!”</div>
      </td>
    </tr>
    <tr className="border-t border-gray-300">
      <td className="p-4 align-top font-semibold">Your Friends</td>
      <td className="p-4 space-y-2">
        <div><b>“I LOVE AND APPRECIATE YOU!!!”</b></div>
        <div>“Thanks for always being there for me. <strong>I wouldn't be here if it wasn't for you.</strong>”</div>
		<div>“Thanks for holding my hair back that one time after I broke up with so-and-so. I owe you one.”</div>
      </td>
    </tr>
    <tr className="border-t border-gray-300">
      <td className="p-4 align-top font-semibold">Your favorite bartender or Waffle House waitress</td>
      <td className="p-4">
        <div><strong>“Your smile makes all the difference.”</strong></div>
		<div>“Your waffles and coffee saved my life tonight”</div>
      </td>
    </tr>
  </tbody>
</table>
<br />

          <p className="text-xl md:text-2xl leading-relaxed mb-2">
            If they enjoy your note, give them <b>3 blank stickers</b> so they can make more smiles.
          </p>
        </div>
      </section>

      {/* Exponential Smiles Project */}
      <section className="bg-green-500 text-white py-16 px-6 text-center">
        <h2 className="text-6xl font-extrabold leading-tight drop-shadow-lg">
          The name of the game is:
          <br />
          <span className="mt-2 block underline decoration-yellow-300 decoration-4 underline-offset-4">
            Exponential Smiles Project!
          </span>
        </h2>

        {/* Goal copy */}
        <p className="mt-6 text-2xl leading-relaxed max-w-3xl mx-auto drop-shadow">
          Our goal is to make{" "}
          <span className="font-black text-yellow-200">1,000,000 smiles</span>!
          <br />
          So far we’ve handed out <span className="font-semibold">50,000</span> —
          we’re <span className="font-semibold">5%</span> there!
        </p>
      </section>

      {/* Donations & Remaining Stickers with image + mottos */}
      <section className="bg-yellow-400 py-14 px-6">
        <h3 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
          Only <span className="text-red-600">12,000 stickers</span> left!
        </h3>

<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Text Side */}
  <div>
    <p className="text-xl leading-relaxed mb-6">
      For 10 years, I’ve given these away for free,<br /> never once taking a single dollar.
      <br /><br />
      <strong className="text-4xl md:text-5xl font-extrabold">
        <span className="text-red-500">❤️</span>{" "}
        <span className="text-blue-500">&gt;</span>{" "}
        <span className="text-green-600">$</span>
      </strong>{" "}
      has always been the motto.
    </p>

    <p className="text-xl leading-relaxed mb-6">
      In that time, I’ve handed out <strong>1,000 pins</strong>, <strong>50,000 stickers</strong>, 
      and even a batch of mini postage-stamp-sized stickers, mostly at music festivals, walking on foot from campsite to campsite, 
      spreading love to one campsite at a time.
    </p>

    <p className="text-xl leading-relaxed mb-6">
      But last Christmas, I broke my femur, and I can’t make those festival rounds anymore. <br /><br />
      I have two kids and full time job; I just don't have the time or the money to make it out to festivals anymore. <br /><br />
	  The well has run dry: I can’t afford to keep making these on my own.
    </p>

    <p className="text-xl leading-relaxed mb-8">
      This is the <b>“do or die”</b> moment for this smile-making project. 
      To keep making exponential smiles, we need your help to keep the love alive.
    </p>

    <p className="italic font-bold text-2xl text-center mt-6 drop-shadow-md">
      "Love Everything Always"
    </p>
  </div>

          {/* Image Side */}
          <div>
            <img
              src="/assets/HeartPeacesign.jpg"
              alt="Heart peace sign made from Anytime Valentine stickers"
              className="rounded-lg shadow-2xl max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:anytimevalentines@gmail.com?subject=Donation%20Inquiry"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow hover:bg-red-600 transition"
          >
            Donate / Sponsor
          </a>
          <a
            href="mailto:anytimevalentines@gmail.com?subject=Sticker%20Packs%20Request&body=Hi,%20I%27d%20like%20two%2050-packs%20(100%20stickers)%20please."
            className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-yellow-200 transition"
          >
            Request Sticker Packs
          </a>
        </div>
      </section>

      {/* Call to Action (Order) */}
      <section className="bg-pink-400 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Get Your Free Sticker Packs</h2>
        <p className="mb-6">
          Email us to request your free packs. We’ll send them anywhere we can!
        </p>
        <a
          href="mailto:anytimevalentines@gmail.com?subject=Sticker%20Packs%20Request&body=Hi,%20I%27d%20like%20two%2050-packs%20(100%20stickers)%20please."
          className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600"
        >
          Email to Request Packs
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Anytime Valentines — Spreading smiles, one sticker at a time.
      </footer>
    </div>
  );
}

export default App;
