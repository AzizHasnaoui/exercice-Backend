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

/////////////////////////////GET ALL EVENTs//////////////////////////////
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't get all books", error: error.message });
  }
};
