import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get } from 'firebase/database';
import { DataSnapshot } from '@firebase/database';

import { CharacterClass } from '../classes/Character';
import firebaseConfig from './firebase.config';

class FirebaseDB {
  public db: any;
  public npc: any;
  public npcRef: any;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    
    this.npc = "npc/";
    this.npcRef = ref(this.db, this.npc);
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

  public async getNpcData() {
    const data: any[] = [];
  
    try {
      const snapshot = await get(this.npcRef);
      const npcData = snapshot.val();
      for (const npcKey in npcData) {
        const npc = npcData[npcKey];
        console.dir(npc)
        data.push(npc);
      }
      return data;
    } 
    
    catch (error) {
      console.error('Failed to get NPC data:', error);
    }
  }
  
}

const firebaseDB = new FirebaseDB();

export default firebaseDB;
