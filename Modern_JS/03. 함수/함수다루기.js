
// arguments : ������ argument�� ���� ���� �ִ� ��ü
//             ����迭�μ� indexing, .length, for of�� �� ��� ����

//10. ���Ӹ�����ġ
//arguments ��ü�� Ȱ���ؼ� �Լ��� ȣ���� �� �����ϴ� �ܾ���� 
//ù ���ڸ� ���� ���Ӹ��� ������ִ� firstWords �Լ��� �ϼ��ϴ� �ڵ�.

function firstWords() {
  let word = '';
  // arguments�� ���̸�ŭ �ݺ��ϴ� �ݺ���
  for(let i = 0; i < arguments.length; i++) {
    //word ������ arguments i��° ������ �ε��� 0�� ���� ���� ����
     word += arguments[i][0]
  }
    console.log(word);  
}
firstWords('����', '����', '�����');
firstWords('�ƴ�', '�ٳ�������', '���Ծ�');
firstWords('����', '������', '�߶�Գ�', '�������ϴ�');
firstWords('�ᱹ', '�ڹٽ�ũ��Ʈ��', '������', '������');
firstWords('������', '��Ȳ��', '�����', '�ʷϻ�', '�Ķ���', '����', '�����');

//---------------------------------------------------

// - **Rest Parameter :**  
//  ������ �Ķ���� ���� : ���Ķ����
//  �迭 �޼ҵ� ��� ����.
// 11. 1����� �Ÿ��°� ��

// rest parameter�� Ȱ���ؼ� �Լ��� ȣ���� �� ���� ���� �ƱԸ�Ʈ�� ������ ��� ù ��° �ƱԸ�Ʈ�� �����ϰ� 
// �� ��° �ƱԸ�Ʈ ���� �ϳ��� �ֿܼ� ����ϴ� ignoreFirst �Լ��� �ϼ��� �ּ���!

//1��° �Ķ���� ������ �������� args�� ����
function ignoreFirst(gen1, ...args) {
  for (let rests of args) {
    console.log(rests)
  }
}
ignoreFirst('1����', '2����', '3����');
ignoreFirst('������', '������', '�����');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);