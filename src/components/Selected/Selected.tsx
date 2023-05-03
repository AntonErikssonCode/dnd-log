import React from "react";
import styles from "./selected.module.css";
import { CharacterClass } from "../../Classes/Character";
import shield from "./../../assets/shield-line-icon.png";
import bigshield from "./../../assets/big-shield.png";

interface Props {
  character: CharacterClass;
}
function Selected(props: Props) {
  const friends = props.character.friends.map((friend, index) => (
    <li key={friend.name + index} className={`${styles.friends} `}>
      <div className={`${styles.contactName} `}>{friend.name}</div>
      <div className={`${styles.contactDegree} `}>{friend.degree}</div>
    </li>
  ));
  const enemys = props.character.enemys.map((enemy, index) => (
    <li key={enemy.name + index} className={`${styles.enemys} `}>
      <div className={`${styles.contactName} `}>{enemy.name}</div>
      <div className={`${styles.contactDegree} `}>{enemy.degree}</div>
    </li>
  ));

  const gear = props.character.gear.map((gearItem, index) => (
    <li key={gearItem.name + index} className={`${styles.gearItem} `}>
      <div className={`${styles.gearName} `}>{gearItem.name}</div>
      <div className={`${styles.gearDmg} `}>{gearItem.dmg}</div>
    </li>
  ));

  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.containerSelected} `}>
        <h2>{props.character.name}</h2>
        <h3>{props.character.title}</h3>
        <div className={`${styles.mainContent} `}>
        <div className={`${styles.left} `}>
          
          <div className={`${styles.top} `}>
            <div className={`${styles.acShield} `}>
              <h3>Armor Class</h3>
              <img
                className={`${styles.acShieldImg} `}
                src={bigshield}
                alt=""
              />
              <div className={`${styles.acText} `}>
                {props.character.stats.ac}
              </div>
            </div>

            <ul className={`${styles.statsContainer} `}>
              <li className={`${styles.stats} `}>
             
                <div className={`${styles.statsShield} `}>
                <h3> Dex</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.dex}
                  </div>
                </div>
              </li>
              <li className={`${styles.stats} `}>
              
                <div className={`${styles.statsShield} `}>
                <h3> Srt</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.str}
                  </div>
                </div>
              </li>
              <li className={`${styles.stats} `}>
           
                <div className={`${styles.statsShield} `}>
                <h3> Con</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.con}
                  </div>
                </div>
              </li>
              <li className={`${styles.stats} `}>
               
                <div className={`${styles.statsShield} `}>
                <h3> Int</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.int}
                  </div>
                </div>
              </li>
              <li className={`${styles.stats} `}>
                
                <div className={`${styles.statsShield} `}>
                <h3> Wis</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.wis}
                  </div>
                </div>
              </li>
              <li className={`${styles.stats} `}>
            
                <div className={`${styles.statsShield} `}>
                <h3>Cha</h3>
                  <img
                    className={`${styles.statsShieldImg} `}
                    src={shield}
                    alt=""
                  />
                  <div className={`${styles.statsText} `}>
                    {props.character.stats.cha}
                  </div>
                </div>
              </li>
            </ul>
            </div>
            <div className={`${styles.bot} `}>
              
           
            <ul className={`${styles.friendsList} `}>
              <h3>Friends</h3>
              {friends}
            </ul>
            <ul className={`${styles.enemysList} `}>
              <h3>Enemys</h3>
              {enemys}
            </ul>
            <ul className={`${styles.gearList} `}>
              <h3>Gear</h3>
              {gear}
            </ul>
            </div>

       


            </div>




          <div className={`${styles.imgContainer} `}>
            <img
              className={`${styles.img} `}
              src="https://media.istockphoto.com/id/1329993010/photo/knight.jpg?s=612x612&w=0&k=20&c=QHP5vuRNN9dlHTSizOzJ-GZzxVpTZJcg-BR4-aW6wiY="
              alt="Knight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selected;
