//create a user routes

import express from 'express';
import UserModel from '../models/User.js';
import APIModel from '../models/API.js';
import bycrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';
import getImage from '../utils/getImage.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

//connect to the database



const router = express.Router();




router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password)

        if (!username || !email || !password) {
            console.log('Username, email and password are required');
            return res.status(400).json({ message: 'Username, email and password are required' });
        }

        //check if username or email already exists
        const user_check = await UserModel.findOne({ email: email });
        if (user_check) {
            console.log('Email already exists');
            return res.status(409).json({ message: 'Email already exists' });
        }
        const user2 = await UserModel.findOne({ username: username });
        if (user2) {
            console.log('Username already exists');
            return res.status(409).json({ message: 'Username already exists' });
        }




        let cryptPassword = bycrypt.hashSync(password, 10);

        let images_ideas =   [
  "Medieval Castle with Thrones Banner",
  "Steampunk Iron Throne",
  "Futuristic Direwolf",
  "Victorian Style Three-Eyed Raven",
  "Anime Style Dragon Breathing Fire",
  "Retro pixel art of Westeros map",
  "Gothic style White Walker",
  "Watercolor Night's Watch Castle",
  "Art Deco Weirwood Tree",
  "Pop Art Wildling Woman",
  "Modern Abstract Dothraki Horse",
  "Photorealistic image of a Maester's chain",
  "Minimalist Dornish Landscape",
  "Futuristic Night's Watch Ranger in Infrared",
  "Steampunk Stark Sigil",
  "Graffiti Art Lannister Lion",
  "Cyberpunk Direwolf robotic animatronic",
  "Retro Funky Citadel at Oldtown",
  "Medieval Stylized Valyrian Steel Sword",
  "Disney-Inspired Essos Landscape",
  "Geometric Abstract Faceless Man",
  "Art Nouveau Children of the Forest",
  "Urban Street Art of Dragon's Egg",
  "Medieval Cartoon Style Giants of Beyond the Wall",
  "Neo-Gothic Iron Bank of Braavos",
  "Retro Sci-Fi Night King",
  "Impressionist art of The Great Sept of Baelor",
  "Minimalist Red Priestess silhouette",
  "Manga Style Greensight Visions",
  "80s Neon Night's Watch Oath",
  "Psychedelic Wildfire Explosion",
  "Pop Culture Qarth Warlock",
  "Modern Street Art of Unsullied Warrior",
  "Cubist Dothraki Khalasar",
  "Traditional Japanese Woodblock The Wall of Westeros",
  "Art Nouveau Autumn in the Riverlands",
  "Gothic Stylized Wights",
  "Art Deco Dorne Palace Intricacies",
  "Steampunk Valyria Before Doom",
  "Futuristic Warlock of the House of the Undying",
  "Medieval Style The Seven Faiths",
  "Pop Art Pyromancer with Wildfire",
  "Anime Style Kraken Sigil of House Greyjoy",
  "Traditional Ink Brush Painting, Dragonstone",
  "Cubist Style Fiery Battle of Blackwater",
  "Art Nouveau Meereen Architecture",
  "Geometric Ironborn Reaver",
  "Graffiti Art Tyrion's Crossbow",
  "Steampunk Style Manticore",
  "Victorian Ghost of High Heart Prophecy",
  "Futuristic Stark vs Lannister battle scene"
];
        let index = Math.floor(Math.random() * images_ideas.length);
        let image_idea = images_ideas[index];

        let image = await getImage("Create an image of a " + image_idea);


        const user = new UserModel({ username, email, password: cryptPassword, profile_picture: image });

        await user.save();
        console.log('User created');
        res.status(201).send('User created');
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });

    }
})

router.post('/sendEmail', async (req, res) => {
    try {
        const email = req.body.emailAdd;
        // const user_id = req.body.user_id;
        console.log(email);
        if (!email) {
            console.log('no email');
            return res.status(404).json({ message: "Invalid email" });
        }
        // if (!user_id) {
        //     console.log('no user_id');
        //     return res.status(404).json({ message: "Invalid user id" });
        // }

        const user = await UserModel.findOne({email: email});
        if (!user) {
            console.log('no user');
            return res.status(404).json({ message: "user not found" });
        }

        const reset_token = user.reset_password_token;
        console.log(reset_token);

        const emailTemplate = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Reset Instructions</title>
            </head>
            <body>
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Password Reset</h2>
                    <p>Hello,</p>
                    <p>You are receiving this email because you have requested a password reset for your account.</p>
                    <p>Please click on the following link to reset your password:</p>
                    <p><a href="https://spindleapi.com/reset-password/?email=${email}&reset_token=${reset_token}">Reset Password</a></p>
                    <p>If you did not request this reset, please ignore this email.</p>
                    <p>Thank you,</p>
                    <p>Spindle Dev Team</p>
                </div>
            </body>
            </html>
        `;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
             user: 'akshaypap2005@gmail.com',
             pass: 'xtec wxev vqtu ltdm',
            },
           });
        
        var mailOptions = {
            from: 'akshaypap2005@gmail.com',
            to: email,
            subject: 'Reset Spindle Password',
            html: emailTemplate
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.status(500).json({ message: error });
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        return res.status(200).json(`Successfully sent email`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})

router.post('/resetPassword', async (req, res) => {
    try {
        console.log(req.body);
        const new_password = req.body.password;
        if (!new_password) {
            return res.status(404).json({ message: "Invalid passowrd" });
        }

        const reset_token = req.body.reset_token;
        if (!reset_token) {
            return res.status(404).json({ message: "Invalid password reset token" });
        }

        const email = req.body.email;
        if (!email) {
            return res.status(404).json({ message: "Invalid email" });
        }

        const user = await UserModel.findOne({email: email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.reset_password_token != reset_token) {
            return res.status(404).json({ message: "Invalid password reset token" });
        }

        //update passwprd in user object
        user.password = bycrypt.hashSync(new_password, 10);
        user.reset_password_token = CryptoJS.lib.WordArray.random(16).toString();

        await user.save();
        return res.status(200).json({ message: "Password updated successfully" });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})

router.post('/checkIfOwner', async (req, res) => {
    try {
        const api_id = req.body.api_id;
        if (!api_id) {
            return res.status(404).json({ message: "Invalid api_id" });
        }
        const user_id = req.body.user_id;
        if (!user_id) {
            return res.status(404).json({ message: "Invalid user_id" });
        }

        const api = await APIModel.findById(api_id);
        if(!api) {
            return res.status(404).json({ message: "API not found" });
        }
        if(!api.user._id == user_id) {
            return res.status(404).json({ message: "User is not Owner" });
        }

        return res.status(200).json({message: "User matches Owner"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})





export default router;



