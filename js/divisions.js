class Divisions extends Ground {
  display() {
    
    var pos = this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
