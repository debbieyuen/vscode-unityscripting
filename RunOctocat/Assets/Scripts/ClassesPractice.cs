using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClassesPractice : MonoBehaviour
{
    // Parent Class
    public class Projectiles
    {
        public int projectileA;
        public int projectileB;
        public int projectileC;
        public float fuel;

        // Constructor
        public Projectiles()
        {
            projectileA = 1;
            projectileB = 2;
            projectileC = 3;
        }

        // Constructor with passed variables
        public Projectiles(int prA, int prB, int prC)
        {
            projectileA = prA;
            projectileB = prB;
            projectileC = prC;
        }

        // Constructor with passed variables
        public Projectiles(int prA, float fu)
        {
            projectileA = prA;
            fuel = fu;
        }
    }

    // Child Class
    // Create an Instance (an Object) of the Projectiles class
    public Projectiles mySubProjectiles = new Projectiles(50, 5, 4);
    public Projectiles mySecondSubProjectiles = new Projectiles(50, 2.5f);

    // Start is called before the first frame update
    void Start()
    {
        Debug.Log(mySubProjectiles.projectileA);
    }
}
