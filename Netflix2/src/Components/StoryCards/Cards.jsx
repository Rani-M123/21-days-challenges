import React from 'react'
import './Cardsstroy.scss'
import LastPage from './LastPage/LastPage'
import { BsPlusLg } from "react-icons/bs";
import { useState } from 'react';

const Cards = () => {


  const [opendiv,setOpendiv] = useState(false);
  const [opendiv1,setOpendiv1] = useState(false);
  const [opendiv2,setOpendiv2] = useState(false);
  const [opendiv3,setOpendiv3] = useState(false);
  const [opendiv4,setOpendiv4] = useState(false);
  const [opendiv5,setOpendiv5] = useState(false);


  const openDivhandler = ()=>{
    setOpendiv(!opendiv)
  }
  const openDivhandler1 = ()=>{
    setOpendiv1(!opendiv1)
  }
  const openDivhandler2 = ()=>{
    setOpendiv2(!opendiv2)
  }
  const openDivhandler3 = ()=>{
    setOpendiv3(!opendiv3)
  }

  const openDivhandler4 = ()=>{
    setOpendiv4(!opendiv4)
  }
  const openDivhandler5 = ()=>{
    setOpendiv5(!opendiv5)
  }
  return (
<>
      <div className="our-story-cards">
        <div className="our-story-card hero-card" >
          <div className="our-story-card-background" style={{ background: 'black', width: '40' }}>
            <div className="concord-img-wrapper">
              <div className='opacitybackground'></div>
              <div className='opacitybackground'></div>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/fbb54774-ca17-4208-a995-db44bffe4163/IN-en-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="text" />

            </div>
            <div className="concord-img-gradient">
            </div>
          </div>
          <div className="our-story-card-text">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <form class="cta-form email-form" data-uia="email-form" method="GET">
              <h3 class="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
              <div class="email-form-lockup2">
                <ul class="simpleForm">
                  <li data-uia="field-email+wrapper" class="nfFormSpace field-email">
                    <div data-uia="field-email+container" class="nfInput  ">
                      <div class="nfInputPlacement">
                        <label class="input_id" placeholder="email">
                          <input type="email" data-uia="field-email" name="email" class="nfTextField" id="id_email_hero_fuji" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" />
                          <label for="id_email_hero_fuji" class="placeLabel">Email address</label>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="our-story-cta-container cta-link-wrapper1">
                  <button class="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-hero_fuji">
                    <span id="" class="cta-btn-txt" data-uia="">Get Started</span>
                    <span id="" class="chevron-right-arrow" data-uia="">
                      <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                        <desc>chevron</desc>
                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>

          </div>
          <div class="center-pixel">
          </div>
          <div class="our-story-card animation-card watchOnTv" data-uia-nmhp="watchOnTv" data-uia="our-story-card">
            <div class="animation-card-container">
              <div class="our-story-card-text">
                <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Enjoy on your TV.</h1>
                <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast,
                  Apple TV, Blu-ray players and more.
                </h2>
              </div>

              <div class="our-story-card-img-container">
                <div class="our-story-card-animation-container">
                <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
                <div class="our-story-card-animation" data-uia="our-story-card-animation">
                    <video class="our-story-card-video" data-uia="our-story-card-video" autoplay playsinline muted loop>
                      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
                    </video>
                    <div class="our-story-card-animation-text"></div>
                    <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div class="center-pixel" >
        </div>
        <div class="our-story-card animation-card downloadAndWatch flipped" data-uia-nmhp="downloadAndWatch" data-uia="our-story-card">
          <div class="animation-card-container" >
            <div class="our-story-card-text">
              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Download your shows to watch offline.</h1>
              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Save your favourites easily and always have something to watch.</h2>
            </div>
            <div class="our-story-card-img-container">
              <div class="our-story-card-animation-container">
                <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                <div class="our-story-card-animation" data-uia="our-story-card-animation">
                  <div class="our-story-card-animation-image">
                    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                  </div>
                  <div class="our-story-card-animation-text">
                    <div id="" class="text-0" data-uia="">Stranger Things
                    </div>
                    <div id="" class="text-1" data-uia="">Downloading...
                    </div>
                  </div>
                  <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true">
                  </div>
                </div>
              </div>
            </div>
            <div class="center-pixel">
            </div>
          </div>
        </div>
        <div class="our-story-card animation-card watchOnDevice" data-uia-nmhp="watchOnDevice" data-uia="our-story-card">
          <div class="animation-card-container" style={{ backgroundColor: "black", width: "2500px" }}>
            <div class="our-story-card-text">
              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Watch everywhere.</h1>
              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Stream unlimited movies and TV shows
                on your phone, tablet, laptop, and TV.</h2>
            </div>
            <div class="our-story-card-img-container">
              <div class="our-story-card-animation-container">
                <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" data-uia="our-story-card-img" />
                <div class="our-story-card-animation" data-uia="our-story-card-animation">
                  <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                  </video>
                  <div class="our-story-card-animation-text">
                  </div>
                  <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true">
                  </div>
                </div>
              </div>
            </div>
            <div class="center-pixel" style={{ backgroundcolor: 'black' }}>
            </div>
          </div>
        </div>
        <div class="our-story-card animation-card kidsValueProp flipped" data-uia-nmhp="kidsValueProp" data-uia="our-story-card">
          <div class="animation-card-container">
            <div class="our-story-card-text">
              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Create profiles for children.</h1>
              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Send children on adventures with their favourite
                characters in a space made just for them—free with
                your membership.</h2>
            </div>
            <div class="our-story-card-img-container">
              <div class="our-story-card-animation-container">
                <img alt="" class="our-story-card-img" src="https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" data-uia="our-story-card-img" />
                <div class="our-story-card-animation" data-uia="our-story-card-animation">
                  <div class="our-story-card-animation-text">
                  </div>
                  <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true">
                  </div>
                </div>
              </div>
            </div>
            <div class="center-pixel">
            </div>
          </div>
        </div>
      </div>
       <div class="our-story-card1-container">
      <h1 id="" class="our-story-card1-title">Frequently Asked Questions</h1>
      <div class="main">What is Netflix?<BsPlusLg onClick={openDivhandler}/></div>
      {opendiv?
      <div className='main'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

      You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>:null}
      <div class="main"><span>How much does Netflix cost?</span><BsPlusLg onClick={openDivhandler1}/></div>
      {opendiv1?
      <div className='main'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>:null}
     <div class="main">Where can I watch?<BsPlusLg onClick={openDivhandler2}/></div>
     {opendiv2?
      <div className='main'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

      You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>:null}
      <div class="main">How do u I cancel?<BsPlusLg onClick={openDivhandler3}/></div>
      {opendiv3?
      <div className='main'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>:null}
      <div class="main">What can I watchon Netflix?<BsPlusLg onClick={openDivhandler4}/></div>
      {opendiv4?
      <div className='main'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>:null}
      <div class="main">Is Netflix good for kids?<BsPlusLg onClick={openDivhandler5}/></div>
      {opendiv5?
      <div className='main'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>:null}
      <form class="cta-form email-form" data-uia="email-form" method="GET">
              <h3 class="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
              <div class="email-form-lockup1">
                <ul class="simpleForm1">
                  <li data-uia="field-email+wrapper" class="nfFormSpace field-email">
                    <div data-uia="field-email+container" class="nfInput nfInputResponsive">
                      <div class="nfInputPlacement1">
                        <label class="input_id" placeholder="email">
                          <input type="email" data-uia="field-email" name="email" class="nfTextField" id="id_email_hero_fuji" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" />
                          <label for="id_email_hero_fuji" class="placeLabel">Email address</label>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="simpleform1btn">
                  <button class="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-hero_fuji">
                    <span id="" class="cta-btn-txt" data-uia="">Get Started</span>
                    <span id="" class="chevron-right-arrow" data-uia="">
                      <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                        <desc>chevron</desc>
                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>

          </div> 
          </>
      

      )
}

      export default Cards 