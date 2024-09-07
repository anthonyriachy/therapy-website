 import './ContactUs.css'
function ContactUs() {
  return (
    <main className='contact-main'>
        <form action="" className='contact-form'>
            <section className='inputs'>
                <div className='small-inputs-container'>
                    <div className='small-input-inner-container'>
                        <label htmlFor="name" className='label'>Name</label>
                        <input type="text" name='name' className='small-input'/>
                    </div>
                    <div className='small-input-inner-container'>
                        <label htmlFor="email" className='label'> Email</label>
                        <input type="text" name='email' className='small-input'/>
                    </div>
                </div>
                <div className='large-input-container'>
                    <label htmlFor="message" className='label'>Message</label>
                    <textarea name="message" id="" cols="30" rows="10" className='textArea'></textarea>
                </div>
                <button className='send-button'>Send</button>
            </section>
            <section className='form-text-container'>
                <h1>header</h1>
                <p>text text text texttexttexttext text text text text text text text texttexttexttext text text text text text text text texttexttexttext text text text text text text text texttexttexttext text text text text text text text texttexttexttext text text text text text text text texttexttexttext text text text text </p>
            </section>
        </form>
    </main>
  )
}

export default ContactUs