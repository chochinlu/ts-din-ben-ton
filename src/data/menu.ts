interface MenuDate {
  from: string
  to: string
}

export const menuDate: MenuDate = {
  from: '2020/09/07',
  to: '2020/09/11',
}

export interface Bento {
  id: number
  name: string
  price: number
  active: boolean
  date?: string[]
}

export interface BentoCompany {
  id: number
  name: string
  active: boolean
  date?: string[]
  bento: Bento[]
}

export const menu: BentoCompany[] = [
  {
    id: 1,
    name: '鮮䊹',
    active: true,
    bento: [
      {
        id: 1,
        name: '柚香蔥麻雞',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '味增腐乳雞',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '紐奧良烤豬',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '家傳醬味嫩雞(無飯)',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 2,
    name: '周董燒肉',
    active: true,
    bento: [
      {
        id: 1,
        name: '炭烤沙朗牛排餐',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '韓式烤牛肉壽司飯捲',
        price: 110,
        active: true,
      },
      {
        id: 3,
        name: '烤松板豬肉飯',
        price: 110,
        active: true,
      },
      {
        id: 4,
        name: '炙燒雞腿排飯',
        price: 110,
        active: true,
      },
    ],
  },
  {
    id: 3,
    name: '御選',
    active: true,
    bento: [
      {
        id: 1,
        name: '蔥燒鯛魚腹',
        price: 150,
        active: false,
      },
      {
        id: 2,
        name: '星馬沙爹嫩雞胸',
        price: 120,
        active: false,
      },
      {
        id: 3,
        name: '手撕鹹水雞胸',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '黑胡椒豬里肌',
        price: 120,
        active: true,
      },
      {
        id: 5,
        name: '檸檬橄欖鮭',
        price: 150,
        active: true,
      },
      {
        id: 6,
        name: '蜂蜜芥末嫩雞胸',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 4,
    name: '悟饕',
    active: true,
    bento: [
      {
        id: 1,
        name: '香焰烤雞',
        price: 100,
        active: true,
      },
      {
        id: 2,
        name: '塔香雞腿飯包',
        price: 100,
        active: true,
      },
      {
        id: 5,
        name: '正宗池上',
        price: 100,
        active: true,
      },
    ],
  },
  {
    id: 5,
    name: '福隆',
    active: true,
    bento: [
      {
        id: 1,
        name: '招牌特餐',
        price: 100,
        active: true,
      },
      {
        id: 2,
        name: '古早味排骨',
        price: 110,
        active: true,
      },
      {
        id: 3,
        name: '無骨雞腿飯',
        price: 110,
        active: true,
      },
    ],
  },
  {
    id: 6,
    name: '地方煮夫',
    active: true,
    bento: [
      {
        id: 1,
        name: '慢烤豬五花(慢烤梅花豬)',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '日式烤雞腿',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '無飯輕食餐(水煮嫩雞)',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '鹽烤鯛魚',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 7,
    name: '就是丼飯',
    active: true,
    bento: [
      {
        id: 1,
        name: '豬排丼',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '香烤鷄腿丼',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '牛排丼',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 8,
    name: '紅豆食府',
    active: true,
    bento: [
      {
        id: 1,
        name: '紅燒獅孑頭',
        price: 130,
        active: true,
      },
      {
        id: 2,
        name: '左宗棠雞',
        price: 130,
        active: true,
      },
      {
        id: 3,
        name: '宮保雞丁',
        price: 130,
        active: true,
      },
    ],
  },
  {
    id: 9,
    name: '河馬力士',
    active: true,
    bento: [
      {
        id: 1,
        name: '河馬餐(迷选香雞胸糙米時蔬飯)',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '水水餐(迷迭香寫胸馬鈴薯無飯)',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '巨巨餐(烤雞腿排糙米時蔬飯)',
        price: 150,
        active: true,
      },
    ],
  },
  {
    id: 10,
    name: '八麺玲瓏',
    active: true,
    bento: [
      {
        id: 1,
        name: '舒肥鷄胸肉',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '椒麻鷄便當',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '義式烤鷄腿排',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '葱爆牛肉',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 11,
    name: '拾悸',
    active: true,
    bento: [
      {
        id: 1,
        name: '主廚特調嫩鷄胸',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '醤烤無骨雞腿串',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '日式鋤燒牛肉丼',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '季節蔬果義式烘蛋餐(蛋奶素)',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 12,
    name: '(臺前花車)了凡',
    active: true,
    date: ['2020/08/31', '2020/09/04'],
    bento: [
      {
        id: 1,
        name: '叉燒燒肉便當',
        price: 140,
        active: true,
        date: ['2020/08/31', '2020/09/04'],
      },
      {
        id: 2,
        name: '油雞叉燒便當',
        price: 130,
        active: true,
        date: ['2020/08/31', '2020/09/04'],
      },
      {
        id: 3,
        name: '油雞便當',
        price: 130,
        active: true,
        date: ['2020/08/31', '2020/09/04'],
      },
      {
        id: 4,
        name: '叉燒便當',
        price: 130,
        active: true,
        date: ['2020/08/31', '2020/09/04'],
      },
    ],
  },
  {
    id: 13,
    name: '(臺前花車)紅豆食府',
    active: true,
    date: ['2020/08/31', '2020/09/02', '2020/09/03', '2020/09/04'],
    bento: [
      {
        id: 1,
        name: '宮保雞丁',
        price: 130,
        active: true,
        date: [
          '2020/08/31',
          '2020/09/01',
          '2020/09/02',
          '2020/09/03',
          '2020/09/04',
        ],
      },
      {
        id: 2,
        name: '紅燒獅子頭',
        price: 130,
        active: true,
        date: ['2020/08/31', '2020/09/02'],
      },
      {
        id: 3,
        name: '紹興醉雞',
        price: 150,
        active: true,
        date: ['2020/08/31', '2020/09/02'],
      },
      {
        id: 4,
        name: '左宗棠雞',
        price: 130,
        active: true,
        date: ['2020/09/01', '2020/09/03'],
      },
      {
        id: 5,
        name: '沽佬酥肉',
        price: 130,
        active: true,
        date: ['2020/09/01', '2020/09/03', '2020/09/04'],
      },
      {
        id: 6,
        name: '鎮江子排',
        price: 150,
        active: true,
        date: ['2020/09/01', '2020/09/03'],
      },
      {
        id: 7,
        name: '東坡肉',
        price: 150,
        active: true,
        date: ['2020/09/04'],
      },
    ],
  },
  {
    id: 14,
    name: '(臺前花車)究極',
    active: true,
    date: ['2020/09/01', '2020/09/03'],
    bento: [
      {
        id: 1,
        name: '日式南蠻雞',
        price: 130,
        active: true,
        date: ['2020/09/01'],
      },
      {
        id: 2,
        name: '香芒櫛瓜炒豬肉',
        price: 130,
        active: true,
        date: ['2020/09/01'],
      },
      {
        id: 3,
        name: '橙汁牛肉',
        price: 130,
        active: true,
        date: ['2020/09/01'],
      },
      {
        id: 4,
        name: '辣子雞丁',
        price: 130,
        active: true,
        date: ['2020/09/03'],
      },
      {
        id: 5,
        name: '醬燒蓮藕豬肉',
        price: 130,
        active: true,
        date: ['2020/09/03'],
      },
      {
        id: 6,
        name: '照燒牛肉',
        price: 130,
        active: true,
        date: ['2020/09/03'],
      },
    ],
  },
  {
    id: 15,
    name: '(臺前花車)周董',
    active: true,
    date: ['2020/09/02'],
    bento: [
      {
        id: 1,
        name: '炭烤大雞腿',
        price: 120,
        active: true,
        date: ['2020/09/02'],
      },
      {
        id: 2,
        name: '炭烤大雞排',
        price: 120,
        active: true,
        date: ['2020/09/02'],
      },
      {
        id: 3,
        name: '炭烤牛五花',
        price: 120,
        active: true,
        date: ['2020/09/02'],
      },
      {
        id: 4,
        name: '燒肉飯',
        price: 120,
        active: true,
        date: ['2020/09/02'],
      },
    ],
  },
]
