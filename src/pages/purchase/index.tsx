import AppMenu from "@/components/menu";
import { Button, Col, Row, Space } from "antd";
import products from '../../mock/productsList';
import { Product as Product } from "@/models/products";
import { getPurchases, purchaseProduct } from "@/services/purchaseService";
import { getUserToken } from "@/services/localStorageService";
import { useState } from "react";

export default function Purchase() {

    const [purchases, setPurchases]=useState(getPurchases());
    const purchase = async (product: Product) => {
        purchaseProduct({            
            productToken: product.token
        });

        setPurchases(getPurchases);
    }

    return (
        <>
            <AppMenu />
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

                                <Button type="primary" onClick={() => { purchase(product) }}>Purchase</Button>
                            </Row>

                        );
                    })}
                </Col>
            </Row>
            <hr></hr>
            <h2>Purchase List</h2>
            <Row>
                <Col span={24}>
                    {purchases.map((product, i) => {
                        return (
                            <Row key={i}>
                                <Col span={12}>{product.userToken}</Col>
                                <Col span={12}>{product.productToken}</Col>                                                            
                            </Row>
                        );
                    })}
                </Col>
            </Row>

        </>
    )
}