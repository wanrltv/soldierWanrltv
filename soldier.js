const soldier = {
  name: "Billy",
  health: 10,
  supplies: 3,
  gun: {
    gunName: "glock18",
    bullets: 15,
  },

  fire: function () {
    if (this.gun.bullets > 0) {
      this.gun.bullets--;
      console.log(`pew-pew (Осталось ${this.gun.bullets} патронов.)`);
    }
    if (this.gun.bullets === 0) console.log("Обойма пуста. Перезарядись!");
  },

  reload: function () {
    console.log("Перезарядка...");
    if (this.supplies > 0) {
      this.gun.bullets = 30;
      this.supplies--;
      if (this.supplies === 0) {
        console.log("Припасов для дальнейших перезарядок не осталось.");
      }
    }
    if (this.supplies === 0) console.log("Припасов больше нет.");
  },

  hurt: function () {
    if (this.health > 0) {
      this.health--;
      console.log(
        `Ребята, в меня попали, я двухсотый. (Осталось ${this.health} здоровья.)`
      );
    }
    if (this.health === 0) console.log("GameOver");
  },
};

