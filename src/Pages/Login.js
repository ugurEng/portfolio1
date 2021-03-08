import React from 'react'
import Header from '../Components/Header';
import '../Login.css';
import Footer from '../Components/Footer'


export default function Projects() {
    return(
        <div>
            <Header></Header>
            <main class="form-signin">
                <form>
                    <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                    <label for="inputEmail" class="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" class="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                    <div class="checkbox mb-3">
                        <label>

                            <input type="text" name="name" />
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
            <Footer></Footer>
        </div>
    )
}


