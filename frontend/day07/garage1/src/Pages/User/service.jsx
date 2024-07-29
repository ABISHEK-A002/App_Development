import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import '../../Assets/Styles/User/Services.css';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Services = () => {
  const [mytext, setMytext] = useState('');
  const [response, setResponse] = useState('');
  const responseRef = useRef(null);

  const API_KEY = 'sk-proj-0uAVUQPZblVevvlxqymlT3BlbkFJb7dZAhGsqKXPkw63OdKT';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mytext.trim()) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are an expert in car repairs and services of the "AUTOGARAGE" vehicle repair hub company. Introduce yourself as "AUTOGARAGE Diagnostic Support". Provide responses only related to car repairs and services. If any question is irrelevant, or you are unsure of the answer say Sorry, I am not sure. please tell to contact the  AUTOGARAGE customer support or send an email. Understand the symptoms, or any queries that the customer is stating and respond accordingly. Describe the possible issue that is being faced. List out the Parts recommendation for the car service and the tools that is required for the service. List out safety precautions related to the service and safety tips in bullet points.',
              },
              {
                role: 'user',
                content: mytext.trim(),
              },
            ],
            temperature: 1.0,
            top_p: 0.7,
            n: 1,
            stream: false,
            presence_penalty: 0,
            frequency_penalty: 0,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setResponse(data.choices[0].message.content);
        } else {
          setResponse('Error: Unable to process your request.');
        }
      } catch (error) {
        console.error(error);
        setResponse('Error: Unable to process your request.');
      }
    }
  };

  useEffect(() => {
    if (response) {
      typeEffect(responseRef.current, 20);
    }
  }, [response]);

  const typeEffect = (element, speed) => {
    var type = $(element).text();
    $(element).html(" ");
  
    var i = 0;
    var timer = setInterval(() => {
      if (i < type.length) {
        $(element).append(type.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  return (
    <div style={{width:'100%',height:'100%'}}>
        <div className='service-img'></div>
    <div className='service-outer'></div>
      <NavBar />
      <div className='service-body'>
        <h1 style={{color:'white', fontWeight:'500'}}>Diagnostic Tool</h1>
        <form id="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="mytext"
            placeholder="Enter your queries"
            style={{ position: 'relative', width: '50%', left: '10px', padding: '4px', fontSize: '16px', lineHeight: '1.5', fontFamily: 'inherit' }}
            value={mytext}
            onChange={(e) => setMytext(e.target.value)}
            required
          />
          <button type="submit" style={{position:'relative', left:'20px'}}>Submit</button>
        </form>

        <div style={{ position: 'relative', width: '80%' }}>
          <div
            ref={responseRef}
            className="response-anim"
            style={{
              position: 'relative',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              padding: '8px',
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              pointerEvents: 'none',
              fontWeight: '500',
              fontSize: '17px',
              lineHeight: '1.5',
              fontFamily: 'inherit',
            }}
          >
            {response}
          </div>
        </div>
      </div>
      <div className='footerclass'>
      <Footer />
      </div>
    </div>
  );
};

export default Services;
