// some 혹은 every 메소드 사용하기
// some 메소드는 조건을 만족하는 요소가 1개 이상 있는지 확인하는 메소드이고, 
// 반대로 every 메소드는 모든 요소가 조건을 만족하는지를 확인하는 메소드.

const spait = [
  { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
  { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
  { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
  { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
  // team의 members에 접근해서 some 메소드 사용. 
  const result = team.members.some((member) => 
  // member 요소에 '스파이'와 일치하는게 하나라도 있는가?
    member !== '스파이');
  if (result == true) { // 이 때 result의 값은 true 혹은 false뿐이므로 == 이후 생략 가능
    message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
  } else {
     message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
  }
	console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));