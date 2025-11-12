# Very Important Commands ✅✅✅✅

```
# before starting
git checkout main
git pull origin main

# create a new branch for every task
git checkout -b feature/my-task

# after writing code
git add .
git commit -m "your message"
git push -u origin feature/my-task

# Open PR -> Get Review -> Merge
# After PR merged :
git checkout main
git pull origin main
git branch -d feature/my-task

```

---

## ❌❌❌

```
1. Don't push directly to main
2. Don't start working without pulling latest changes
3. Don't work in someone else’s branch
4. Don't delete someone’s branch without confirmation
5. Don't push huge files (node_modules, .env, videos, builds)
```

---

# Important commands

```
#basic cmds
git status            # check what changed
git add .             # stage all changes
git commit -m "msg"   # commit with message

# braching (very important)
git branch                    # show all branches
git checkout -b feature/task  # create + switch branch
git checkout main             # switch to main

# push & pull cmds
git push -u origin branch-name   # push first time
git push                         # push next times
git pull origin main             # get latest main
git fetch                        # get remote changes without merging

# Merge & Update Branch:
git checkout feature/task
git fetch origin
git merge origin/main

```

---

# Task Solutions

### 1.solutions

```
function sum(a, b) {
  return a + b;
}
```

### 2.solutions

```
function max(a, b) {
  return a > b ? a : b;
}
```

### 3.solutions

```
function reverse(str) {
  return str.split("").reverse().join("");
}
```

### 4.solutions

```
function isEven(n) {
  return n % 2 === 0;
}
```

### 5.solutions

```
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
```

### 6.solutions

```
function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```
