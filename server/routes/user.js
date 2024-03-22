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

        let images_ideas =  [
  "Jon Snow standing with Ghost",
  "Daenerys Targaryen with her dragons",
  "Cersei Lannister on the Iron Throne",
  "Arya Stark holding Needle",
  "Jaime Lannister with his golden hand",
  "Bran Stark as the Three-eyed Raven",
  "Tyrion Lannister holding a goblet of wine",
  "Sansa Stark in Winterfell's great hall",
  "Khal Drogo on his horse",
  "Ned Stark holding Ice",
  "Brienne of Tarth in her armor",
  "The Night King with an ice spear",
  "Melisandre with the flaming sword",
  "Samwell Tarly with a pile of books",
  "Joffrey Baratheon with the crossbow",
  "The Hound with his helmet",
  "Littlefinger holding a mockingbird pin",
  "Varys in the Red Keep",
  "Ygritte with her bow and arrows",
  "Margaery Tyrell in her wedding dress",
  "Ramsay Bolton with his hounds",
  "Theon Greyjoy with a kraken sigil",
  "Olenna Tyrell with a rose brooch",
  "Tormund Giantsbane with a wooden mug of ale",
  "Euron Greyjoy on his ship",
  "Tywin Lannister on the Iron Throne",
  "Robb Stark with his direwolf",
  "Jorah Mormont holding a sword",
  "Missandei reading a scroll",
  "Grey Worm in Unsullied armor",
  "Ser Davos Seaworth at Dragonstone",
  "Bran Stark warging",
  "Podrick Payne with a lute",
  "Dothraki warrior on a horse",
  "White Walker on a dead horse",
  "Daenerys Targaryen in Qarth dress",
  "Gendry with his blacksmith hammer",
  "Hodor holding the door",
  "Jaime Lannister in Kingsguard armor",
  "Meera Reed in the forest",
  "Lady Olenna in Highgarden",
  "Catelyn Stark at the Red Wedding",
  "Lord Varys with his little birds",
  "Bronn with his crossbow",
  "Ser Jorah in the fighting pits",
  "Ned Stark in the dungeons",
  "Sansa Stark with a lemon cake",
  "King Robert with his war hammer",
  "Queen Cersei with her wine",
  "Direwolf in the snow",
  "Iron Throne in the Red Keep"
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



