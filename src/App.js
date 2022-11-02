const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 랜덤으로 겹치지 않는 셋자리 숫자 반환
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    const random = randomArray.join('');
    MissionUtils.Console.print(random);
}
}
const app = new App();
app.play();

module.exports = App;
