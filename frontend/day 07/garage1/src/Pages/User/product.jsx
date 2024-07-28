import React from 'react';
import '../../Assets/Styles/User/product.css';
import NavBar from '../../Components/NavBar';

const products = [
  { img: 'https://m.media-amazon.com/images/I/61hFqIJQefL._AC_UF1000,1000_QL80_.jpg', title: 'Car Air Filter', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://images.tayna.com/prod-images/1200/Powerline/065-powerline-45-435.jpg', title: 'Car Battery', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://www.neowheels.com/images/Upload/product/17-Hydra-5x114-BM---12_98996.jpg', title: 'Alloy Wheel', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-lubricant/c/s/j/-original-imagk8ygjubrpzzx.jpeg?q=20&crop=false', title: 'Engine Oil', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://lambstire.com/wp-content/uploads/sites/12/2023/10/brake-pads-and-brake-discs.jpg', title: 'Brake Pads', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://gomechanic.in/blog/wp-content/uploads/2020/03/81A5TJzNNXL._SL1500_-1000x905.jpg', title: 'Suspension', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://5.imimg.com/data5/GLADMIN/Default/2022/3/BL/MW/FJ/82392/car-headlight-500x500.jpg', title: 'Headlight', description: 'check this link', price: 'Rp500.000' },
  { img: 'https://cdn.fiix.io/1/articles/sparkplugs.jpg', title: 'Spark Plug', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://m.media-amazon.com/images/I/61hFqIJQefL._AC_UF1000,1000_QL80_.jpg', title: 'Car Air Filter', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://images.tayna.com/prod-images/1200/Powerline/065-powerline-45-435.jpg', title: 'Car Battery', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://www.neowheels.com/images/Upload/product/17-Hydra-5x114-BM---12_98996.jpg', title: 'Alloy Wheel', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-lubricant/c/s/j/-original-imagk8ygjubrpzzx.jpeg?q=20&crop=false', title: 'Engine Oil', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://lambstire.com/wp-content/uploads/sites/12/2023/10/brake-pads-and-brake-discs.jpg', title: 'Brake Pads', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://gomechanic.in/blog/wp-content/uploads/2020/03/81A5TJzNNXL._SL1500_-1000x905.jpg', title: 'Suspension', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://5.imimg.com/data5/GLADMIN/Default/2022/3/BL/MW/FJ/82392/car-headlight-500x500.jpg', title: 'Headlight', description: 'check this link', price: 'Rp500.000' },
//   { img: 'https://cdn.fiix.io/1/articles/sparkplugs.jpg', title: 'Spark Plug', description: 'check this link', price: 'Rp500.000' }
];

const Product = () => {
  return (
    <div className="cus-body">
    <div style={{paddingBottom:"100px"}}>
        <NavBar/>
        </div>
      <div className="shell">
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <div className="wsk-cp-product" key={index}>
                <div className="wsk-cp-img">
                  <img src={product.img} alt="Product" className="img-responsive" />
                </div>
                <div className="wsk-cp-text">
                  <div className="title-product">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="description-prod">
                    <p>{product.description}</p>
                  </div>
                  <div className="wcf-left"><span className="price">{product.price}</span></div>
                  <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket"></i></a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Product;
