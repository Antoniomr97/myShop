let productsDB = [
  {
    id: 1,
    name: "Pokemon Ruby Version",
    image:
      "https://cdn.mobygames.com/b0aa0f1e-aba5-11ed-ab77-02420a000198.webp",
    category: "RPG",
    price: 19.99,
    score: 7.9,
  },
  {
    id: 2,
    name: "Pokemon Emerald Version",
    image:
      "https://cdn.mobygames.com/6a18158a-abac-11ed-87ec-02420a00019c.webp",
    category: "RPG",
    price: 24.99,
    score: 7.7,
  },
  {
    id: 3,
    name: "Pokemon Sapphire Version",
    image:
      "https://cdn.mobygames.com/bd775728-aba6-11ed-a519-02420a00019d.webp",
    category: "RPG",
    price: 19.99,
    score: 8.0,
  },
  {
    id: 4,
    name: "NieR Replicant",
    image:
      "https://cdn.mobygames.com/88cc1396-abed-11ed-9271-02420a000133.webp",
    category: "RPG",
    price: 34.99,
    score: 8.3,
  },
  {
    id: 5,
    name: "NieR: Automata",
    image:
      "https://cdn.mobygames.com/1310a0ba-abf5-11ed-887e-02420a00012e.webp",
    category: "RPG",
    price: 20,
    score: 8.6,
  },
  {
    id: 6,
    name: "Spyro: Reignited Trilogy",
    image:
      "https://cdn.mobygames.com/13343480-abc3-11ed-a061-02420a00019d.webp",
    category: "Action",
    price: 11.99,
    score: 8.0,
  },
  {
    id: 7,
    name: "Spyro the Dragon",
    image:
      "https://cdn.mobygames.com/9c621f1c-abc1-11ed-93d8-02420a000198.webp",
    category: "Action",
    price: 3.99,
    score: 7.9,
  },
  {
    id: 8,
    name: "God of War III",
    image:
      "https://cdn.mobygames.com/afe55c46-abeb-11ed-b85a-02420a000135.webp",
    category: "Action",
    price: 9.99,
    score: 8.9,
  },
  {
    id: 9,
    name: "Monster Hunter: Freedom",
    image:
      "https://cdn.mobygames.com/f7cccca8-abbc-11ed-a188-02420a00019a.webp",
    category: "RPG",
    price: 5.99,
    score: 6.9,
  },
  {
    id: 10,
    name: "Monster Hunter Tri",
    image:
      "https://cdn.mobygames.com/f7154856-ac09-11ed-b950-02420a00012d.webp",
    category: "RPG",
    price: 7.99,
    score: 7.7,
  },
  {
    id: 11,
    name: "Monster Hunter: World",
    image:
      "https://cdn.mobygames.com/87007a4a-ab96-11ed-9e18-02420a00019a.webp",
    category: "RPG",
    price: 14.99,
    score: 8.6,
  },
  {
    id: 12,
    name: "Monster Hunter: World - Iceborne",
    image:
      "https://cdn.mobygames.com/eb0db2d2-ac0e-11ed-83f5-02420a000134.webp",
    category: "RPG",
    price: 19.99,
    score: 8.5,
  },
  {
    id: 13,
    name: "God of War",
    image:
      "https://cdn.mobygames.com/e7439ec0-ab80-11ed-aa5a-02420a0001a0.webp",
    category: "Action",
    price: 8.99,
    score: 8.7,
  },
  {
    id: 14,
    name: "God of War: Ascension",
    image:
      "https://cdn.mobygames.com/50321ea4-abf2-11ed-a599-02420a000132.webp",
    category: "Action",
    price: 8.99,
    score: 7.7,
  },
  {
    id: 15,
    name: "Grim Fandango",
    image:
      "https://cdn.mobygames.com/71b1b1ba-ac11-11ed-b83f-02420a000135.webp",
    category: "Adventure",
    price: 11.99,
    score: 8.5,
  },
  {
    id: 16,
    name: "Heavy Rain",
    image:
      "https://cdn.mobygames.com/cb0f8a84-abe9-11ed-8949-02420a00012e.webp",
    category: "Adventure",
    price: 7.99,
    score: 8.4,
  },
  {
    id: 17,
    name: "The Curse of Monkey Island",
    image:
      "https://cdn.mobygames.com/b4f5ebfe-ac06-11ed-902e-02420a00012d.webp",
    category: "Adventure",
    price: 5.99,
    score: 8.4,
  },
  {
    id: 18,
    name: "Portal",
    image:
      "https://cdn.mobygames.com/bd9a9392-abd7-11ed-9e47-02420a00019f.webp",
    category: "Puzzle",
    price: 3.99,
    score: 8.4,
  },
  {
    id: 19,
    name: "Outer Wilds",
    image:
      "https://cdn.mobygames.com/c59ccc86-ac09-11ed-92cb-02420a000132.webp",
    category: "Puzzle",
    price: 19.99,
    score: 8.2,
  },
  {
    id: 20,
    name: "Empire: Total War",
    image:
      "https://cdn.mobygames.com/fab7903e-ac10-11ed-a599-02420a000132.webp",
    category: "Strategy",
    price: 2.99,
    score: 8.5,
  },
  {
    id: 21,
    name: "Godzilla Unleashed: Double Smash",
    image:
      "https://cdn.mobygames.com/0c48e452-c24f-11ed-ab6b-02420a000194.webp",
    category: "Action",
    price: 0.99,
    score: 3.5,
  },
  {
    id: 22,
    name: "Anubis II",
    image:
      "https://cdn.mobygames.com/cb420540-abee-11ed-b075-02420a00012f.webp",
    category: "Action",
    price: 0.99,
    score: 3.6,
  },
  {
    id: 23,
    name: "Batman: Dark Tomorrow",
    image:
      "https://cdn.mobygames.com/8e679efa-abda-11ed-aed7-02420a0001b1.webp",
    category: "Action",
    price: 0.99,
    score: 3.7,
  },
  {
    id: 24,
    name: "The Lord of the Rings: Gollum",
    image:
      "https://cdn.mobygames.com/b47a13a2-fb17-11ed-bb8d-02420a0001f5.webp",
    category: "Action",
    price: 3.99,
    score: 3.9,
  },
  {
    id: 25,
    name: "Age of Mythology",
    image:
      "https://cdn.mobygames.com/65da6304-ab9f-11ed-b042-02420a00019f.webp",
    category: "Strategy",
    price: 19.99,
    score: 8.5,
  },
  {
    id: 26,
    name: "NHL 09",
    image:
      "https://cdn.mobygames.com/16297d44-abeb-11ed-bdca-02420a000133.webp",
    category: "Sports",
    price: 9.99,
    score: 8.6,
  },
  {
    id: 27,
    name: "NBA 2K12",
    image:
      "https://cdn.mobygames.com/d3729c16-ac0c-11ed-a599-02420a000132.webp",
    category: "Sports",
    price: 9.99,
    score: 8.6,
  },
  {
    id: 28,
    name: "Punch-Out!!",
    image:
      "https://cdn.mobygames.com/3c369738-abeb-11ed-8949-02420a00012e.webp",
    category: "Sports",
    price: 9.99,
    score: 8.5,
  },
  {
    id: 29,
    name: "Virtua Tennis: World Tour",
    image:
      "https://cdn.mobygames.com/282245d0-abb4-11ed-9b12-02420a00019d.webp",
    category: "Sports",
    price: 4.99,
    score: 8.5,
  },
  {
    id: 30,
    name: "Tony Hawk's Pro Skater 2",
    image:
      "https://cdn.mobygames.com/a37e4b64-aba7-11ed-9201-02420a00019c.webp",
    category: "Sports",
    price: 4.99,
    score: 8.4,
  },
  {
    id: 31,
    name: "Portal 2",
    image:
      "https://cdn.mobygames.com/61c8b420-abed-11ed-a631-02420a000135.webp",
    category: "Puzzle",
    price: 10.99,
    score: 9.0,
  },
  {
    id: 32,
    name: "Balatro",
    image:
      "https://cdn.mobygames.com/e8243bbe-d029-11ee-a651-02420a000136.webp",
    category: "Strategy",
    price: 14.99,
    score: 9.0,
  },
  {
    id: 33,
    name: "Dark Souls",
    image:
      "https://cdn.mobygames.com/d081f99e-abf2-11ed-9899-02420a000134.webp",
    category: "RPG",
    price: 14.99,
    score: 8.1,
  },
];

module.exports = productsDB;
