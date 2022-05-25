import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mb-3 mt-3'>Welcome to you in Question and Answer BlogPost</h2>
            <div className='text-start p-3 m-4 border bg-light shadow '>

                <h4>Question: Difference between javascript and nodejs. </h4>
                <p><strong>Answer: </strong> Here are some different between javascript and nodejs-</p>
                <strong>Javascript:-</strong>
                <ol>
                    <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                    <li>Javescript generally used in client-side</li>
                    <li>It workes only in browser.</li>
                    <li>JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</li>
                    <li>Javascript is used for front-end development.</li>
                    <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
                    <li>SJavascript is capable enough to add HTML and play with the DOM. </li>
                </ol>
                <strong>NodeJS:-</strong>
                <ol>
                    <li>NodeJS is a Javascript runtime environment.</li>
                    <li>NodeJS is genereally used in server side</li>
                    <li>NodeJS help javascript to run outside of Browser.</li>
                    <li>NodeJS is only supported in v8 engine of google crome.</li>
                    <li>NodeJA is used for server side development</li>
                    <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </li>
                    <li>Nodejs does not have capability to add HTML tags.</li>
                </ol>
            </div>
            <div className='text-start p-3 m-4 border bg-light shadow'>
                <h4>Question:When should you use nodejs and when should you use mongodb ? </h4>
                <p><strong>Answer: </strong></p>
                <strong>Mongodb:-</strong>
                <ul>
                    <li>
                        MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents.
                        MongoDB is a database where we can store data.So when we need to store data and show it to UI we
                        can store data in mongodb and can handle data by crud operation(create,read,update and delete)
                    </li>
                </ul>
                <strong>NodeJS:-</strong>
                <ul>
                    <li>
                        NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                        NodeJS helps us to to connect our client site to database by it's server site.its work like a connertor to database.

                    </li>
                </ul>
            </div>

            <div className='text-start p-3 m-4 border bg-light shadow'>
                <h4>Question:What is the purpose of jwt and how does it work? </h4>
                <p><strong>Answer: </strong></p>
                <strong>JWT and how it works-</strong>
                <ul>
                    <li>
                        the full meaning of jwt is json web token. It is an open standard used
                        to share security information between two parties — both client and and server.
                        It's a part of authorization. when a user logged in in a server then the server create a token
                        and send to the particular user for authorization. jwt can be stored in localstorege,cookies ,and other memory in client site. when the user want to send any request to server, the server first confirm that the token is valid or not. if anyhow the token is invalid the user cannot access the server.
                        if the token is valid, the user can get access

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;