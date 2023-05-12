import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get } from 'firebase/database';
import { DataSnapshot } from '@firebase/database';

import { CharacterClass } from '../classes/Character';
import firebaseConfig from './firebase.config';
import { PlayerInterface } from '../components/player/playerCard';
class FirebaseDB {
  public db: any;
  public npc: any;
  public npcRef: any;
  public player: any;
  public playerRef: any;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    
    this.npc = "npc/";
    this.npcRef = ref(this.db, this.npc);
    this.player = "player/";
    this.playerRef = ref(this.db, this.player);
  }

  public setNpc(npcId: string, npcData: CharacterClass) {
    const specificRef = ref(this.db, this.npc + npcId );
    set(specificRef, npcData)
      .then(() => {
        console.log(`NPC ${npcId} saved successfully.`);
      })
      .catch((error) => {
        console.error(`Failed to save NPC ${npcId}:`, error);
      });
  }

  public setPlayer(playerId: string, playerData:PlayerInterface) {
    const specificRef = ref(this.db, this.player + playerId);
    set(specificRef, playerData)
      .then(() => {
        console.log(`NPC ${playerId} saved successfully.`);
      })
      .catch((error) => {
        console.error(`Failed to save NPC ${playerId}:`, error);
      });
  }

  public async getNpcData() {
    const data: any[] = [];
  
    try {
      const snapshot = await get(this.npcRef);
      const npcData = snapshot.val();
      for (const npcKey in npcData) {
        const npc = npcData[npcKey];
       /*  console.dir(npc) */
        data.push(npc);
      }
      return data;
    } 
    
    catch (error) {
      console.error('Failed to get NPC data:', error);
    }
  }
  public async getPlayerData() {
    const data: any[] = [];
    try {
      const snapshot = await get(this.playerRef);
      const playerData = snapshot.val();
      for (const playerKey in playerData) {
        const player = playerData[playerKey];
     
        data.push(player);
     /*    console.log("Player Data:");
        console.table(playerData); */
      }

      

      return data;

    } catch (error) {
      console.error('Failed to get player data:', error);
    }
  }

  
}

const firebaseDB = new FirebaseDB();

export default firebaseDB;
