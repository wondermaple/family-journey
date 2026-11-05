export const LIVE_URL='https://family-journey-2027.secretbongo1.chatgpt.site';
export const onGitHub=typeof window!=='undefined'&&window.location.hostname==='wondermaple.github.io';
export const apiBase=onGitHub?LIVE_URL:'';
export const homePath=onGitHub?'/family-journey/':'/';
export const guestPath=onGitHub?'/family-journey/guests/':'/guests';
export const editURL=LIVE_URL+'/signin-with-chatgpt?return_to=%2F';
