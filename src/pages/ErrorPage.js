import React from 'react'
import ErrorStyle from "../assets/css/ErrorPage.module.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className={ErrorStyle.notfoundcontainer}>
        <h1 className={ErrorStyle.notfoundtitle}>404</h1>
        <p className={ErrorStyle.notfoundmessage}>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/home" className={ErrorStyle.notfoundlink}>Go back to Home</Link>
  </div>
  )
}

export default ErrorPage
