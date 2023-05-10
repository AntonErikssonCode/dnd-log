const BASE_URL = 'https://www.dnd5eapi.co/api';

export const getSpell = async (spellName:string) => {
  const response = await fetch(`${BASE_URL}/spells/${spellName}`);
  if (!response.ok) {
    throw new Error('Failed to fetch spell');
  }
  const data = await response.json();
  return data;
};
