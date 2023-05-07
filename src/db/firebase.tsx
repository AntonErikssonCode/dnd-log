import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get } from 'firebase/database';
import { DataSnapshot } from '@firebase/database';


import firebaseConfig from './firebase.config';

class FirebaseDB {
  private db: any;
  private npc: any;
  private npcRef: any;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    
    this.npc = "npc/";
    this.npcRef = ref(this.db, this.npc);
  }

  public setNpc(npcId: string, npcData: any) {
    const specificRef = ref(this.db, this.npc + npcId );

    set(specificRef, npcData)
      .then(() => {
        console.log(`NPC ${npcId} saved successfully.`);
      })
      .catch((error) => {
        console.error(`Failed to save NPC ${npcId}:`, error);
      });
  }

  public getNpcData() {
    return get(this.npcRef)
      .then((snapshot: any) => {
        const npcData = snapshot.val();
        console.dir(npcData);
      })
      .catch((error: any) => {
        console.error('Failed to get NPC data:', error);
      });
  }
}

const firebaseDB = new FirebaseDB();

export default firebaseDB;
