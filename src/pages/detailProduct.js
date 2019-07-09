import React, { Component } from 'react'

import dummy from '../data/produk'

import Kaki from '../component/footer'
import Modal from '../component/modal'
export default class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: dummy,
            cart: [],
            qty: 0,

        }

        this.add = this.add.bind(this)
        this.substract = this.substract.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    add() {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    substract() {
        this.setState({
            qty: this.state.qty - 1
        })
    }

    addToCart(qtys) {

        console.log("Add to cart success")
    }

    render() {
        let getId = Number(this.props.match.params.id_product)
        let dataById = dummy.find((item => item.id_produk === getId))
        return (
            <div key={dataById.id_produk} style={{ marginTop: "100px" }}>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <button disabled={this.state.qty < 1} onClick={this.substract}>-</button> Qty: {this.state.qty} <button onClick={this.add}>+</button>
                <p>{dataById.price * this.state.qty}</p>
                <button onClick={this.addToCart}>Tambah ke keranjang</button>

                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <Kaki kota={dataById.location} nama={dataById.seller_name} harga={dataById.price} />
                <Modal gambar={dataById.image} />
            </div>
        )
    }
}