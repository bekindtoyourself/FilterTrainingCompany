var data = [
    '广州码神信息科技有限公司',
    "广州市宏龙网络科技有限公司",
    "广州天乙匠客科技有限公司",
    "先可思",
    "广州文智信息科技有限公司",
    "云软中创(北京)科技有限公司",
    "广西达森教育科技有限公司",
    "广州市川石信息技术有限公司",
    "云创新(北京)科技有限公司",
    "广州东紫华清信息科技有限公司",
    "广州逐日信息科技有限公司",
    "广州尊斌计算机科技有限公司",
    "广州市博睿微科信息技术有限公司",
    "上海贝笃网络科技有限公司",
    "广州穗兰科技有限公司",
    "广州玖维信息科技有限公司",
    "深圳志盟科技发展有限公司",
    "广州凯佳卓软件科技有限公司",
    "明岩信息科技有限公司",
    "广州海度网络科技有限公司",
    "上海集钢电子商务有限公司",
    "成华区宇辰百货经营部",
    "北大青鸟",
    "广州动点网络科技有限公司",
    "广西软博科技有限公司",
    "深圳博睿思创软件技术有限公司",
    "深圳市云彩互联科技有限公司",
    "牵引力科技",
    "粤凯",
    "猿马",
    "尚德机构",
    "广州汇才软件有限公司",
    "广州胖鱼网络科技有限公司",
    "广州先可思网络科技有限公司",
    "广东溢达科技有限公司",
    "广东华夏天网智能科技有限公司",
    "多迪",
    "北京才秀人人科技有限公司",
    "广州中软国际有限公司",
    "广州沃课信息技术有限公司",
    "广州中卓信息技术有限公司",
    "卓新智趣",
    "翡翠科技",
    "达内科技",
    "中软瑞达",
    "广州善班",
    "多迪互联网",
    "中软国际",
    "软世通学码思", "云唯plus", "融鼎汇成都金融服务外包有限公司", "四川乐蜂互动科技有限公司", "成都中星华宇科技有限公司", "成都新时代银通投资咨询有限公司", "成都互动维科软件有限公司", "成都汇达智联科技有限公司", "广东睿道共创科技有限公司", "四川魔力教育咨询有限公司", "成都火才人才科技有限公司", "四川格智网络科技有限公司", "广州纬润信息科技有限公司成都分公司", "中青才智教育投资(北京)有限公司", "成都迈锐特信息技术有限公司", "成都尚非科技有限公司", "森迪信息科技", "鼎育软件", "麦菲 尔膜", "高科(北京)", "闪克信息技术", "金睿云数据", "邦飞科技", "达内", "贝立美科技", "谢尔科技", "诚迅网络科技", "蜗牛创想", "蓝色曙光信息技术", "蓉渝云科技", "莫等闲教育", "荣新广育科技", "荣新中关村IT", "英才软件职业", "腾瑞恒信网络科技", "联成科大信息技术", "红糖科技", "神骏网络科技", "硅谷高科", "睿远商务信息咨询", "睿峰科技", "百年有为科技", "百单网", "登客网互联网科技", "瑞恒创想信息科技", "狮子座", "牛牛牛", "爱尚智观科技", "火山石网络", "清睿创新科技", "深圳市花花网网络", "深圳市奕非网络", "深圳市大森网云", "深圳市一览网络股份", "海文信息", "海德智和科技", "法赛特科技", "河北融海行房地产经纪", "沈阳茵特", "汇益商务信息咨询", "汇智动力", "汇新优科科技", "汇众益智科技", "武汉时光机科技", "武创信息科技", "欣阳科技", "森迪信息科技", "株式会社", "朗沃信息技术", "暮光时代科技", "智游网络", "智慧创想科技", "晶美莱特", "晟司科技", "晋佑科技", "旅烨网络科技", "新华电脑", "掌宝合力科技", "拾得科技", "拜纳睿", "才秀人人科技", "成都莫等闲教育", "成都翡翠科技", "成都旭祥科技", "成都宜简投资", "成都和禹网络", "成都博睿斯科网络", "成都华炜云商", "成都伟韧", "慧与信息技术", "恒安瑞达科技", "怪狗软件", "御雪网络科技", "广州留余香信息", "广州流氓兔网络", "广州七锦宫网络", "广东溢达科技", "广东樱雪科技", "巴人互动成都网络科技", "川软信息", "川汇科技", "尚观科技", "尚学堂", "安腾尚美软件", "学盟英才", "奕非网络", "奇美拉科技", "奇点物流", "奇佳科技", "天雄瑞科", "天纵科技", "天科同创科技", "天时利教育科技", "多迪", "四川金明科技", "四川格睿泰思信息科技", "四川复兴教育", "嘉宇三鑫", "君飞环保", "双维商贸", "博通科技", "博朗云软科技", "博为峰软件", "南充和胜网络", "卓维信息技术", "卓睿信息技术", "卓新智趣", "卓新思创科技", "华软高科", "华育网科技", "华育国际", "华育信息技术", "华夏天网智能科技", "华信智原科技", "华为高科", "华为云集", "北京金睿云", "北京邮电大学“互联网+”人才培养基地", "北京托普云数据", "北京成文科技", "北京博朗云", "北京博朗云软", "北京中科软云", "动听音乐文化传播", "创立信息科技有限责任公司", "创想天空", "创享源信息技术", "兴学信息技术", "修远堂科技", "佰国科技", "伟韧科技", "会圆宝科技", "优才创智", "优才创智科技", "众软科技", "众软信息科技", "互动无限科技", "云软高科", "云软互联", "云知学科技", "云图风墨信息", "乐胜科技", "久远银海软件股份", "中软", "中航云天", "中科软云数据", "中科合迅科技", "中睿天成企业管理咨询", "中卓信息技术", "中关村软件", "中关新才", "东软", "世纪云鼎信息", "世纪云创", "上海同百实业", "成都寰宇思创科技有限公司", "开网科技(北京)有限公司成都分公司", "中科富盈(北京)科技有限公司", "华为云软(北京）科技有限公司", "云汇高科（北京）科技有限公司", "成都智育互动科技有限公司", "成都汇能创科科技有限公司", "四川育道科技有限公司", "成都兄弟连教育咨询有限公司", "优越教育", "成都国信安信息产业基地有限公司", "成都蓉橙智睿", "成都闪客信息技术", "北京钧鼎世纪科技有限公司", "四川蜀泰化工科技有限公司", "成都智云汇通科技有限公司", "金指创亿（北京）科技有限公司", "四川智游网络科技有限公司", "四川智游网络科技有限公司", "四川狮子座互联网科技有限公司", "慧与信息技术成都有限公司", "成都三个字信息技术有限公司", "成都暮光时代科技有限公司", "中软创新（北京）科技有限公司", "成都寰宇思创科技有限公司", "成都优才创智", "巴人互动成都网络科技有限公司", "中软国际教育", "中软软件职业培训学校", "成都米可科技有限公司", "云软高科(成都)分公司", "中软物联（北京）科技有限公司", "成都华育信息技术职业技能培训学校", "四川天纵科技有限公司", "四川新华电脑学校", "博创华宇（北京）科技有限公司", "成都五月花劳动职业技能培训学校", "北京中青中关村软件人才基地", "北京数通国软信息技术有限公司成都分公司", "博创华宇", "蜗牛创想", "新华集团", "北京千锋互联科技有限公司", "成都博为峰软件技术有限公司", "中软开创", "成都达内科技有限公司青羊分公司", "华为高科（北京）软件有限公司", "北京荣新广育科技有限公司", "成都汇智动力信息技术有限公司", "成都糖果时代科技有限公司", "华信智原教育技术有限公司", "中关村大学生就业实训基地", "成都尚学堂科技有限公司", "成都微银众筹数据信息技术服务有限公司", "四川众信互联科技有限公司", "北京瞻前科技发展中心（瞻前科技）", "上海华杰职业技能培训有限公司", "成都达内科技", "成都国信安信息产业基地有限公司", "深圳市易民科技有限公司", "深圳市新果教育发展有限公司", "深圳市蓝音网络传媒有限公司", "深圳市瑞之图装饰设计有限公司", "深圳亚美兹设计研究院有限公司", "圣名圣点设计（深圳）有限公司", "深圳鸿讯计算机系统有限公司", "深圳市星乐软件有限公司", "深圳诺达思科技开发有限公司", "深圳慧思远科技开发有限公司", "深圳初炼影视传媒有限公司", "深圳市华大智创科技有限公司", "深圳诺达思科技开发有限公司", "深圳合众艾特信息技术有限公司", "深圳蓝海星空信息技术有限公司", "深圳鑫创信息技术有限公司", "深圳堉云信息科技有限公司", "深圳深软智能设备有限公司", "深圳市龙治网络科技有限公司", "深圳市中深软通科技有限公司", "深圳市程序猿教育科技有限公司", "深圳市荣盛合纵科技有限公司", "深圳市诚至软件有限公司", "深圳腾尚时代信息科技有限公司", "深圳市沃达创科有限公司", "深圳径舟科技开发有限公司", "深圳凌岳软件科技有限公司", "深圳市智联云谷科技有限公司", "深圳市云联天下科技有限公司", "深圳市尚天观科技有限公司", "启辰星创（深圳）网络科技有限公司", "慧学国际科技发展(深圳)有限公司", "深圳市协卓软件有限公司", "深圳市大方网络科技有限公司", "深圳市坚盛网络科技有限公司", "深圳市通天智达网络科技有限公司", "深圳市哈哈网络科技有限公司", "深圳市创星博网络科技有限公司", "深圳市普达源网络科技有限公司", "北京才秀人人科技有限公司", "深圳市坚盛网络科技有限公司", "深圳市诚与成网络科技有限公司", "深圳市威尔讯达科技有限公司", "深圳市翔聚佳和科技有限公司", "深圳市洁丽保鑫科技有限公司", "深圳市众亿通信息科技有限公司", "深圳市哈哈网络科技有限公司", "深圳市内达倾泉科技有限公司", "深圳市申南道网络科技有限公司", "深圳市新龙暴宇科技有限公司", "深圳市民宇游戏网络科技有限公司", "深圳市万度网络技术开发有限公司", "深圳市天瑞地安网络科技有限公司", "深圳市濠汇网络科技有限公司", "深圳壹柒捌网络科技开发有限公司", "深圳市佑博网络科技有限公司", "深圳市实端利鑫网络科技有限公司", "深圳市利宇宝利科技有限公司", "深圳市若辰科技有限公司", "深圳市哈哈网络科技有限公司", "深圳市一二招聘有限公司", "深圳市万鹏利通网络科技有限公司", "深圳市振讯网络科技有限公司", "深圳市恐龙谷网络科技有限公司", "深圳市瑞安制造网络科技有限公司", "深圳市海纳云游网络科技有限公司", "深圳市腾极讯科网络科技有限公司", "深圳市汇一道科技股份有限公司", "深圳市创意阁网络科技有限公司", "深圳市百利度康科技有限公司", "深圳市红鸟网络科技股份有限公司", "深圳市宇蓝宝泉网络科技有限公司", "深圳赛优软件设计有限公司", "深圳中星信息技术服务有限公司", "深圳惠科软件设计有限公司", "深圳市掌娱炫动信息技术有限公司", "广州中星集团有限公司深圳分公司", "深圳市泽林信息咨询有限公司", "深圳市汇特通网络科技有限公司", "深圳市大方网络科技有限公司", "深圳市民宇游戏网络科技有限公司", "深圳市益迅网络科技有限公司", "深圳市汇一道科技股份有限公司", "深圳市方特网络科技有限公司", "深圳市振讯网络科技有限公司", "深圳市远力网络科技有限公司", "深圳市民宇游戏网络科技有限公司", "深圳市蚁视网络科技有限公司", "深圳市智盈网络科技有限公司", "深圳市若辰科技有限公司", "深圳市哈哈网络科技有限公司", "深圳燕赵游戏网络科技有限公司", "深圳市天之腾科技有限公司", "深圳市鲲鹏网云科技有限公司", "深圳前海保百业互联科技有限公司", "深圳市博思创信息技术有限公司", "深圳市音伴尔科技有限公司", "深圳市华达世正科技有限公司", "深圳市谨信科技有限公司", "深圳市川石信息技术有限公司", "深圳市紫川软件有限公司", "深圳市华大智创科技有限公司", "深圳市皓诚网络科技有限公司", "深圳市时空数通科技有限公司", "深圳市汇欣腾达科技有限公司", "深圳市云联时空科技有限公司", "深圳市互联安达科技有限公司", "深圳市海通易达科技有限公司", "深圳市中企科创科技服务有限公司", "深圳市启航之星科技有限公司", "深圳市恩泽汇科技开发有限公司", "深圳市王络天下科技有限公司", "深圳市普晴科技有限公司", "深圳市泽林信息咨询有限公司", "深圳市华晨灏科技有限公司", "深圳思天下科技有限公司", "深圳百锤炼科技有限公司", "深圳哲芒科技有限公司", "深圳市它石信息科技有限公司", "深圳市鹏城互联科技有限公司", "深圳市鹏城互联科技有限公司", "深圳市前海云技术商学院有限公司", "深圳市一风行科技有限公司", "深圳市鑫精良科技有限公司", "深圳市宜众软件技术有限公司", "深圳市众软信息技术有限公司", "深圳市森竹科技有限公司", "深圳凌威信息技术有限公司", "深圳市中软易动科技有限公司", "深圳市安盛信息技术有限公司", "深圳七七元素科技有限公司", "深圳市文思联合网络技术有限公司", "深圳市狮子座信息技术有限公司", "深圳市畅享软件科技有限公司", "深圳市海枫科技有限公司", "速橙科技有限公司", "深圳市智蛙科技有限公司", "深圳云和数据信息技术有限公司", "深圳理方科技有限公司", "深圳市科唯网络科技有限公司", "深圳市斯密达网络科技开发有限公司", "深圳丰巢网络科技有限公司", "深圳市道云汇网络科技开发有限公司", "深圳洛萨科技有限公司", "深圳语风科技有限公司", "深圳七啸科技有限公司", "深圳市逸翔科技有限公司", "深圳市国信安信息科技有限公司", "北京华育光大科技发展有限公司", "深圳市瑞滋德科技有限公司", "深圳市丰泽高科信息技术有限公司", "深圳市新一代信息技术研究院", "深圳市华科网讯科技有限公司", "深圳市新一代信息技术研究院", "深圳英亚途科技有限公司", "深圳市武大新研科技有限公司", "深圳市易事派克科技有限公司", "深圳市华达世正科技有限公司", "深圳市普华博大科技有限公司", "深圳市嘀嘀达科技有限公司", "深圳云凌国际信息技术有限公司", "深圳市培睿教育科技有限公司", "深圳市人人上信息科技有限公司", "卓新智趣(北京)科技股份有限公司深圳分公司", "深圳市中软卓越教育科技有限公司", "深圳卓维信息技术有限公司", "深圳中软国际有限公司", "深圳市华维信息技术有限公司", "深圳市华讯技术服务有限公司", "北京亨隆伟业信息咨询有限责任公司深圳分公司", "深圳华育网科技发展有限公司", "深圳华育网科技发展有限公司", "深圳市宜众软件技术有限公司", "深圳逻辑思维软件有限公司", "深圳市鑫南豪网络科技有限公司", "深圳市佑谷暴网络科技有限公司", "深圳市宋福运网络科技有限公司", "深圳市伟泰安鑫网络科技有限公司", "深圳市洁宇网客网络科技有限公司", "深圳市慧极科技有限公司", "凌阳科技(深圳)有限公司", "深圳市海纳计算机科技有限公司", "深圳市资信利通科技有限公司", "深圳市门道信息咨询有限公司", "深圳二四六信息技术有限公司", "深圳国信安信息产业基地有限公司", "深圳尔雅赛诺信息技术有限公司", "深圳市提速度科技有限公司", "深圳文豆网络科技有限公司", "深圳市兴海韵通信息技术有限公司", "深圳思密特网络科技有限公司", "深圳易逐浪科技有限公司", "西安迪欧软件有限公司深圳分公司", "诺博源软件科技有限公司", "广州多迪网络科技有限公司深圳福田分公司", "广州多迪网络科技有限公司深圳宝安分公司", "广东晶美莱特科技有限公司", "广州流氓兔网络科技有限公司", "深圳市无忧互联科技有限公司", "广东华夏天网智能科技有限公司", "广东溢达科技有限公司", "广东樱雪科技有限公司", "广州流氓兔网络科技有限公司", "广东晶美莱特科技有限公司", "广州多迪网络科技有限公司深圳龙华分公司", "深圳博为峰信息技术有限公司", "深圳市科大信息技术有限公司", "深圳市泽林信息咨询有限公司", "深圳市起航创势科技有限公司", "武汉佰钧成技术有限责任公司深圳分公司", "深圳市新边界网络科技有限公司", "深圳市云游天下科技有限公司", "深圳市宝斯富通科技有限公司", "深圳市瑞合科技有限公司", "深圳曙之光教育咨询文化有限公司", "深圳市智联云谷科技有限公司", "深圳博睿同创信息技术有限公司", "深圳盛思科教文化有限公司", "深圳火星星际传播有限公司", "深圳市泰泽技术有限公司", "腾诚软件开发（深圳）有限公司", "腾诚软件开发（深圳）有限公司", "深圳市汇通合力科技有限公司", "深圳市炫彩星文化传媒有限公司", "深圳云天团电子商务有限公司", "深圳恩颂科技开发有限公司", "深圳市深嵌科技有限公司", "深圳市名瑞德国际金融服务有限公司", "深圳市深企互赢科技有限公司", "深圳市韵味世达科技有限公司", "深圳达内为上软件有限公司", "深圳市华辰软件开发科技有限公司", "深圳市博士天云软件开发有限公司", "深圳市极速传奇软件开发有限公司", "深圳市诺嘉冠科电子有限公司", "深圳前海星粤文化科技有限公司", "深圳市睿思源信息技术有限公司", "前海宝莉美（深圳）国际咨询服务有限公司", "深圳市大众万兴网络科技有限公司", "深圳市一二人力资源服务有限公司", "深圳市中科鸿图信息有限公司", "深圳市点时创新科技有限公司", "北京清大九鼎科技发展有限公司深圳分公司", "深圳市梦幻组合科技有限公司", "深圳市鸿程信息技术有限公司", "深圳瑞元信息技术有限公司", "广州多迪网络科技有限公司", "广州粤嵌通信科技股份有限公司", "广州市舜然网络科技有限公司", "广州市中拓信息科技有限公司", "广州市宏龙网络科技有限公司", "广州中星集团有限公司", "广州文豆网络科技有限公司", "广州森迪信息科技有限公司", "广东溢达科技有限公司", "广东晋佑科技股份有限公司", "广州神骏网络科技有限公司", "广东麦菲尔膜科技有限公司", "广州百单网互联网科技有限公司", "广东红松网络信息技术有限公司", "四川晟司科技发展有限公司", "四川海德智和科技有限公司", "四川红糖科技有限公司", "四川天纵科技有限公司", "成都谢尔科技有限公司", "成都乐胜科技有限公司", "成都闪克信息技术有限公司", "成都汇智动力信息技术有限公司", "成都蜗牛创想科技有限公司", "成都中软卓越信息技术有限公司", "成都互动无限科技有限公司", "成都蓝源信息技术有限公司", "成都国信安信息产业基地有限公司", "成都国嵌教育", "成都睿峰科技有限公", "武汉市华信智原科技有限公司", "上海清泽信息技术有限公司  ", "上海青业计算机科技有限公司 ", "上海游爱数码科技有限公司 ", "上海哈恩计算机科技有限公司 ", "上海昆童信息技术有限公司", "上海四域信息    ", "杰普软件科技有限公司", "上海沛鸿网络     ", "上海交大志盟", "上海启明软件", "上海海同信息 ", "上海子睿软件", "海同百实业", "上海升斯电子科技有限公司 ", "上海启明软件股份有限公司", "上海时盈信息科技有限公司     ", "上海积鼎信息科技  ", "上海凡狄信息技术有限公司", "上海微动信息科技有限公司  ", "上海索漫计算机科技有限公司 ", "上海致骋互联网科技有限公司", "上海万美软件科技有限公司", "上海万美软件科技有限公司", "上海挚品互联网科技有限公司", "北京亨隆伟业信息咨询有限责任公司", "北京艺耘诺布投资管理公司", "北京中金付通科技发展有限公司", "北京荣新广育科技有限公司", "中青中关村软件人才基地", "北京百测技术咨询有限公司", "中青中关村软件人才基地", "北京德润教育", "莱茵环球教育科技(北京)有限公司", "卓新智趣(北京)科技股份有限公司", "北京完美空间教育科技有限公司", "北京翡翠教育科技有限公司", "AAA教育集团", "国信清软科技有限公司", "中软国际有限公司", "完美空间游戏动漫学院(卓新思创)", "尚德机构", "云创科技", "上嵌基地", "信盈达公司", "深圳致聘互联网科技有限公司", "深圳兰石国际有限公司", "AADHK公司", "深圳金卡弗投资管理有限公司"
];

// var url = "https://code.aliyun.com/dimonwei/FuckTrainingCompany/raw/master/sources/FC.json";

var host = location.host;

//前程无忧
function job51() {
    var allA = document.querySelectorAll('a');
    for (var i = 0; i < allA.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (allA[i].innerHTML.indexOf(data[j]) !== -1) {
                console.log(allA[i].innerHTML);
                allA[i].parentElement.parentElement.remove();
                break;
            }
        }
    }
}

//智联招聘
function zhaopin() {
    var allA = document.querySelectorAll('a');
    for (var i = 0; i < allA.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (allA[i].innerHTML.indexOf(data[j]) !== -1) {
                console.log(allA[i].innerHTML);
                allA[i].parentElement.parentElement.parentElement.parentElement.remove();
                break;
            }
        }
    }
}

//拉勾
var lagou = function() {
    var allA = document.querySelectorAll('a');
    for (var i = 0; i < allA.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (allA[i].innerHTML.indexOf(data[j]) !== -1) {
                console.log(allA[i].innerHTML);
                allA[i].parentElement.parentElement.parentElement.parentElement.remove();
                break;
            }
        }
    }
}

//汇博人才网
function huibo() {
    // var a = document.getElementsByClassName("postIntro");
    // for (var i = 0; i < a.length; i++) {
    //     $.getJSON(url, function(data) {
    //         for (var j = 0; j < data.length; j++) {
    //             if (a[i].getElementsByTagName("a")[0].text == data[j]) {
    //                 console.log(a[i].getElementsByTagName("a")[0].text + "|" + data[j]);
    //             }
    //         }
    //     });
    // }
    console.log("正在开发");
}

function check() {
    if (host.indexOf("51job") != -1) {
        job51();
    }
    if (host.indexOf("huibo") != -1) {
        huibo();
    }
    if (host.indexOf("zhaopin") != -1) {
        zhaopin();
    }
    if (host.indexOf("lagou") != -1) {
        lagou();
    }
}

check();