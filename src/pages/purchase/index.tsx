import AppMenu from "@/components/menu";
import { Button, Col, Row, Space } from "antd";
import products from '../../mock/productsList';
import { Product as Product } from "@/models/products";
import PurchaseAPI from "@/apis/purchaseApi";
import { getCurrentUser, getUserToken } from "@/services/localStorageService";

export default function Purchase() {

    function getLocalIP() {
        return new Promise((resolve, reject) => {
            const rtcConfig = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
            const pc = new RTCPeerConnection(rtcConfig);

            pc.createDataChannel('');
            pc.createOffer()
                .then(sdp => pc.setLocalDescription(sdp))
                .catch(reject);

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    const candidate = event.candidate.candidate;
                    const localIP = candidate.split(' ')[4];
                    resolve(localIP);
                    pc.close();
                }
            };
        });
    }
    const purchase = async (product: Product) => {
        const currentUser = getCurrentUser();
        const userToken = getUserToken();
        if (currentUser) {
            await new PurchaseAPI().sendPurchase({
                productToken: product.token,
                userToken: userToken,
                email: currentUser.email,
                publicIp: currentUser.publicIP
            });
        }

        getLocalIP()
            .then(localIP => console.log(localIP))
            .catch(err => console.error("Error getting local IP:", err));

    }

    return (
        <>
            <AppMenu />
            <Row>
                <Col span={4}>Product</Col>
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
        </>
    )
}