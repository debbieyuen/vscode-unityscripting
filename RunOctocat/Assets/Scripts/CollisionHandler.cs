using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CollisionHandler : MonoBehaviour
{
    private void OnCollisionEnter(Collision collision)
    {
        switch (collision.gameObject.tag)
        {
            case "Gem":
                Debug.Log("You won a gem!");
                Destroy(collision.gameObject);
                break;
            case "Enemy":
                Debug.Log("You hit an opponent");
                break;
            default:
                break;
        }
    }
}

