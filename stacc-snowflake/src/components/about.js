import s from './about.module.css';
import { useState } from 'react';

function About(props) {
    return (
        <div id={s.moduleblur}>
            <div className={s.module}>
                <button onClick={props.handleVisible} className={s.popupbutton}>
                    X
                </button>
                <h2 className={s.hello}>Hei!</h2>
                <h3 className={s.about}>
                    Denne siden ble laget i anledning Stacc sin fagdag. Målet
                    var å lage et frontend design for et NFT galleri, der man
                    kan lagre sine egne favoritter. NFT samlingene som blir vist
                    her vil ofte endre seg fra tid til annen, men de du allerede
                    har markert som favoritter fra tidligere samlinger vil
                    lagres i browser.
                </h3>
                <h3 className={s.contact}>Laget av Fredrik og Johann</h3>{' '}
                <h3 className={s.contact}>Kontakt: johannbugge@gmail.com</h3>
            </div>
        </div>
    );
}

export default About;
