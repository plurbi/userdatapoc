interface ResumeChildNode {
    key: string;
    PublicIp: string;
    ProductToken: string;
    ProductName: string;
  }
  
  class ResumeNode {
    key: string;
    UserToken: string;
    children: ResumeChildNode[];
  
    constructor(key: string, UserToken: string, children: ResumeChildNode[]) {
      this.key = key;
      this.UserToken = UserToken;
      this.children = children;
    }
  }