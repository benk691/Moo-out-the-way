#pragma strict

public var shotPrefab : Transform;

public var shootingRate = 0.25f;

private var shootCooldown : float;

function Start() 
{
	shootCooldown = 0f;
}

function Update() 
{
	if(shootCooldown > 0)
	{
		shootCooldown -= Time.deltaTime;
	}
}

function Attack(isEnemy : boolean)
{
	if(CanAttack)
	{
		shootCooldown = shootingRate;

		var shotTransform = Instantiate(shotPrefab) as Transform;

		// Assign position
		shotTransform.position = transform.position;

		// The is enemy property
		var shot = shotTransform.gameObject.GetComponent(ShotScript);
		if (shot != null)
		{
			shot.isEnemyShot = isEnemy;
		}

		// Make the weapon shot always towards it
		var move = shotTransform.gameObject.GetComponent(ShotScript);
		if (move != null)
		{
			move.movement = this.transform.right; // towards in 2D space is the right of the sprite
		}
	}
}

function CanAttack()
{
	return shootCooldown <= 0f;
}