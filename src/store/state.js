export default {
  allTime: 0, // 总计用时
  timer: null, // 定时器
  itemIndex: 0, // 第几题
  userAnswerArr: [], // 答案id列表
  itemDetail: [{
    'subjectId': 1,
    'typeId': 2,
    'text': '需要删除arr数组中的第i个元素（从第1个元素开始），最好的做法是？',
    'answerId' : 1,
    'notes': 'splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。',
    'answers': [{
      'id': 1,
      'text': 'arr.splice(i-1,1)',
      'isAnswer': 1
    }, {
      'id': 2,
      'text': 'arr.slice(0,n).concat(arr.slice(n+1,arr.length));',
      'isAnswer': 0
    }, {
      'id': 3,
      'text': `Array.prototype.remove=function(dx)　{　　
        if(isNaN(dx)||dx>this.length){return false;}　　
        for(var i=0,n=0;i<this.length;i++)　　{　　　　if(this[i]!=this[dx])　　　{　　　　　　this[n++]=this[i]　　　　}　　}　　this.length-=1　}`,
      'isAnswer': 0
    }, {
      'id': 4,
      'text': 'for(var i=0,n=0;i<this.length;i++)　　{　　　　if(this[i]!=this[dx])　　　　{　　　　　this[n++]=this[i]　　　　}　　}',
      'isAnswer': 0
    }]
  }, {
    'subjectId': 1,
    'typeId': 1,
    'text': `var x = new Boolean(false);
    if (x) {
      alert('hi');
    }
    var y = Boolean(0);
    if (y) {
      alert('hello'); 
    }
    的显示结果是？`,
    'answerId' : 1,
    'answers': [{
      'id': 1,
      'text': 'hi',
      'isAnswer': 1
    }, {
      'id': 2,
      'text': 'hi hello',
      'isAnswer': 0
    }, {
      'id': 3,
      'text': 'hello',
      'isAnswer': 0
    }, {
      'id': 4,
      'text': '不显示',
      'isAnswer': 0
    }]
  }, {
    'subjectId': 1,
    'typeId': 1,
    'text': '下面的语言中哪些语言是动态语言',
    'answerId' : 1,
    'answers': [{
      'id': 1,
      'text': 'JavaScript',
      'isAnswer': 1
    }, {
      'id': 2,
      'text': 'C',
      'isAnswer': 0
    }, {
      'id': 3,
      'text': 'CSS',
      'isAnswer': 0
    }, {
      'id': 4,
      'text': 'C++',
      'isAnswer': 0
    }]
  }, {
    'subjectId': 1,
    'typeId': 1,
    'text': '以下哪些表达式的结果不为true',
    'answerId' : 1,
    'answers': [{
      'id': 1,
      'text': 'isNaN("100")',
      'isAnswer': 1
    }, {
      'id': 2,
      'text': 'undefined == null',
      'isAnswer': 0
    }, {
      'id': 3,
      'text': 'parseInt("1a") === 1',
      'isAnswer': 0
    }, {
      'id': 4,
      'text': '[] instanceof Array',
      'isAnswer': 0
    }]
  }, {
    'subjectId': 1,
    'typeId': 1,
    'text': `var a = [1,4,5,2,9];
    下面求a中最大值正确的是`,
    'answerId' : 1,
    'notes': ' 使用apply方法，方法有两个参数，用作 this 的对象和要传递给函数的参数的数组。',
    'answers': [{
      'id': 1,
      'text': 'Math.max.apply(null,a)',
      'isAnswer': 1
    }, {
      'id': 2,
      'text': 'Math.max(a)',
      'isAnswer': 0
    }, {
      'id': 3,
      'text': 'Array.max(a)',
      'isAnswer': 0
    }, {
      'id': 4,
      'text': '以上均不是',
      'isAnswer': 0
    }]
  }],           // 题目
}
