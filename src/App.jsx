import { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Image from "./components/Image";
import Description from "./components/Description";
import Price from "./components/Price";
import { products } from "./products"; // Import products array
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardText, CardTitle, Row } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const firstName = "Michael";

  return (
    <div className="container mt-4">
      <Row>
        {products.map((product, index) => (
          <div key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Image
                image={product.image}
                alt={product.name}
                className="product-image"
              />
              <CardBody>
                <CardTitle>
                  <Name name={product.name} />
                </CardTitle>
                <CardText>
                  <Description description={product.description} />
                </CardText>
                <CardText>
                  <Price price={product.price} />
                </CardText>
              </CardBody>
            </Card>
            <div className="">
              <h3>Hello, {firstName}</h3>
            </div>
            <div className="">
              {firstName ? (
                <Image
                  image={product.image}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <h3>No image</h3>
              )}
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default App;
