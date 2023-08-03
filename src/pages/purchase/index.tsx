import AppMenu from "@/components/menu";
import { Button, Col, Row, Space } from "antd";
import products from '../../mock/productsList';
import { Product as Product } from "@/models/products";
import PurchaseAPI from "@/apis/purchaseApi";
import { getCurrentUser, getUserToken } from "@/services/localStorageService";
import productsList from "../../mock/productsList";

export default function Purchase() {


    const purchase = async (product: Product) => {
        const currentUser = getCurrentUser();
        const userToken = getUserToken();
        if (currentUser) {
            await new PurchaseAPI().sendPurchase({
                productToken: product.Token,
                userToken: userToken,
                email: currentUser.email,
                publicIp: currentUser.publicIP,
                productName: product.Name,
            });
        }
    }

    return (
        <>
            <AppMenu />
            <Row>
                <Col span={4}>Product</Col>
                <Col span={4}>Price</Col>
                <Col span={4}>Stock</Col>
                <Col span={4}>Token</Col>
            </Row>
            <hr></hr>
            <Row>
                <Col span={24}>
                    {products.map((product, i) => {
                        return (
                            <Row key={i} style={{ paddingTop: '5px' }}>
                                <Col span={4}>{product.Name}</Col>
                                <Col span={4}>{product.Price}</Col>
                                <Col span={4}>{product.Stock}</Col>
                                <Col span={4}>{product.Token}</Col>

                                <Button type="primary" onClick={() => { purchase(product) }}>Purchase</Button>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </>
    )
}