using UnityEngine;
using UnityEngine.EventSystems;

public class ClickToSetDestinationOnTurtle : UIBehaviour, IPointerClickHandler
    {
        public Player player;
        public void OnPointerClick(PointerEventData eventData)
        {
            var worldPositionOfTheClick = eventData.pointerCurrentRaycast.worldPosition;
            turtle.SetDestination(worldPositionOfTheClick);
        }
    }