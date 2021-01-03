// спсок реф 
var items = ['http://www.google.com/url?sa=t&rct=j&q=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%bd%d0%b0+%d0%b4%d0%be%d0%bc%d1%83&source=web&cd=5&sqi=2&ved=0CFYQFjAF&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX8rGE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.cWc',
'http://www.google.com/url?sa=t&rct=j&q=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%b4%d0%be%d0%bc%d0%b0&source=web&cd=3&sqi=2&ved=0CFYQFjAD&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX-vJE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.bGQ',
'http://www.google.com/url?sa=t&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0&source=web&cd=3&sqi=2&ved=0CFYQFjAD&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX-HKE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.cWc',
'http://www.google.com/url?sa=t&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d0%b1%d1%83%d0%ba%d1%81%d1%8b&source=web&cd=9&sqi=2&ved=0CFYQFjAJ&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX7XEE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.bGQ',
'http://www.google.com/url?sa=t&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0&source=web&cd=5&sqi=2&ved=0CFYQFjAF&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX7LGE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.bGE',
'http://www.google.com/url?sa=t&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b+%d0%b4%d0%be%d0%bc%d0%b0&source=web&cd=9&sqi=2&ved=0CFYQFjAJ&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX7zJE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.bGQ',
'http://www.google.com/url?sa=t&rct=j&q=%d0%a2%d0%be%d0%bf+%d0%b1%d1%83%d0%ba%d1%81%d0%be%d0%b2&source=web&cd=8&sqi=2&ved=0CFYQFjAI&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX8rJE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.d24',
'http://www.google.com/url?sa=t&rct=j&q=%d0%a2%d0%be%d0%bf+%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d0%b9+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0&source=web&cd=9&sqi=2&ved=0CFYQFjAJ&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX8PJE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.bGQ',
'http://www.google.com/url?sa=t&rct=j&q=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%b4%d0%bb%d1%8f+%d1%81%d1%82%d1%83%d0%b4%d0%b5%d0%bd%d1%82%d0%b0&source=web&cd=6&sqi=2&ved=0CFYQFjAG&url=https%3a%2f%2fwww.moneyfromweb.ga%2f&ei=NiLdX8-JE8SPrge8y4DwAQ&usg=AFQjCNH2FlbVJFT9lE2f4seSJMk9s2JHSw&bvm=bv.84349003,d.cWc',
'https://yandex.ru/yandsearch?text=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%bd%d0%b0+%d0%b4%d0%be%d0%bc%d1%83',
'https://yandex.ru/yandsearch?text=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%b4%d0%be%d0%bc%d0%b0',
'https://yandex.ru/yandsearch?text=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0',
'https://yandex.ru/yandsearch?text=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d0%b1%d1%83%d0%ba%d1%81%d1%8b',
'https://yandex.ru/yandsearch?text=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0',
'https://yandex.ru/yandsearch?text=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b+%d0%b4%d0%be%d0%bc%d0%b0',
'https://yandex.ru/yandsearch?text=%d0%a2%d0%be%d0%bf+%d0%b1%d1%83%d0%ba%d1%81%d0%be%d0%b2',
'https://yandex.ru/yandsearch?text=%d0%a2%d0%be%d0%bf+%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d0%b9+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0',
'https://yandex.ru/yandsearch?text=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%b4%d0%bb%d1%8f+%d1%81%d1%82%d1%83%d0%b4%d0%b5%d0%bd%d1%82%d0%b0',
'https://www.youtube.com/',
'https://hi-tech.mail.ru/',
'https://businessmens.ru/',
'https://vk.com/',
'https://ok.ru/',
'https://www.facebook.com/',
'https://toloka.yandex.ru/',
'https://psm7.com/',
'https://roi-consulting.ru/',
'https://www.kadrof.ru/',
'https://www.instagram.com/',
'https://www.tiktok.com',
'https://www.avito.ru/',
'https://www.wikipedia.org/',
'https://www.gismeteo.ru/',
'https://lenta.ru/',
'https://www.wildberries.ru/',
'https://rbc.ru/',
'https://aliexpress.ru/',
'https://www.kinopoisk.ru/',
'https://www.sberbank.ru/',
'https://www.drom.ru/',
'https://www.livejournal.com/',
'https://pikabu.ru/',
'https://www.ozon.ru/',
'http://www.google.com/aclk?sa=L&ai=kpuI_kq-UJ-OnUCTijORkjJqqOWaxIOyfgPYQBkYirQc-kECSOsZPauWZYolhkU_IVVPmJRA_RNGhVwsYoMdBkCEOOfvj_KlVWfyXxNvTwXUDLFnundIKVrLQXWktOC-fizfsbKDPtinVGV&num=4&sig=cjJlGPqQqXtQzoKvYXCuqwFpuMmghubfrF&rct=j&q=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%bd%d0%b0+%d0%b4%d0%be%d0%bc%d1%83&ved=0CFYQFjAEOAQ&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=tfrUlFJZKXeDdlWcAJXroDjSfDcNlNogtRrpzqsGmKJTBeTjvxZvwSSKnKCyZzecghpoGXWsiUuKbdjAIYt_TfFZzSdwYYbYjVLpcBwelpHCuvCDrANFHrjQeJkEpwuwSwewZUKdyEIVNzgnkq_bppkFiLD&num=3&sig=iNzJRgPYXcxVxfpFCXrprzDOeazraGxQ_T&rct=j&q=%d0%97%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%be%d0%ba+%d0%b4%d0%be%d0%bc%d0%b0&ved=0CFYQFjAE&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=lLaaotvirWb-tzFjNWjSshXbiVYWzBUarRyWcQbHLr-pmyUBiDrfHbqE_hEDMchUbFNqFSbBUqcIhfmEHpCicCCiyeRU_alNjcgdIiACKYijWLGFk-nkMODwzlbdOkMBaVZv-FbaM&sig=HhhuyDFkJmgQ_ioDzJsMDwuPYumXFrTFLM&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0&ved=0CFYQFjACOAQ&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=FDaNLqwapBfFgCum-hhPuq_FctgcwaehSwiTWWvWYwNPFIwPMHZdTGUgFVyjgiP-bmWDjenmxgRTEjQfEyVSJlsnXxluBUGMLMGHYGXnZCzLSEsMCzfPS_aYGYxbdKegMyftwfojAMzb_ZfLPZAuXYGJ&num=4&sig=PQQCMDExTxiHUnpSn_fUfUvZqfLUvZZJZU&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d0%b1%d1%83%d0%ba%d1%81%d1%8b&ved=0CFYQFjAHOAE&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=ZdDkEvqYEEVeXBYeFERYovfvbmdwJnZimuyHwKdDBGNdnurnGjYdGi_N_LcTP_jYajtjzlQbLzaXBWmKVhFwzoLLiUJPNoENMZWIWgTBjPXBnyQnXraCfHGENSPfwlMdjSbTQkJpakfpFvVWYZjbY&num=3&sig=dPT_akyZvnsaodpbbtDQdbruhrjIuIWrfD&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f+%d0%b4%d0%bb%d1%8f+%d0%b7%d0%b0%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0&ved=0CFYQFjAFOAI&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=WIqRKchntFsZPBDamnkoMAUQNghbOnwSnnbBgnCEjaSJYhBfkcjSsYwlQqitYzjogMVDwjnQegxk-lvaJEYHIJezBYBGKznncytoZASWnjanDszPynFRgqqNmykVZaaslnbVFGKUzTLZiyufFFaXyxACTUahXkR&num=1&sig=Y_UJhVbKuIDoIIlZmTOY_HYnfeKItrdWCB&rct=j&q=%d0%9b%d1%83%d1%87%d1%88%d0%b8%d0%b5+%d1%81%d0%b0%d0%b9%d1%82%d1%8b+%d0%b4%d0%bb%d1%8f+%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b+%d0%b4%d0%be%d0%bc%d0%b0&ved=0CFYQFjADOAE&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt',
'http://www.google.com/aclk?sa=L&ai=JmlKLhBoeFmHJkJotGkcOtFYjgRVAFTcSbpULjoeaJSHXzGgBCzjNgJgddeudWNHORTCIPJjoGSzLmfmMJ-kCHBNubViFEloxnUJhxiFTROPeNCg-tUCEpvcoijSgseuNy-VlBAisfdLUFbE&num=3&sig=oiavVtAEFpIRXqXwrsnN_brXwsJnrfXsiS&rct=j&q=%d0%a2%d0%be%d0%bf+%d0%b1%d1%83%d0%ba%d1%81%d0%be%d0%b2&ved=0CFYQFjAF&adurl=https%3a%2f%2fwww.moneyfromweb.ga%2f&cad=rjt'];



// 1. Перемещение мыши на странице википедии
activateTab(0);
navigate('https://www.moneyfromweb.ga/', items[random(0,items.length)]);
wait(random(1700,2500));

// Перемещаем мышь в точку (100, 100) за 1.5 сек.
move(random(900,2000), random(100,1500), random(100,2500));
wait(random(300,1000));

// находим заголовок "принцип действия"
var elem = document.querySelectorAll('div');
// Выполняем прокрутку
wheel(1);
print('Страница прокручена на ' + window.scrollY + 'px');
// Перемещаем мышь в точку (10, 10)
// из точки (200, 300) за 1 сек.
move(random(900,2500), random(100,1500), random(100,2500));
wait(random(300,1000));


// Перемещаем мышь к заголовку "принцип действия" за 8 сек.
move(random(900,2500), random(100,1500), random(100,3500));

wheel(1);
move(random(700,1500), random(100,1500), random(100,2500));

set('popup', 1, 'openwin', 1);
click('viewport', 'custom', '0:0:width:height');
wait(random(150,3500));
move(random(700,1500), random(100,1500), random(100,2500));
move(random(700,1000), random(100,1500), random(100,2500));

activateTab(0);
wait(random(500,1000));
move(random(700,1000), random(100,1500), random(100,2500));
move(random(700,1000), random(100,1500), random(100,2500));

move(random(700,1000), random(100,1500), random(100,2500));
