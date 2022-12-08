//"StAuth10222: I Nevin James, 000825144 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
const { Client, GatewayIntentBits } = require('discord.js');
const { SlashCommandBuilder } =require('discord.js');
const axios = require("axios");
const client = new Client({ intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent] });

client.on('ready',() => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate",async (message) => {

    if(!message.author.bot){

        let command1=message.content.split(" ");

        if(command1[0] == "ClimateByLatitudeLongitude"){
            //ClimateByLatitudeLongitude 37.372 -120.038 
            let op1=command1[1];
            let op2=command1[2];
            try{
                    const response1 = await axios.get('https://yahoo-weather5.p.rapidapi.com/weather',{
                    params: {lat: op1, long: op2, format: 'json', u: 'f'},
                    headers: {
                        'X-RapidAPI-Key': '45fdd3f46cmshda55a5285116725p199d26jsna7734939e384',
                        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
                    }
                });
                

                await message.reply(("Pressure: "+response1.data.current_observation.atmosphere.pressure+" Humidity: "+response1.data.current_observation.atmosphere.humidity+" Temperature: "+response1.data.current_observation.condition.temperature).toString());
            }
            catch(ex){
                await message.reply("Invalid parameters");
            }
            
        }
        else if(command1[0] == "ClimateByLocationUnit"){
            //ClimateByLocationUnit Barrie f
            let op1=command1[1];
            let op2=command1[2];
            try{
                const response1 = await axios.get('https://yahoo-weather5.p.rapidapi.com/weather',{
                    params: {location: op1, format: 'json', u: op2},
                    headers: {
                        'X-RapidAPI-Key': '45fdd3f46cmshda55a5285116725p199d26jsna7734939e384',
                        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
                    }
                });

                await message.reply(("Pressure: "+response1.data.current_observation.atmosphere.pressure+" Humidity: "+response1.data.current_observation.atmosphere.humidity+" Temperature: "+response1.data.current_observation.condition.temperature).toString());
           
            }
             catch(ex){
                await message.reply("Invalid parameters");
            }
        }
        else if(command1[0] == "ClimateByZipCity"){
            //ClimateByZipCity 35004 Moody  
            let op1=command1[1];
            let op2=command1[2];
            let op3=command1[3];

            try{
                const response1 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',{
                params: {zip: op1, city: op3},
                headers: {
                    'X-RapidAPI-Key': '45fdd3f46cmshda55a5285116725p199d26jsna7734939e384',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                });

                await message.reply(("Humidity="+response1.data.humidity+" Wind speed="+response1.data.wind_speed).toString());
            }
            catch(ex){
                await message.reply("Invalid parameters");
            }
        }
        else if(command1[0] == "IpGeoLocation"){
            //IpGeoLocation city
            let op1=command1[1];

            try{
                const response1 = await axios.get('https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11',{
                params: {format: 'json', filter: op1},
                headers: {
                    'X-RapidAPI-Key': '45fdd3f46cmshda55a5285116725p199d26jsna7734939e384',
                    'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
                  }
                });

                await message.reply(("Type of Ip address: "+response1.data.type+" City: "+response1.data.city.name).toString());
            }
            catch(ex){
                await message.reply("Invalid parameters");
            }
        }
        else if(command1[0] == "BestPlayer"){
            //BestPlayer 2019 39
            let op1=command1[1];
            let op2=command1[2];

            try{
                const response1 = await axios.get('https://api-football-beta.p.rapidapi.com/players/topscorers',{
                params: {season: op1, league: op2},
                headers: {
                        'X-RapidAPI-Key': '45fdd3f46cmshda55a5285116725p199d26jsna7734939e384',
                        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
                    }
                });

                await message.reply(("Name: "+response1.data.response[0].player.firstname+" Nationality: "+response1.data.response[0].player.nationality+" Weight: "+response1.data.response[0].player.weight).toString());
           
            }
             catch(ex){
                await message.reply("Invalid parameters");
            }
        }
        else{
            await message.reply("Wrong command");
        }

    }
    
});

client.login('MTAzMDYyNzMzMjQwODQ3OTc1NQ.GRnbFl.JfxhzrUS_OBMz8gwZ0dV11VnDsD8N8-ju_PTPw');