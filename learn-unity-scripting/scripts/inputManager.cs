using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    [Header("General Setup Settings")]
    [SerializeField] private InputAction movement;
    [Tooltip("How fast player moves up and down based upon player input")][SerializeField] float controlSpeed = 30f;
    [Tooltip("How far player moves horizontally")][SerializeField] float xRange = 10f;
    [Tooltip("How far player moves vertically")][SerializeField] float zRange = 10f;

    [Header("Screen position based tuning")]
    [SerializeField] float positionPitchFactor = -2f;
    [SerializeField] float positionYawFactor = 2f;

    [Header("Player input based tuning")]
    [SerializeField] float controlPitchFactor = 10f;
    [SerializeField] float controlRollFactor = -20f;
    float xThrow;
    float zThrow;

    private void OnEnable()
    {

    }

    private void OnDisable()
    {

    }

    void Update()
    {

    }

    private void ProcessRotation()
    {

    }

    private void ProcessTranslation()
    {

    }
}
