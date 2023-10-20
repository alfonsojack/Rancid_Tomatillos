import './ErrorComponent.css'
import PropTypes from 'prop-types'

const ErrorComponent = ({error, message}) => {
  console.log('Error error: ', error)
  console.log('message console', message)
  return (
    <div className='error-cont'>
      <h2 className='error-h2'>ERROR</h2>
      <h3 className='error-h3'>{error} </h3>
      <h3 className='error-h3'>{message}</h3>
    </div>
  )
}

export default ErrorComponent

ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired, 
  message: PropTypes.string.isRequired
}