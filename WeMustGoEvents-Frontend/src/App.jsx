import { useState } from "react"
import {astronaut} from "./assets/astronaut.jpg"
function App() {

  return (
    <div>
      <div class="background"></div>
        <div class="centering">
            <form class="my-form">
                <div class="login-welcome-row">
                    <img
                        class="login-welcome"
                        src="../assets/astronaut"
                        alt="Astronaut"
                    />
                    <h1>LogIn!</h1>
                </div>
                <div class="text-field">
                    <label for="email">Email:</label>
                    <input
                        aria-label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <img
                        alt="Email Icon"
                        title="Email Icon"
                        src="./email.svg"
                    />
                </div>
                <div class="text-field">
                    <label for="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        name="password"
                        placeholder="Your Password"
                        title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                    />
                    <img
                        alt="Password Icon"
                        title="Password Icon"
                        src="password.svg"
                    />
                </div>
                <input type="submit" class="my-form__button" value="Login" />
                <div class="my-form__actions">
                    <div class="my-form__row">
                        <span>Did you forget your password?</span>
                        <a href="#" title="Reset Password">Reset Password</a>
                    </div>
                    <div class="my-form__signup">
                        <a href="#" title="Create Account">Create Account</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default App
