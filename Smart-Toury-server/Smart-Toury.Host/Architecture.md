## Modules for MVP

1. **Identity**
   Auth, Registration, Roles, Permissions. Everything about "who you are in the system": User Profile, Preferences (history/gastronomy/street-art), pace, budget, and accessibility requirements (cane, wheelchair).

2. **Routes**
   Smart routing, weather adaptation, time of day. Handles standalone generated routes (e.g., walking without a guide). Completely separate from Marketplace.

3. **Marketplace**
   Tours, time slots, local experts (city-makers), and search. Handles the lifecycle of a tour offering. Does not handle payments. Publishes events (e.g., `TourBooked`).

4. **Booking**
   Handles the financial and communication aspects of a reservation. Tied to events from the Marketplace. Manages payments and the chat between tourist and guide within the context of a booking.

5. **Reviews**
   Three-dimensional ratings (guide / tour / infrastructure) and accessibility reviews. Influences Marketplace search positioning via domain events.

6. **Recommendations**
   Analyzes trends, personalizes feeds, and builds the "Live map POI". Consumes events from all other modules (`RouteCompleted`, `TourBooked`, `ReviewLeft`) to build scores and algorithms independently.
