#pragma strict

public var speed = new Vector2(10, 10);
public var movement : Vector2;

function Update () 
{
	var inputX = Input.GetAxis("Horizontal");
	var inputY = Input.GetAxis("Vertical");
		
		// 4 - Movement per direction
		movement = new Vector2(
			speed.x * inputX,
			speed.y * inputY);
	// 5 - Shooting
    var shoot = Input.GetButtonDown("Fire1");
    shoot |= Input.GetButtonDown("Fire2");
    // Careful: For Mac users, ctrl + arrow is a bad idea

    if (shoot)
    {
      var weapon = GetComponent(WeaponScript);
      if (weapon != null)
      {
        // false because the player is not an enemy
        weapon.Attack(false);
      }
    }
}

function FixedUpdate()
{
	rigidbody2D.velocity = movement;
}

function OnCollisionEnter2D(collision : Collision2D)
{
	if(collision.rigidbody && collision.collider.name == "fence")
	{
		Destroy(collision.gameObject);
	}
}