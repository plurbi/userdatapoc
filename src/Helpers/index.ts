import { UserData } from "@/models/userData";

function groupByUserTokenAndPublicIp(source: UserData[]): { [key: string]: ResumeNode[] } {
    const groupedObj: { [key: string]: ResumeNode[] } = {};
  
    for (const item of source) {
      const key = `${item.userToken}-${item.publicIP}`;
      if (!groupedObj[key]) {
        groupedObj[key] = [];
      }
      groupedObj[key].push();
    }
  
    return groupedObj;
  }