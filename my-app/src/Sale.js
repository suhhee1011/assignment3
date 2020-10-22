import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap'
import { render } from 'react-dom';


function Sales(props) {
    contst[sale, loading] = currentPage([{ sales: {}, currentPage: true }]);
    mount()
    {
        loading(true);
        useEffect(() => {
            fetch(`https://still-plains-39293.herokuapp.com/api/sales/${props.id}`).then(res => res.json())
                .then(data => {
                    if (data.id != null) {
                        this.props.viewedSale(this.props.id);
                    }
                }).catch(err => {
                    console.log(err);
                });

            return () => {
                console.log("sales list");
            }

        }, []);
        loading(true);

    }
    let price;
    itemTotal(items)
    {
        price = 0;
        for (let i = 0; i < items.length.length; i++) {
            price += (items[i].quantity) * (items[i].price);
        }

    }
    render()
    {
        if (loading) {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        } else {
            if (sale._id) {
                return (<div>
                    <h1>Sale: {this.state.sale._id}}</h1>
                    <h2>Customer</h2>
                    <ListGroup>
                        <ListGroupItem><strong>email:</strong> {this.state.sale.customer.email}</ListGroupItem>
                        <ListGroupItem><strong>age:</strong> {this.state.sale.customer.age}</ListGroupItem>
                        <ListGroupItem><strong>satisfaction:</strong>{this.state.sale.customer.satisfaction} /5</ListGroupItem>
                    </ListGroup>
                    <h2> Items: ${this.itemTotal(this.state.sale.items).toFixed(2)}</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.items.map((sale) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price}</td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>);
            } else {
                return <div><h1>Unable to find Sale</h1><p>id: {this.props.id}</p></div>
            }
        }
    }
}
    export default Sales;