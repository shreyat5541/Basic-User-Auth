const adoptedTrees = [
    { userId: 'user1', produce: 50 },
    { userId: 'user2', produce: 30 },
    // ... other adopted trees
  ];
  
  const totalProduce = adoptedTrees.reduce((total, tree) => total + tree.produce, 0);

  const distributeProduce = () => {
    const userShares = [];
  
    for (const tree of adoptedTrees) {
      const userIndex = userShares.findIndex((share) => share.userId === tree.userId);
  
      if (userIndex === -1) {
        // User not in the list, add a new entry
        userShares.push({ userId: tree.userId, share: tree.produce / totalProduce });
      } else {
        // User already in the list, update the share
        userShares[userIndex].share += tree.produce / totalProduce;
      }
    }
  
    return userShares;
  };
  
  const usersWithShares = distributeProduce();

  console.log(usersWithShares);
