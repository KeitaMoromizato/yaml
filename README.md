# yaml2resume

Generate Resume(japanese) from yaml file.

## Install

```shell
npm install yaml2resume -g
```

## Run

```shell
y2r resume.yml
```

or

```shell
y2r resume.yml -o resume.pdf
```

### yaml format

```yml
resume:
  profile:
    name:
      kana: 'ほげほげ たろう'
      name: 'hogehoge 太郎'
    dateOfBirth:
      year: 2000
      month: 1
      date: 1
    gender: '男'
    address:
      kana: 'トウキョウト シブヤク '
      post: '111-1111'
      address: '東京都 渋谷区 xxxxx 1-1-1'
    tel: 123-4567-8900
    picture:
      path: ./dev/icon.jpg
  careers:
    - year: 2000
      month: 3
      content: 'hogehoge学校 卒業'
    - year: 2000
      month: 4
      content: 'piyopiyo株式会社 入社'
    - year: 2010
      month: 4
      content: 'piyopiyo株式会社 退職'
  licenses:
    - year: 2010
      month: 4
      content: 'ITパスポート 合格'
    - year: 2014
      month: 12
      content: 'MOS 合格'
  appeals:
    - 'React/Angular/Vueができます。ジェイクエリーはできません'
    - 'お金はいっぱいほしいです'
  commuteTime:
    hour: 1
    minutes: 30
  family:
    dependant: 2
    spouse: true
    supportingDuty: true
  options:
    - '雇ってください'
```

## Lisence

MIT

