using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.InputSystem;
using UnityEngine.InputSystem.UI;

public class PlayerMovement : UIBehavior, IPointerClickHandler
{
    public Player player;
    public float force;
    public void Input.GetMouseDown(PointerEventData eventData)
    {
        var rigidbody = GetComponent<Rigidbody2D>();
        rigidbody.AddForce(Vector3.up * force, ForceMode2D.Impulse);
    }
}