const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    liangzi: { api: 'https://cj.lziapi.com', name: '量子资源' }
    feifan: { api: 'https://www.ffzyapi.com', name: '非凡资源' }
    ck: { api: 'https://www.ckzyplay.com', name: 'CK资源' }
    '360': { api: 'https://360zy.tv', name: '360资源' }
    tianya: { api: 'https://tyyszy.com', name: '天涯资源' }
    heimuer: { api: 'https://json.heimuer.xyz', name: '黑木耳影视' }
    xinhuawei: { api: 'https://cjhw.me', name: '新华为' }
    qiqi: { api: 'https://www.qiqidys.com', name: '七七资源' }
    fantuan: { api: 'https://www.fantuan.tv', name: '饭团影视' }
    douban: { api: 'https://dbzyapi.com', name: '豆瓣资源' }
    hongniu: { api: 'https://hongniuzy2.com', name: '红牛资源' }
    jinying: { api: 'https://jyzyapi.com', name: '金鹰资源' }
    lehuo: { api: 'https://lehootv.com', name: '乐活影视' }
    tiantang: { api: 'https://vipmv.cc', name: '天堂资源' }
    huya: { api: 'https://www.huyaapi.com', name: '虎牙资源' }
    haiwai: { api: 'https://haiwaikan.com', name: '海外看' }
    laoya: { api: 'https://api.apilyzy.com', name: '老鸭资源' }
    '1080': { api: 'https://api.1080zy.com', name: '1080资源' }
    kuaiyun: { api: 'https://www.kuaiyunapi.com', name: '快云资源' }
    languang: { api: 'https://lgzyapi.com', name: '蓝光资源' }
    xingyun: { api: 'https://xingyunapi.com', name: '星云资源' }
    kuyun: { api: 'https://kuyunapi.com', name: '酷云资源' }
    subo: { api: 'https://suboapi.com', name: '速播资源' }
    chaoqing: { api: 'https://chaoqingapi.com', name: '超清资源' }
    yunbo: { api: 'https://yunboapi.com', name: '云播资源' }
    aikan_z: { api: 'https://aikanz.com', name: '爱看资源' }
    aikan_y: { api: 'https://www.aikanav.com', name: '爱看影视' }
    kankan_z: { api: 'https://kankanzy.com', name: '看看资源' }
    kankan_y: { api: 'https://www.kankanys.com', name: '看看影视' }
    jiujiu_z: { api: 'https://99zyapi.com', name: '久久资源' }
    jiujiu_y: { api: 'https://99ysapi.com', name: '久久影视' }
    tiantian_z: { api: 'https://tiantianzy.com', name: '天天资源' }
    tiantian_y: { api: 'https://tiantianys.com', name: '天天影视' }
    pipi_z: { api: 'https://pipizy.com', name: '皮皮资源' }
    pipi_y: { api: 'https://pipiyingshi.com', name: '皮皮影视' }
    youyou_z: { api: 'https://youyouzy.com', name: '优优资源' }
    youyou_y: { api: 'https://youyouys.com', name: '优优影视' }
    bobo_z: { api: 'https://bobozy.com', name: '波波资源' }
    bobo_y: { api: 'https://boboys.com', name: '波波影视' }
    dada_z: { api: 'https://dadaapi.com', name: '达达资源' }
    dada_y: { api: 'https://dadays.com', name: '达达影视' }
    feifei_z: { api: 'https://feifeiapi.com', name: '飞飞资源' }
    feifei_y: { api: 'https://feifeiys.com', name: '飞飞影视' }
    longlong_z: { api: 'https://longlongapi.com', name: '龙龙资源' }
    longlong_y: { api: 'https://longlongys.com', name: '龙龙影视' }
    fengfeng_z: { api: 'https://fengfengapi.com', name: '凤凤资源' }
    fengfeng_y: { api: 'https://fengfengys.com', name: '凤凤影视' }
    qilin_z: { api: 'https://qilinapi.com', name: '麒麟资源' }
    qilin_y: { api: 'https://qilinys.com', name: '麒麟影视' }
    fenghuang_z: { api: 'https://fenghuangapi.com', name: '凤凰资源' }
    fenghuang_y: { api: 'https://fenghuangys.com', name: '凤凰影视' }
    xiongmao_z: { api: 'https://xiongmaoapi.com', name: '熊猫资源' }
    xiongmao_y: { api: 'https://xiongmaoys.com', name: '熊猫影视' }
    laohu_z: { api: 'https://laohuapi.com', name: '老虎资源' }
    laohu_y: { api: 'https://laohuys.com', name: '老虎影视' }
    shizi_z: { api: 'https://shiziapi.com', name: '狮子资源' }
    shizi_y: { api: 'https://shiziys.com', name: '狮子影视' }
    baozi_z: { api: 'https://baoziapi.com', name: '豹子资源' }
    baozi_y: { api: 'https://baoziys.com', name: '豹子影视' }
    yelang_z: { api: 'https://yelangapi.com', name: '野狼资源' }
    yelang_y: { api: 'https://yelangys.com', name: '野狼影视' }
    xiongying_z: { api: 'https://xiongyingapi.com', name: '雄鹰资源' }
    xiongying_y: { api: 'https://xiongyingys.com', name: '雄鹰影视' }
    tianma_z: { api: 'https://tianmaapi.com', name: '天马资源' }
    tianma_y: { api: 'https://tianmays.com', name: '天马影视' }
    shenlong_z: { api: 'https://shenlongapi.com', name: '神龙资源' }
    shenlong_y: { api: 'https://shenlongys.com', name: '神龙影视' }
    xianhu_z: { api: 'https://xianhuapi.com', name: '仙狐资源' }
    xianhu_y: { api: 'https://xianhuys.com', name: '仙狐影视' }
    moxian_z: { api: 'https://moxianapi.com', name: '魔仙资源' }
    moxian_y: { api: 'https://moxianys.com', name: '魔仙影视' },
    zhanshen_z: { api: 'https://zhanshenapi.com', name: '战神资源' }
    zhanshen_y: { api: 'https://zhanshenys.com', name: '战神影视' }
    doushen_z: { api: 'https://doushenapi.com', name: '斗神资源' }
    doushen_y: { api: 'https://doushenys.com', name: '斗神影视' }
    fashen_z: { api: 'https://fashenapi.com', name: '法神资源' }
    fashen_y: { api: 'https://fashenys.com', name: '法神影视' }
    jianshen_z: { api: 'https://jianshenapi.com', name: '剑神资源' }
    jianshen_y: { api: 'https://jianshenys.com', name: '剑神影视' }
    qiangshen_z: { api: 'https://qiangshenapi.com', name: '枪神资源' }
    qiangshen_y: { api: 'https://qiangshenys.com', name: '枪神影视' }
    paoshen_z: { api: 'https://paoshenapi.com', name: '炮神资源' }
    paoshen_y: { api: 'https://paoshenys.com', name: '炮神影视' }
    cheshen_z: { api: 'https://cheshenapi.com', name: '车神资源' }
    cheshen_y: { api: 'https://cheshenys.com', name: '车神影视' }
    chuanshen_z: { api: 'https://chuanshenapi.com', name: '船神资源' }
    chuanshen_y: { api: 'https://chuanshenys.com', name: '船神影视' }
    jishen_z: { api: 'https://jishenapi.com', name: '机神资源' }
    jishen_y: { api: 'https://jishenys.com', name: '机神影视' }
    wangshen_z: { api: 'https://wangshenapi.com', name: '网神资源' }
    wangshen_y: { api: 'https://wangshenys.com', name: '网神影视' }
    yunshen_z: { api: 'https://yunshenapi.com', name: '云神资源' }
    yunshen_y: { api: 'https://yunshenys.com', name: '云神影视' }
    yushen_z: { api: 'https://yushenapi.com', name: '雨神资源' }
    yushen_y: { api: 'https://yushenys.com', name: '雨神影视' }
    leishen_z: { api: 'https://leishenapi.com', name: '雷神资源' }
    leishen_y: { api: 'https://leishenys.com', name: '雷神影视' }
    fengshen_z: { api: 'https://fengshenapi.com', name: '风神资源' }
    fengshen_y: { api: 'https://fengshenys.com', name: '风神影视' }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
