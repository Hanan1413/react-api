import React, {useState} from 'react'


function ContactCard({ avatarUrl, name, email, birth }) {
  const [showAge, setShowAge] = useState(false);

  return (
    <div>
      <div className="contact-card">
        {/* App */}
        <img src={avatarUrl} alt="#"></img>
        <div className="card-deatil">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => setShowAge(!showAge)}> Show birth day</button>
          {showAge ? <p> birth: {birth}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default ContactCard