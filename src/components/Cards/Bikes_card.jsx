import Bike_img from "../UI/images/Bikes-img/image 23.png";
import Flag_img from "../UI/images/Flags-img/image 59.png";

const Bikes_card = (props) => {
  const bike = {
    id: 1,
    name: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
    price: 1000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6iXgi3ehJXPSlmeb8trHZDElzR5-VwQDyJA-QdJSLZM9HArjW00vefX5De-MNcn1tJk&usqp=CAU",
    flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEX/////AAD/xcX/9vb/7u7/+/v/3d3/4+P/kpL/6Oj/CQn/tbX/vb3/SUn/iYn/jY3/dXX/fn7/1NT/XFz/Vlb/q6v/Z2f/hYX/Kir/a2v/Ghr/EhL/MTH/RUX/oaH/TU3/Pj7/ODj/IyP/zMzP2bXaAAADWklEQVRoge2Z6bKiMBCFCYSwuoAgosBVeP93HETgsqQ7iYapqRrPL0qwP6CTzulgmMbmMo0v5Av53yCe9xcgh8P2EOd2czaH7AnZbw1xfEJ8xUdRhhxIK8WsqEIo6UQ3hUQvSLQlxKlfkFopK4qQI+l11A1x7OGIklFjVmzxQ8lAgvtwTfQLGbLS3AMtkPb+8+52GZmIPX9xckIsLRCjDXl1jUlGhqy41/ZA/H8pSPIMeg0qMlMVPBEk0QRxCSJXEyTEIKEmSHyDGbdYE4TeYchdoozJzfgTDDlJ/F0OEsEQmVIpBwlgiHi+y0IcGCJTjuUgFgwRFxUBJBgclp1AjGSo0B7y3jCIXZyH+9xDkMG4WOfChuKgEPO3MKUQJO0vaAc5EmgGsej0FZ/bINnrsIEgzet81h6ewUBzCCX3rGr687FPRgqt+Yyajgzi9wXGaqrsPvMzi9f1vHlyLbKQUbtfPV5VtuBDiu5kX6WPNmVhVnQLwPSxlpDfeluOAyod6Wt1scaEJeV4IkQg3oUTqTLAzD9voOL8fvEQyHyFHdReEvMhcTcG15o7piWEW6X88GWB1zoYoc/7PUAhNjeWD+S9zTyXQWwUYvxA4VT0Y+AQpKrLKxBAGDDtVFQzAQRbamW1XJLXELAWyisVQjQkZbm0LCGeyx+TSvJdD4HQPTgh1HTJwCqM+AV1OQDEiB+6EI+pe13khIKOQU2nmXldja5MB2NhKzcZwuJ5YsS8hUtBl1UzwbNE7KPEJGwVkO+78vcZOSccYO5467aUKl40yEGibSIsfgMJ2lSvFIdcqgS2QGEvbCmnP4HaCMxwo+37WnBDj/cnSGu91O3N/qQ189Lzsm6QMIJ2zt7JMXZwBySGII3cVAnKEDemYCM3lWA3+p94ErCPmwtLuxgiuYZlH0Fmoeo8beJ2vO3iJs3ndvYTyNDh/ESHoF8n6PXaL+AsOERDE4BHwSFHvyijlHmTqkTL3cQlWB4LorLw0c1oHGKZbFX06OOx2kezmYntsah/pPHqWvWj1j/6uYn1m9tfiJTibotgY4gpmHlaIKHUzvmHkHRtqPVDKsAmaoW4Ul8zPoREql8Z34HkfOeuF3KS+9LwGaQ14uXmkNZUXjaHmK02h7yhL+QL2RDyB0GxI8ykA4ZEAAAAAElFTkSuQmCC",
  };

  return (
    <div className="bg-white rounded-md border-2 border-black mt-22 min-h-max w-1/3 flex flex-col justify-around ">
      <div className="flex justify-between">
        <img height={46} width={88} src={bike.flag} alt="flag" />
        <span>В наличии</span>
      </div>
      <img src={bike.img} alt="photo-bike" />
      <h3>{bike.name}</h3>
      <p>{bike.price}</p>

      <button className="bg-orange-500 rounded mx-1">В 1 клик</button>
    </div>
  );
};

export default Bikes_card;
