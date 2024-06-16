import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const SocialMediaFeed = (props) => {
  console.log("socialmediafeed-props", props)
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ subject: '', content: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewPost({ subject: '', content: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    setPosts([{ ...newPost, username: 'User', id: posts.length + 1 }, ...posts]);
    handleClose();
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleUpdate = (id) => {
    const postToUpdate = posts.find(post => post.id === id);
    setNewPost({ subject: postToUpdate.subject, content: postToUpdate.content });
    setPosts(posts.filter(post => post.id !== id));
    setOpen(true);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="subject"
            label="Subject Heading"
            fullWidth
            value={newPost.subject}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="content"
            label="Post Content"
            fullWidth
            multiline
            rows={4}
            value={newPost.content}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Create Post
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <ListItemText
              primary={`${post.username}: ${post.subject}`}
              secondary={post.content}
            />
            {props.token && post.username === props.username(
            <IconButton edge="end" aria-label="edit" onClick={() => handleUpdate(post.id)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(post.id)}>
              <Delete />
            </IconButton>

            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SocialMediaFeed;
