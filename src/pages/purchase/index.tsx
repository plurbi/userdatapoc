import AppMenu from "@/components/menu";
import { Button, Col, Row, Space } from "antd";
import products from '../../mock/productsList';
import { Producto as Product } from "@/models/products";

export default function Purchase() {

    const purchase = (product: Product) => {
            
    }

    return (
        <>
           <AppMenu/>
            <Row>
                <Col span={4}>PRODUCT</Col>
                <Col span={4}>Precio</Col>
                <Col span={4}>Stock</Col>
                <Col span={4}>Token</Col>
            </Row>
            <hr></hr>
            <Row>
                <Col span={24}>
                    {products.map((product, i) => {
                        return (
                           
                              <Row key={i}>
                                <Col span={4}>{product.nombre}</Col>
                                <Col span={4}>{product.precio}</Col>
                                <Col span={4}>{product.stock}</Col>
                                <Col span={4}>{product.token}</Col>

                                <Button type="primary" onClick={()=>{purchase(product)}}>Purchase</Button>
                            </Row>
                      
                        );
                    })}
                </Col>
            </Row>
            
        </>
    )
}