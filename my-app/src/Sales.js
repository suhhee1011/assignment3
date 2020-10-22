import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { Table, Pagination } from 'react-bootstrap'
import { render } from 'react-dom';

function Sales(props) {
    const[sales, currentPage] = useState([{ sales: [], currentPage: 1 }]);
    this.getData(this.state.currentPage)
        .then((data) => { this.setState({ sales: data }) });

    function getData(page){

      
            fetch(`https://still-plains-39293.herokuapp.com/api/sales?page=${page}&perPage=10`).then(res => res.json()).then(data => {
                sales(data.data);
            }).catch(err => {
                console.log(err);
            });

            return () => {
                console.log("sales list");
            }




    }

    function previousPage()
    {
        if (currentPage > 1) {
            getData(currentPage - 1)
                .then((data) => {
                    sales(data);
                    currentPage(currentPage - 1);
                });
        }
    }

    function NextPage()
    {

        getData(currentPage + 1)
            .then((data) => {
                sales(data);
                currentPage(currentPage + 1);
            });

    }



    render()
    {
        if (sales.length > 0) {
            return (
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Store Location</th>
                                <th>Number of Items</th>
                                <th>Sale Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.map((sale)=>{
                                return(
                                <tr key={sale._id} onClick={()=>{props.history.push(`/Sale/${sale._id}`)}}>
                                    <td>{sale.customer.email}</td>
                                    <td>{sale.storeLocation}</td>
                                    <td>{sale.items.length}</td>
                                    <td>{ new Date(sale.saleDate).toLocaleDateString()}</td>

                                </tr>
                                )
                            })}
        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Prev onClick={()=>{previousPage();}}/>
                        <Pagination.Item>{this.state.currentPage}</Pagination.Item>
                        <Pagination.Next onClick={()=>{NextPage();}}/>
                   </Pagination>
                </div>
            );
        } else {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        }

    }
}
export default withRouter(Sales);