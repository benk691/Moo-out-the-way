#pragma strict

var hp = -1;
var isEnemy = true;

function Damage(damageCount : int)
{
	hp -= damageCount;
	if(hp <= 0)
	{
		Destroy(gameObject);
	}
}

function OnTriggerEnter2D(collider : Collider2D)
{
	var shot = collider.gameObject.GetComponent(ShotScript);
	if(shot != null)
	{
		if(shot.isEnemyShot != isEnemy)
		{
			Damage(shot.damage);

			Destroy(shot.gameObject);
		}
	}
}