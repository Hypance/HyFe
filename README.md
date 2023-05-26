# Dashboard
![Cüzdan Bilgileri](./readme/assets.png)

Sağa kaydırıldığı zaman 
**Total Assets Value** Kulanıcının cüzdanındaki toplam para

**All Time Profit** Kulanıcının toplam karı

**30 Days Profit** Kulanıcının 30 gün toplam karı

**7 Days Profit** Kulanıcının 7 gün toplam karı

**24 Hours Profit** Kulanıcının 24 saat toplam karı

## Transactions
![Son İşlem Bilgileri](./readme/transactions.png)

Kulanıcının son 10 işlemini gösterir. 
**View All** butonuna tıklandığında Transaction sayfasına gider.(Transactions sayfası yapılacak. Open Trades sayfasının benzeri olacak)

Coin ismi,İkon, Poziyonu Tipi**(LONG-SHORT)**, İşlem Tarihi, Kar Oranı, Pozisyona girilen tutar.

## Favorites Coins
![Favorites Coins](./readme/fav-coin.png)

Kullanıcının favoriye aldığı coinleri gösterir. Yeni kullancılılara default olarak üç coin atar.

Coin adı, Resmi, Coinin anlık değeri, Son 24 içindeki yükseliş/düşüş oranı

## Open Trades
![Open Trades](./readme/open-trades.png)

Kullanıcının işlemde olan coinlerini listeler.

Coin ikon, adı, işleme girdiği andaki fiyat, Son fiyat, kar oranı, Graph

**View All Open Trades** butonuna tıkladığı zaman Open Trades sayfasına gidecek.


# Markets
![Markets](./readme/markets.png)

Websocket ile bilgileri Binance Futures API'dan alacak. Sadece görseldeki alanlar olacak. ***Change'de 1h-4h-24h olacak.***

# Strategies
![Strategies](./readme/Strategies.png)

Sayfada infinity-scroll ile strategyler yüklenecek.

**Delete** butonuna basıldığı zaman popup açılacak. Mesaj olarak ***Bu stratejiyi silmek istediğinize emin misiniz?*** çıkacak. Ok ve Cancel butonları olacak. Seçime göre ilgili strateejiyi silecek veya iptal edecek.

**Edit** butonuna basıldığı zaman CreateStrategy sayfası açılacak ama inputlar dolu olarak gelecek.

![Strategies](./readme/edit-strategy.png)

Başlıkda Edit Strategy yazacak. Altta yer alan butonda ise Save Changes yazacak.

# Create Strategy

![Create Strategy](./readme/create-strategy.png)

Create Strategy sayfasında Create butonuna tıklandığı zaman alert verecek. ***Stratejiniz başarılı bir şekilde oluşturuldu*** veya ***Strateji kaydedilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya sistem yöneticisi ile iletişime geçin.***

Overview alanında girilen inputlar alt alta şekilde listelenecek.

# Bot

![Bot](./readme/bot-list.png)

Sayfada infinity-scroll ile botlar yüklenecek.

Sağ-üst alanda yer alan butona basıldığı zaman
- Detail
- Bot aktif ise ***Passive*** değilse ***Active*** yazacak.
- Delete butonuna basıldığı zaman popup açılacak. Mesaj olarak ***Bu botu silmek istediğinize emin misiniz?*** çıkacak. Ok ve Cancel butonları olacak. Seçime göre ilgili botu silecek veya iptal edecek.

## Create Bot
Bot oluşturulduktan sonra eğer işlem başarılı ise işlem başarılı diye uyarı verilecek ve bot listesine yönlendirilecek. Eğer işlem başarısız ise aynı sayfad kalacak.


# Bot

![Bot](./readme/backtest-list.png)

Sayfada infinity-scroll ile backtestler yüklenecek.

Kutu içindeki sağ-üst alanda yer alan butona basıldığı zaman
- Start Test - Stop Test
- Detail
- Delete butonuna basıldığı zaman popup açılacak. Mesaj olarak ***Bu testi silmek istediğinize emin misiniz?*** çıkacak. Ok ve Cancel butonları olacak. Seçime göre ilgili testi silecek veya iptal edecek.

## Create Backtest
Create Bot'un aynısı olacak. 
Test oluşturulduktan sonra eğer işlem başarılı ise işlem başarılı diye uyarı verilecek ve backtest listesine yönlendirilecek. Eğer işlem başarısız ise aynı sayfada kalacak.
