using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.AI;

public class OpponentMovement : MonoBehaviour
{
    [SerializeField] private NavMeshAgent opponent;
    [SerializeField] private Transform Player;

    void Start()
    {
        opponent = GetComponent<NavMeshAgent>();
    }

    // Update is called once per frame
    void Update()
    {
        opponent.SetDestination(Player.position);
    }
}
