const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347019351861";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2xHS2gzTFdxbytkZTNkRkhqa2lnV28wRlk4V20yUm1oVzFHVTVHUHZHcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMVdJNUQ2ZFBRWEdLd3dmSW5URHhmd1wiLFxuICBcInBob25lSWRcIjogXCI2MjFiMDNlMS1mMjgzLTQ4YTMtOTY1Yy1hNzQ1N2NiYWQxMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAxODYsXG4gICAgICAyMTAsXG4gICAgICAxNTUsXG4gICAgICA3MyxcbiAgICAgIDQ2LFxuICAgICAgMjQ5LFxuICAgICAgNzYsXG4gICAgICAxOTMsXG4gICAgICAzOCxcbiAgICAgIDg0LFxuICAgICAgMzYsXG4gICAgICAxMDEsXG4gICAgICA5MyxcbiAgICAgIDEwOCxcbiAgICAgIDQwLFxuICAgICAgMTUyLFxuICAgICAgMTc3LFxuICAgICAgMTUsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE0MCxcbiAgICAgIDExNixcbiAgICAgIDcwLFxuICAgICAgMjUxLFxuICAgICAgMTQsXG4gICAgICAxNCxcbiAgICAgIDE2MCxcbiAgICAgIDE0MSxcbiAgICAgIDE2MCxcbiAgICAgIDE1LFxuICAgICAgMTczLFxuICAgICAgMTk3LFxuICAgICAgNTAsXG4gICAgICAxOTUsXG4gICAgICAxNixcbiAgICAgIDI2LFxuICAgICAgOTgsXG4gICAgICAxODMsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUkpUNTVTR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxOTM1MTg2MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTY5NjM0MDg1NjQ0NDI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZi9zRDhRME96bXNnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxLT3BmVm1yR2xSbnUvOU1lVXBQU052OUZzRnBZZ1Y2MTV1UVBVUkxORTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFdJa3R2cStvOGF5Y05UZlJBRFEvRXJKYnhOY014K201V2pwMDhMNlp6TkVIM1YrYmdRZllvWGQxcWZJYU4xWDZSWFNsbDNPRmxXVHNmb041Y0Y4QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2YvMGZPcXp5Z1hsQ1QvRE9Bd0svUVMxRGp5cmJFZUUrUlRwVlZWMmZNcDFZdENOSVM4bmU2ZER1b2xuVzdEME5SU3BieXZDY3ZyYVB0eElrWityaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxOTM1MTg2MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzE1NTQxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU8velwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTy96Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
