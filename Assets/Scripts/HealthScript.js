#pragma strict

function Damage() {
	var scale = gameObject.transform.localScale;
	gameObject.transform.localScale = new Vector3(scale.x/2,scale.y/2,scale.z/2);
	if(scale.x < .25)
	{
		Destroy(gameObject);
	}
}

function OnTriggerEnter2D(otherCollider : Collider2D)
{
	var shot = otherCollider.gameObject.GetComponent(ShotScript);
	if(shot != null)
	{
		Damage();
	}
	Destroy(shot.gameObject);
}