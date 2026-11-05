export const dates=Array.from({length:29},(_,i)=>new Date(Date.UTC(2027,0,23+i)).toISOString().slice(0,10));
export function dayLabel(d:string,zh=false){return new Date(d+'T12:00:00Z').toLocaleDateString(zh?'zh-HK':'en-GB',{month:'short',day:'numeric',timeZone:'UTC'});}
export function weekday(d:string,zh=false){return new Date(d+'T12:00:00Z').toLocaleDateString(zh?'zh-HK':'en-GB',{weekday:'short',timeZone:'UTC'});}
export function stayFor(data:any,date:string){return data.stays.find((s:any)=>!s.base&&s.start<=date&&date<s.end)||data.stays.find((s:any)=>s.base&&s.start<=date&&date<s.end);}
export function cityFor(data:any,date:string){return stayFor(data,date)?.city||(date<'2027-01-24'||date>='2027-02-20'?'Travel':'Penang');}
export function suggestions(data:any,w:any){return dates.filter(d=>w.region==='Hong Kong'?d>='2027-02-12'&&d<='2027-02-19':d>='2027-01-25'&&d<='2027-02-10').filter(d=>w.region==='Hong Kong'||cityFor(data,d)==='Penang').sort((a,b)=>a===w.preferred?-1:b===w.preferred?1:a.localeCompare(b)).slice(0,7);}
// Hong Kong Observatory 2027 Gregorian–Lunar conversion table.
// Fixed trip-range mapping avoids ICU/browser calendar differences in 2027.
// https://www.hko.gov.hk/en/gts/time/calendar/pdf/files/2027e.pdf
export function lunarDate(date:string){if(!dates.includes(date))return '';const after=date>='2027-02-06';const n=after?Math.round((Date.parse(date+'T00:00:00Z')-Date.parse('2027-02-06T00:00:00Z'))/86400000)+1:Math.round((Date.parse(date+'T00:00:00Z')-Date.parse('2027-01-23T00:00:00Z'))/86400000)+16;const digits=['','一','二','三','四','五','六','七','八','九'];const day=n<=10?(n===10?'初十':'初'+digits[n]):n<20?'十'+digits[n-10]:n===20?'二十':n<30?'廿'+digits[n-20]:'三十';return (after?'正月':'臘月')+day;}
export function festival(date:string,zh=false){const labels:Record<string,[string,string]>={'2027-02-05':['除夕','New Year’s Eve'],'2027-02-06':['年初一','Lunar New Year'],'2027-02-07':['年初二','New Year · Day 2'],'2027-02-08':['年初三','New Year · Day 3'],'2027-02-20':['元宵節','Lantern Festival']};return labels[date]?.[zh?0:1]||'';}
