const Product = () => (
  <div className="px-6 pb-6">
    <div>
      <p className="py-2 text-4xl font-semibold">Laptop</p>
      <hr className="border-2 border-black" />
    </div>
    <div className="flex gap-4 mt-6">
      <div className="w-2/5">
        <img
          alt="PC"
          src="https://s.alicdn.com/@sc04/kf/H8b92917429e046099a56d5aa27c360b9I.jpg"
          className="w-96 h-64"
        />
      </div>
      <div className="w-3/5 space-y-4">
        <p>
          Dummy PC  - 1 Year Warranty.
        </p>
        <p>MRP: RS.45,000</p>
        <p className="font-semibold">Offer price: Rs.41,000</p>
        <p className="font-semibold text-green-600">6% off</p>
      </div>
    </div>
  </div>
);

export default Product;
