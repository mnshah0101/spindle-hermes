//create a user routes

import express from 'express';
import UserModel from '../models/User.js';
import bycrypt from 'bcryptjs';
import getImage from '../utils/getImage.js';
import dotenv from 'dotenv';
dotenv.config();

//connect to the database



const router = express.Router();


router.post('/register', async (req, res) => {
       try {
    const { username, email, password } = req.body;
    console.log(username, email, password)

    if(!username || !email || !password){
        console.log('Username, email and password are required');
        return res.status(400).send('Username, email and password are required');
    }
    let cryptPassword = bycrypt.hashSync(password, 10);

    let images_ideas = ["Steampunk Goggles and Hat","Astronaut in Space Station","Mechanical Cyborg Face","Futuristic Motorcycle Rider","Hoverboard Adventure","Extraterrestrial Life Form","Laser Sword Warrior","Holographic Projection of User's Face","AI Processor Chip","Underwater City Dweller","Time Travel Pilot","Glowing Neon Alien Avatar","Floating Astral Projection","Starship Captain","Futuristic Graffiti Artist","Living Holographic Tattoo","Spacesuit Selfie","Robotic Pet Companion","Digital DNA Helix","Cybernetic Ninja","Space Explorer with Alien Map","Futuristic Samurai","Stationed Mars Colonist","Cyberspace Surfer","Microchip Implant Close-up","Sci-fi Sports Champion","Genetically Engineered Animal Hybrid","Virtual Reality Gamer","Quantum Computer Brain","Bioengineer with Modified Plants","Robotic Eagle Assault","AI Android with Human Emotions","Hover Car Racer","Futuristic Spyglass User","Superhuman Cyborg","Intergalactic Explorer","Hacker in Neon Datastream","Mechanized Armour Soldier","Nano-Technology Powered User","Humanoid Robot","Jedi Mind Trick Performer","Post-apocalyptic Survivor","Futuristic Disc Jockey with Holographic Decks","Mutated Superhuman","Deep Space Miner","Cybernetic Elf from a Sci-fi Fantasy","Orbital Skydiver","Alien Archeologist","Intelligent Alien Life Form","Power-armour Pilot","Bio-enhanced Cybernetic Detective."]
    let index = Math.floor(Math.random() * images_ideas.length);
    let image_idea  = images_ideas[index];

    let image = await getImage(image_idea);


    const user = new UserModel({ username, email, password:cryptPassword, profile_picture: image});
 
        await user.save();
        console.log('User created');
        res.status(201).send('User created');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);

    }
})






export default router;



