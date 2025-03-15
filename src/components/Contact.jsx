
const Contact = () => {
  return (
    <div id="contact" className = "contact">
    
        <div>
            <div>
                <h1>Get In Touch</h1>
            </div>
            <div className="form">
                <form action="" method="POST"/>    
                <form action="https://api.web3forms.com/submit">
                <input type="hidden" name="access_key" value="8e4db321-f533-4662-99cd-572065077f62"/>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea name="message" cols="30" rows="5" placeholder="Message" required></textarea>
                <input type="submit" value="Send Message"/></form>
            </div>
        </div>
    
</div>
  )
}

export default Contact
