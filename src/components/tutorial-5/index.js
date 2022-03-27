import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";

import "./index.css";

const Background = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [text, setText] = React.useState("");

  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const getLocalComments = localStorage.getItem("comments");
    const getComments = JSON.parse(getLocalComments);
    setComments(getComments);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSendMessage = (e) => {
    const randomIndex = Math.floor(Math.random() * 100);
    const time = new Date().toLocaleString();
    const comment = {
      id: randomIndex,
      fullName: fullName,
      email: email,
      createdAt: time,
      text: text,
    };

    if (!fullName.trim() && !text.trim()) {
      alert("заполните поля name message");
    } else {
      setComments([...comments, comment]);
      setFullName("");
      setEmail("");
      setText("");
    }
    e.target.reset();
    e.preventDefault();
  };

  const handleDelete = (id) => {
    const newComments = comments.filter((comment) => comment.id !== id);
    setComments(newComments);
  };

  return (
    <div className="wrapper-form">
      <Box sx={{ flexGrow: 1, maxWidth: 1752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Comments
            </Typography>
            <Background>
              <List>
                {comments?.length ? (
                  comments.map((comment) => (
                    <ListItem key={comment.id} className="show-comments">
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment.fullName}
                        secondary={comment.text}
                      />
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(comment.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  ))
                ) : (
                  <div>NO comments yet</div>
                )}
              </List>
            </Background>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="form"
        onSubmit={handleSendMessage}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="form-part"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          id="outlined-name"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-name"
          label="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};
export default ContactForm;
