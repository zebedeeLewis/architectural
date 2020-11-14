import * as Position from './Position'
import * as BoundaryBox from './BoundaryBox'



export function is_position_past_lower_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : boolean {
    const lowerBoundary =
      BoundaryBox.get_lower_boundary_from(boundaryBox)

    const yPosition = Position.get_y_from(position)

    return yPosition > lowerBoundary
  }



export function is_position_past_right_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : boolean {
    const rightBoundary =
      BoundaryBox.get_right_boundary_from(boundaryBox)

    const xPosition = Position.get_x_from(position)

    return xPosition > rightBoundary
  }



export function is_position_past_upper_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : boolean {
    const upperBoundary =
      BoundaryBox.get_upper_boundary_from(boundaryBox)

    const yPosition = Position.get_y_from(position)

    return yPosition < upperBoundary
  }



export function is_position_past_left_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : boolean {
    const leftBoundary =
      BoundaryBox.get_left_boundary_from(boundaryBox)

    const xPosition = Position.get_x_from(position)

    return xPosition < leftBoundary
  }



export function is_position_within_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : boolean {
    return (
         !is_position_past_lower_boundary(position, boundaryBox)
      && !is_position_past_right_boundary(position, boundaryBox)
      && !is_position_past_upper_boundary(position, boundaryBox)
      && !is_position_past_left_boundary(position, boundaryBox)
    )
  }



export function reset_y_position_within_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : Position.Model {
    return (
      is_position_past_upper_boundary(position, boundaryBox)
        ? Position.set_y_to
           ( BoundaryBox.get_upper_boundary_from(boundaryBox)
           , position
           ) :


      is_position_past_lower_boundary(position, boundaryBox)
        ? Position.set_y_to
           ( BoundaryBox.get_lower_boundary_from(boundaryBox)
           , position
           )
        : position
    )
  }



export function reset_x_position_within_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : Position.Model {
    return (
      is_position_past_left_boundary(position, boundaryBox)
        ? Position.set_x_to
           ( BoundaryBox.get_left_boundary_from(boundaryBox)
           , position
           ) :


      is_position_past_right_boundary(position, boundaryBox)
        ? Position.set_y_to
           ( BoundaryBox.get_right_boundary_from(boundaryBox)
           , position
           )
        : position
    )
  }




export function reset_xy_position_within_boundary
  ( position    : Position.Model
  , boundaryBox : BoundaryBox.Model
  ) : Position.Model {
    return (
      reset_y_position_within_boundary
        ( reset_x_position_within_boundary
            ( position
            , boundaryBox
            )
        , boundaryBox
        )
    )
  }
