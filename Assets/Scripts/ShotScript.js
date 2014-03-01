#pragma strict

public var damage = -1;
public var isEnemyShot = false;

public var speed = new Vector2(3, 0);
public var movement : Vector2;

function Start () 
{
	Destroy(gameObject, 5);
}

function Update () 
{
	movement = new Vector2(
		speed.x,
		speed.y * 0);
}

function FixedUpdate()
{
	rigidbody2D.velocity = movement;
}