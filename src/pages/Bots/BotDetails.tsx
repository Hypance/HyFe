import React, { Fragment } from 'react'
import { Col, Dropdown, Row, Stack } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom'

export const BotDetail:React.FC = () => {

  let { botId } = useParams();

  // botId ile API 'a istek atılacak bot details çekilecek.

  // useEffect(() => {
  //   const fetchBot = async () => {
  //     const data = await botServiceGetBot(botId);
  //     setBot(data);
  //   };
  //   fetchBot();
  // }, [botId]);

  return (
  <Fragment>
    <Stack
      direction="horizontal"
      className="align-items-center justify-content-between pb-2"
    >
      <h1>BOT DETAILS {botId}</h1>
      <NavLink className="btn btn-primary" to="/bot">
        Back to Bot
      </NavLink>
    </Stack>
    <main className='row mt-5 mx-0 justify-content-between'>
      <article className='col-5 bg-light p-5 rounded-4'>
        <h2>
          ABOUT {botId}
        </h2>
        <p className='textAlJustify'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </article>
      <aside className='col ms-4 bg-light p-5 rounded-4'>
        <section className='row'>
          {/* burada table kullansak mantıksız mı olur? */}
          <div className="col-6">
          <h5>TOTAL PROFIT</h5>
          <p>
            4,3%
          </p>
          </div>
          <div className="col-6">
          <h6>ORDER STATISTICS</h6>
          <p>
          +4 / -1
          </p>
          </div>     
        </section>

      </aside>
    </main>
  </Fragment>

  )
}
