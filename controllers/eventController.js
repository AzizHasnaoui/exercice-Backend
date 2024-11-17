import Event from "../models/Event.js";

/////////////////////////////CREATE NEW EVENT//////////////////////////////
export const createEvent = async (req, res) => {
  const { title, startDate, endDate } = req.body;

  try {
    const newEvent = new Event({ title, startDate, endDate });
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not create event", error: error.message });
  }
};

/////////////////////////////GET ALL EVENTS//////////////////////////////
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not get all events", error: error.message });
  }
};

/////////////////////////////GET EVENT BY ID//////////////////////////////
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not get event by ID", error: error.message });
  }
};

/////////////////////////////UPDATE EVENT//////////////////////////////
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res
      .status(200)
      .json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not update event", error: error.message });
  }
};

/////////////////////////////DELETE EVENT//////////////////////////////
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res
      .status(200)
      .json({ message: "Event deleted successfully", event: deletedEvent });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not delete event", error: error.message });
  }
};
