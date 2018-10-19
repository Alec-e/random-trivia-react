import React from 'react';

const Layout = (props) =>{
    
        return (
            <div style={{height: '100%'}}>
                <div className="container">
                    <div className="sidebar">
                        <h2>Random Trivia</h2>
                    </div>
                    <div className="content">
                        {props.children}
                    </div>
                </div>
                <style jsx>
                {`
                    .container {
                        display: block;
                        min-height: 100vh;
                    }
                    .sidebar {
                        background-image: url("https://images.unsplash.com/photo-1523872529804-569e03a845b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab7d297b83d893f4e0ada1f245afabad&auto=format&fit=crop&w=750&q=80");
                        background-size: cover;
                        background-position: top right;
                    }
                    .content {
                        background: #06beb6;  /* fallback for old browsers */
                        background: -webkit-linear-gradient(to right, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */
                        background: linear-gradient(to right, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                    }
                    @media screen and (min-width: 990px){
                        .container {
                            display: flex;
                        }
                        .container div:nth-child(1){
                            flex: 1;
                        }
                        .container div:nth-child(2){
                            flex: 3;
                        }
                    }
                `}
                </style>
            </div>
        )
    

}
export default Layout;